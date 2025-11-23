import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import IndependenAdminRoutes from "./routes/IndependenAdminRoutes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        {IndependenAdminRoutes()}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
