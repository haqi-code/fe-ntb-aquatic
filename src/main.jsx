import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRouted from "./utils/protectedRoute";
import NotFound from "./pages/NotFound";
import AdminPage from "./pages/AdminPage";
import JuriPage from "./pages/JuriPage";
import IndependenPage from "./pages/IndependenAdminPage";
import MultiEvent from "./components/master-data/MultiEvent";
import JuriMaster from "./components/master-data/Juri";
import PelatihMaster from "./components/master-data/Pelatih";
import AtletMaster from "./components/master-data/Atlet";
import DashboardAdmin from "./components/DashboardAdmin";
import IndependenAdminLayout from "./Layout/IndependenAdminLayout";
import DashboardIndependen from "./components/Independen/DashboardIndependen";
import AtletIndependen from "./components/Independen/AtletIndependen";
import MultiEventIndependen from "./components/Independen/MultiEventIndependen";
import TimeKeeperIndependen from "./components/Independen/TimeKeeperIndependen";
import EventIndependen from "./components/Independen/EventIndependen";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/admin/"
          element={
            <ProtectedRouted role="Admin">
              <AdminPage />
            </ProtectedRouted>
          }
        />
        <Route
          path="/juri/"
          element={
            <ProtectedRouted role="Juri">
              <JuriPage />
            </ProtectedRouted>
          }
        />
        <Route
          path="/independen-admin"
          element={
            <ProtectedRouted role="AdminIndependen">
              <IndependenAdminLayout />
            </ProtectedRouted>
          }
        >
          <Route index element={<DashboardIndependen />} />
          <Route path="multi-event-independen" element={<MultiEventIndependen />} />
          <Route path="event" element={<EventIndependen />} />
          <Route path="atlet" element={<AtletIndependen />} />
          <Route path="time-keeper" element={<TimeKeeperIndependen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
