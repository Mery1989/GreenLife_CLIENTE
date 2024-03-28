
import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/Home/HomePage"
import EventListPage from "../pages/EventListPages/EventListPages"
import UserSingupPage from "../pages/UserSingupPages/UserSingupPages"
import Contactuspage from "../pages/ContactUsPages/ContactUsPages"
import CarbonPage from "../pages/CarbonPages/CarbonPages"
import AboutUsPages from "../pages/AboutUsPages/AboutUsPages"
import LoginPages from "../pages/LoginPages/LoginPages"
import EventDetailPage from "../pages/EventDetailPage/EventDetailPage"
import PlantListPage from "../pages/PlantListPages/PlantListPages"
import PlantDetailPage from "../pages/PlantDetailPage/PlantDetailPage"


const AppRoutes = () => {
    return (
  <Routes>
    <Route path="/"  element={<HomePage />} />

    <Route path="/eventos" element={<EventListPage />} />
    <Route path="/eventos/detalles/:id" element={<EventDetailPage/>} />

    <Route path="/esquejes" element={<PlantListPage />} />
    <Route path="/esquejes/detalles/:id" element={<PlantDetailPage/>} />

    <Route path="/login" element={<LoginPages />} />
    <Route path="/singup" element={<UserSingupPage />} />

    <Route path="/contactanos" element={<Contactuspage />} />
    <Route path="/sobreNosotros" element={<AboutUsPages />} />
    <Route path="/huellacarbono" element={<CarbonPage />} />
  </Routes>
  )
}

export default AppRoutes
