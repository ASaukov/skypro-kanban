import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { MainPage } from "../pages/MainPage/MainPage.jsx";
import { NotFound } from "../pages/NotFound/NotFound.jsx";
import { LoginPage } from "../pages/LoginPage/LoginPage.jsx";
import { RegistrPage } from "../pages/RegistrPage/RegistrPage.jsx";
import { PrivateRoute } from "./Privateroute.jsx";

import { ExitPage } from "../pages/ExitPage/ExitPage.jsx";
import { ViewCard } from "../pages/ViewCard/viewcard.jsx";
import { NewCard } from "../pages/NewCard/newcard.jsx";
import { UserProvider } from "../context/UserContext/UserContext.jsx";

export const AppRoutes = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes> 
          <Route element={<PrivateRoute />}>
            <Route path={routes.main} element={<MainPage />}>
              <Route path={routes.exit} element={<ExitPage />} />
              <Route path={routes.card} element={<ViewCard />} />
              <Route path={routes.newcard} element={<NewCard />} />
            </Route>
          </Route>
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.registr} element={<RegistrPage />} />
          <Route path={routes.notFound} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};
