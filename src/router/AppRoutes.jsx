import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes"

import { MainPage } from "../pages/MainPage/MainPage.jsx"
import { NotFound } from "../pages/NotFound/NotFound.jsx"
import { LoginPage } from "../pages/LoginPage/LoginPage.jsx"
import { RegistrPage } from "../pages/RegistrPage/RegistrPage.jsx"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path={routes.main} element={<MainPage/>}/>
            <Route path={routes.login} element={<LoginPage/>}/>
            <Route path={routes.registr} element={<RegistrPage/>}/>
            <Route path={routes.notFound} element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}