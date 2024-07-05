import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes"
import { MainPage } from "../pages/MainPage/MainPage.jsx"
import { NotFound } from "../pages/NotFound/NotFound.jsx"
import { LoginPage } from "../pages/LoginPage/LoginPage.jsx"
import { RegistrPage } from "../pages/RegistrPage/RegistrPage.jsx"
import { PrivateRoute } from "./Privateroute.jsx"
import { useState } from "react"
import { ExitPage } from "../pages/ExitPage/ExitPage.jsx"
import { ViewCard } from "../pages/ViewCard/viewcard.jsx"

export const AppRoutes = () => {
    const [user, setUser] = useState(null)
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute user={user}/>}>
                    <Route path={routes.main} element={<MainPage user={user} setUser={setUser}/>}>
                        <Route path={routes.exit} element={<ExitPage setUser={setUser}/>}/>
                        <Route path={routes.card} element={<ViewCard/>}/>
                    </Route>
                </Route>
            <Route path={routes.login} element={<LoginPage setUser={setUser}/>}/>
            <Route path={routes.registr} element={<RegistrPage setUser={setUser}/>}/>
            <Route path={routes.notFound} element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}