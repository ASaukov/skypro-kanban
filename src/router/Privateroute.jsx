import { Navigate, Outlet } from "react-router-dom";
import { routes } from "./routes";

export const PrivateRoute = ({isAuth}) => {
    return isAuth ? <Outlet/> : <Navigate to={routes.login}/>
}