import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes"

import { MainPage } from "../pages/MainPage/MainPage.jsx"
import { NotFound } from "../pages/NotFound/NotFound.jsx"
import { LoginPage } from "../pages/LoginPage/LoginPage.jsx"
import { RegistrPage } from "../pages/RegistrPage/RegistrPage.jsx"
import { PrivateRoute } from "./Privateroute.jsx"
import { useState } from "react"

export const AppRoutes = () => {
    const [isAuth, setIsAuth] = useState(false)
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute isAuth={isAuth}/>}>
                    <Route path={routes.main} element={<MainPage/>}/>
                    
                </Route>
            <Route path={routes.login} element={<LoginPage setIsAuth={setIsAuth}/>}/>
            <Route path={routes.registr} element={<RegistrPage/>}/>
            <Route path={routes.notFound} element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}