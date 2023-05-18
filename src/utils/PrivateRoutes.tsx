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
        toast("You need to be logged in to access this page")
    }
    return user?.email ?
        <div>
            <Toaster />
            <Outlet />
        </div> :
        <div>
            <Toaster />
            <Navigate to="/" />
        </div>;
}