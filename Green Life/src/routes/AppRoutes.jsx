
import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/Home/HomePage"
import EventListPage from "../pages/EventListPages/EventListPages"
import UserSingupPage from "../pages/UserSingupPages/UserSingupPages"
import Contactuspage from "../pages/ContactUsPages/ContactUsPages"
import CarbonPage from "../pages/CarbonPages/CarbonPages"
<<<<<<< Updated upstream
import AboutUsPages from "../pages/AboutUsPages/AboutUsPages"
import LoginPages from "../pages/LoginPages/LoginPages"
=======
>>>>>>> Stashed changes
const AppRoutes = () => {
    return (
  <Routes>
    <Route element={<HomePage />} path="/" />
    <Route element={<EventListPage />} path="/eventos" />
    <Route element={<UserSingupPage />} path="/singup" />
    <Route element={<Contactuspage />} path="/contactanos" />
<<<<<<< Updated upstream
    <Route element={<AboutUsPages />} path="/sobreNosotros" />
    <Route element={<CarbonPage />} path="/huella-carbono" />
    <Route element={<LoginPages />} path="/login" />
=======
    <Route element={<CarbonPage />} path="/huella-carbono"/>
>>>>>>> Stashed changes
  </Routes>
  )
}

export default AppRoutes
