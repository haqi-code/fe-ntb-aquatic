import { useState } from "react";
import {
  UserCheck,
  UserCog,
  Gavel,
  Trophy,
  Settings,
  Home,
  ClipboardList,
  Calendar,
  Medal,
  FileSpreadsheet,
  ShieldCheck,
  Timer,
} from "lucide-react";

export default function Sidebar({ role, onMenuSelect }) {
  const menus = {
    Admin: [
      {
        title: "Menu",
        items: [
          {
            key: "dashboardAdmin",
            label: "Dashboard",
            icon: <Home size={18} />,
          },
          {
            key: "multiEvent",
            label: "Multi Event",
            icon: <Calendar size={18} />,
          },
          { key: "event", label: "Event", icon: <ClipboardList size={18} /> },
        ],
      },
      {
        title: "Master Data",
        items: [
          { key: "atlet", label: "Atlet", icon: <Medal size={18} /> },
          { key: "pelatih", label: "Pelatih", icon: <UserCheck size={18} /> },
          { key: "juri", label: "Juri", icon: <Gavel size={18} /> },
          {
            key: "hakim-juri",
            label: "Hakim Juri",
            icon: <ShieldCheck size={18} />,
          },
        ],
      },
      {
        title: "Pengaturan",
        items: [
          { key: "role", label: "Role", icon: <UserCog size={18} /> },
          { key: "user", label: "User", icon: <Settings size={18} /> },
        ],
      },
    ],
    Juri: [
      {
        title: "Dashboard",
        items: [
          { key: "dashboard", label: "Dashboard", icon: <Home size={18} /> },
        ],
      },
      {
        title: "Lomba",
        items: [
          {
            key: "penilaian",
            label: "Penilaian",
            icon: <FileSpreadsheet size={18} />,
          },
          { key: "hasil", label: "Hasil Lomba", icon: <Trophy size={18} /> },
        ],
      },
    ],
    AdminIndependen: [
      {
        title: "Menu",
        items: [
          {
            key: "dashboardIndependen",
            label: "Dashboard",
            icon: <Home size={18} />,
          },
          {
            key: "multiEventIndependen",
            label: "Multi Event",
            icon: <Calendar size={18} />,
          },
          {
            key: "eventIndependen",
            label: "Event",
            icon: <Calendar size={18} />,
          },
        ],
      },
      {
        title: "Master Data",
        items: [
          {
            key: "atletIndependen",
            label: "Data Atlet",
            icon: <Medal size={18} />,
          },

          { key: "juriIndependen", label: "Juri", icon: <Gavel size={18} /> },
          {
            key: "timeKeeperIndependen",
            label: "Time Keeper",
            icon: <Timer size={18} />,
          },
        ],
      },
    ],
  };

  const roleMenus = menus[role] || [];
  const [active, setActive] = useState("dashboard");

  function handleSelect(key) {
    setActive(key);
    onMenuSelect(key);
  }

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
                onClick={() => handleSelect(menu.key)}
                className={`flex items-center w-full px-3 py-2 rounded transition
                  ${
                    active === menu.key
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
