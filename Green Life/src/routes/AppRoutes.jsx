
import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/Home/HomePage"
import EventListPage from "../pages/EventListPages/EventListPages"

const AppRoutes = () => {
    return (
  <Routes>
    <Route element={<HomePage />} path="/" />
    <Route element={<EventListPage />} path="/eventos" />
  </Routes>
  )
}

export default AppRoutes
