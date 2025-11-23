import { Outlet, Link, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function IndependenAdminLayout() {
  const location = useLocation();

  const hideSidebar = location.pathname.includes(
    "multi-event-independen/detail"
  );

  return (
    <div className="flex w-full h-screen">
      {!hideSidebar && <Sidebar role="IndependenAdmin" />}

      <div className="flex-1 overflow-auto bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
}
