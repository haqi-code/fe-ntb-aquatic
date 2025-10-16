import { useState } from "react";
import Sidebar from "./sidebar";
import AtletMaster from "./master-data/Atlet";
import PelatihMaster from "./master-data/Pelatih";
import JuriMaster from "./master-data/Juri";
import HakimJuriMaster from "./master-data/HakimJuri";
import EventMaster from "./master-data/Event";

export default function Layout({ role }) {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  function renderContent() {
    switch (activeMenu) {
      case "dashboard":
        return <AtletMaster />;
      case "atlet":
        return <AtletMaster />;
      case "pelatih":
        return <PelatihMaster />;
      case "juri":
        return <JuriMaster />;
      case "penilaian":
        return <AtletMaster />;
      case "hasil":
        return <AtletMaster />;
      case "hakim-juri":
        return <HakimJuriMaster />;
      case "event":
        return <EventMaster />;
      default:
        return <div className="p-6">Silakan pilih menu di sidebar.</div>;
    }
  }

  return (
    <div className="flex">
      <Sidebar role={role} onMenuSelect={setActiveMenu} />
      <div className="flex-1 bg-gray-50 min-h-screen">{renderContent()}</div>
    </div>
  );
}
