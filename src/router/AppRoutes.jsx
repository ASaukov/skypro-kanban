import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes"

import { MainPage } from "../pages/MainPage/MainPage.jsx"
import { NotFound } from "../pages/NotFound/NotFound.jsx"
import { LoginPage } from "../pages/LoginPage/LoginPage.jsx"
import { RegistrPage } from "../pages/RegistrPage/RegistrPage.jsx"
import { PrivateRoute } from "./Privateroute.jsx"
import { useState } from "react"
import { ExitPage } from "../pages/ExitPage/ExitPage.jsx"
import { ViewCard } from "../pages/ViewCard/ViewCard.jsx"

export const AppRoutes = () => {
    const [isAuth, setIsAuth] = useState(false)
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute isAuth={isAuth}/>}>
                    <Route path={routes.main} element={<MainPage/>}>
                        <Route path={routes.exit} element={<ExitPage setIsAuth={setIsAuth}/>}/>
                        <Route path={routes.card} element={<ViewCard/>}/>
                    </Route>
                </Route>
            <Route path={routes.login} element={<LoginPage setIsAuth={setIsAuth}/>}/>
            <Route path={routes.registr} element={<RegistrPage/>}/>
            <Route path={routes.notFound} element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}