import { Navigate, Outlet } from "react-router-dom";
import { routes } from "./routes";

export const PrivateRoute = ({user}) => {
    return user ? <Outlet/> : <Navigate to={routes.login}/>
}