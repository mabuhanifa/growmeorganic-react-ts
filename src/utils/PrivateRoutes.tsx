import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Navigate, Outlet } from "react-router-dom";
import { User } from "../types/types";

export default function PrivateRoutes() {
    const [user] = useState<User | undefined>(() => {
        try {
            const value = localStorage.getItem("loggedUser");
            return value ? JSON.parse(value) : null;
        } catch (err) {
            return null;
        }
    });
    if (!user?.email) {
        toast.error("You need to be logged in to access the 2nd page", { duration: 2000 })
    }
    return user?.email ?
        <>
            <Outlet />
        </> :
        <>
            <Toaster />
            <Navigate to="/" />
        </>;
}