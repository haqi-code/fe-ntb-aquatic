import { Calendar, ClipboardList, Gavel, Home, Medal, UserCheck } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar({ role }) {
  const navigate = useNavigate();
  const location = useLocation(); // untuk set active berdasarkan url

  const menus = {
    Admin: [
      {
        title: "Menu",
        items: [
          { key: "", label: "Dashboard", path: "/admin", icon: <Home size={18} /> },
          { key: "multiEventIndependen", label: "Multi Event", path: "/independen-admin/multi-event-independen", icon: <Calendar size={18} /> },
          { key: "eventIndependen", label: "Event", path: "/independen-admin/event", icon: <ClipboardList size={18} /> },
        ],
      },
      {
        title: "Master Data",
        items: [
          { key: "atletIndependen", label: "Atlet", path: "/independen-admin/atlet", icon: <Medal size={18} /> },
          { key: "timeKeeperIndependen", label: "Time Keeper", path: "/independen-admin/time-keeper", icon: <Gavel size={18} /> },
        ],
      },
    ],
  };
    IndependenAdmin: [
      {
        title: "Menu",
        items: [
          { key: "", label: "Dashboard", path: "/independen-admin", icon: <Home size={18} /> },
          { key: "multiEventIndependen", label: "Multi Event", path: "/independen-admin/multi-event-independen", icon: <Calendar size={18} /> },
          { key: "eventIndependen", label: "Event", path: "/independen-admin/event", icon: <ClipboardList size={18} /> },
        ],
      },
      {
        title: "Master Data",
        items: [
          { key: "atletIndependen", label: "Atlet", path: "/independen-admin/atlet", icon: <Medal size={18} /> },
          { key: "timeKeeperIndependen", label: "Time Keeper", path: "/independen-admin/time-keeper", icon: <Gavel size={18} /> },
        ],
      },
    ],
  };

  const roleMenus = menus[role] || [];

  return (
    <div className="h-screen w-64 bg-blue-900 text-white flex flex-col sticky top-0">
      <div className="p-4 text-xl font-bold border-b border-blue-700">
        {role} Panel
      </div>
      <nav className="flex-1 p-4 space-y-4 overflow-y-auto">
        {roleMenus.map((section) => (
          <div key={section.title}>
            <h2 className="text-sm uppercase text-gray-300 mb-2">
              {section.title}
            </h2>
            {section.items.map((menu) => (
              <button
                key={menu.key}
                onClick={() => navigate(menu.path)}
                className={`flex items-center w-full px-3 py-2 rounded transition
                  ${
                    location.pathname === menu.path
                      ? "bg-blue-700 font-semibold"
                      : "hover:bg-blue-700"
                  }`}
              >
                <span className="mr-2">{menu.icon}</span>
                {menu.label}
              </button>
            ))}
          </div>
        ))}
      </nav>
    </div>
  );
}
