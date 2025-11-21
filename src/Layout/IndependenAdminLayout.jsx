import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function IndependenAdminLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar role="IndependenAdmin" />

      <div className="flex-1 overflow-auto bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
}
