import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "../contextAPI/Context";

export default function PrivateRoutes() {
    const user = useSelector(state => state.user);
    return user.email ? <Outlet /> : <Navigate to="/" />;
}