import { ArrowLeft, Check } from "lucide-react";

export default function SidebarEvent({ onBack, onSelect }) {
  const menus = [
    { key: "pendaftaran", label: "Pendaftaran" },
    { key: "juknis", label: "Juknis" },
    { key: "lomba", label: "Lomba" },
  ];

  return (
    <div className="h-screen sticky mt-0 bg-amber-200">
      <div className="p-3 cursor-pointer" onClick={onBack}>
        <ArrowLeft size={30} color="grey" />
      </div>
      <div className="w-1/6 h-[92vh] py-4 px-10 pt-3">
        {menus.map((menu) => (
          <div
            key={menu.key}
            onClick={() => onSelect(menu.key)}
            className="flex items-center gap-4 py-2 cursor-pointer"
          >
            <div className="bg-amber-800 rounded-full">
              <Check size={18} />
            </div>
            <p className="text-lg">{menu.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
