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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
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
          path="/independen-admin/"
          element={
            <ProtectedRouted role="AdminIndependen">
              <IndependenPage />
            </ProtectedRouted>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
