import { Route } from "react-router-dom";
import ProtectedRouted from "../utils/protectedRoute";
import AdminLayout from "../Layout/AdminLayout";
import DashboardAdmin from "../components/Admin/DashboardAdmin";
import MultiEventAdmin from "../components/Admin/MultiEvent/MultiEventAdmin";

export default function AdminRoutes() {
  return (
    <Route
      path="/admin"
      element={
        <ProtectedRouted role="Admin">
          <AdminLayout />
        </ProtectedRouted>
      }
    >
      <Route index element={<DashboardAdmin />} />
      <Route path="multi-event"index element={<MultiEventAdmin />} />
    </Route>
  );
}
