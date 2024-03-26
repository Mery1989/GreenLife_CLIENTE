
import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/Home/HomePage"
import EventListPage from "../pages/EventListPages/EventListPages"
import UserSingupPage from "../pages/UserSingupPages/UserSingupPages"
import Contactuspage from "../pages/ContactUsPages/ContactUsPages"
import CarbonPage from "../pages/CarbonPages/CarbonPages"
import AboutUsPages from "../pages/AboutUsPages/AboutUsPages"
import LoginPages from "../pages/LoginPages/LoginPages"
const AppRoutes = () => {
    return (
  <Routes>
    <Route element={<HomePage />} path="/" />
    <Route element={<EventListPage />} path="/eventos" />
    <Route element={<UserSingupPage />} path="/singup" />
    <Route element={<Contactuspage />} path="/contactanos" />
    <Route element={<AboutUsPages />} path="/sobreNosotros" />
    <Route element={<CarbonPage />} path="/huella-carbono" />
    <Route element={<LoginPages />} path="/login" />
  </Routes>
  )
}

export default AppRoutes
