// import { useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import AtletMaster from "./master-data/Atlet";
// import PelatihMaster from "./master-data/Pelatih";
// import JuriMaster from "./master-data/Juri";
// import HakimJuriMaster from "./master-data/HakimJuri";
// import EventMaster from "./master-data/Event";
// import DashboardAdmin from "./DashboardAdmin";
// import MultiEvent from "./master-data/MultiEvent";
// import SidebarEvent from "./SidebarEvent";
// import DashboardIndependen from "./Independen/DashboardIndependen";
// import AtletIndependen from "./Independen/AtletIndependen";
// import JuriIndependen from "./Independen/JuriIndependen";
// import TimeKeeperIndependen from "./Independen/TimeKeeperIndependen";
// import MultiEventIndependen from "./Independen/MultiEventIndependen";
// import EventIndependen from "./Independen/EventIndependen";
// import PendaftaranMultiEventAdminIndependen from "./Independen/PendaftaranMultiEventAdminIndependen";
// import JuknisMultiEventAdminIndependen from "./Independen/JuknisMultiEventAdminIndependen";
// import LombaMultiEventAdminIndependen from "./Independen/lombaMultiEventAdminIndependen";
// import RingkasanMultiEventAdminIndependen from "./Independen/RingkasanMultiEventAdminIndependen";
// import SidebarRingkasan from "./SidebarRingkasan";
// import HeaderDetail from "./HeaderDetail";

// export default function Layout({ role }) {
//   const [activeMenu, setActiveMenu] = useState("");
//   const [showSidebarEvent, setShowSidebarEvent] = useState(false);
//   const [eventMenu, setEventMenu] = useState("");
//   const [eventType, setEventType] = useState("");

//   useEffect(() => {
//     if (role === "Admin") setActiveMenu("dashboardAdmin");
//     else if (role === "AdminIndependen") setActiveMenu("dashboardIndependen");
//     else if (role === "Juri") setActiveMenu("juri");
//   }, [role]);

//   function renderContent() {
//     if (showSidebarEvent) {
//       const activeEventMenu = eventMenu || "pendaftaran";

//       if (role === "Admin") {
//         if (eventType === "multi") {
//           switch (activeEventMenu) {
//             case "pendaftaran":
//               return <PendaftaranMultiEventAdmin />;
//             case "juknis":
//               return <JuknisMultiEventAdmin />;
//             case "lomba":
//               return <LombaMultiEventAdmin />;
//           }
//         } else if (eventType === "single") {
//           switch (activeEventMenu) {
//             case "pendaftaran":
//               return <PendaftaranEventAdmin />;
//             case "juknis":
//               return <JuknisEventAdmin />;
//             case "lomba":
//               return <LombaEventAdmin />;
//           }
//         }
//       }
//       if (role === "AdminIndependen") {
//         if (eventType === "multi") {
//           switch (activeEventMenu) {
//             case "pendaftaran":
//               return <PendaftaranMultiEventAdminIndependen />;
//             case "juknis":
//               return <JuknisMultiEventAdminIndependen />;
//             case "lomba":
//               return <LombaMultiEventAdminIndependen />;
//             case "ringkasan":
//               return <RingkasanMultiEventAdminIndependen />;
//           }
//         } else if (eventType === "single") {
//           switch (activeEventMenu) {
//             case "pendaftaran":
//               return <PendaftaranEventAdminIndependen />;
//             case "juknis":
//               return <JuknisEventAdminIndependen />;
//             case "lomba":
//               return <LombaEventAdminIndependen />;
//           }
//         }
//       }
//       if (role === "Juri") {
//         if (eventType === "multi") {
//           switch (activeEventMenu) {
//             case "pendaftaran":
//               return <PendaftaranMultiEventJuri />;
//             case "juknis":
//               return <JuknisMultiEventJuri />;
//             case "lomba":
//               return <LombaMultiEventJuri />;
//           }
//         } else if (eventType === "single") {
//           switch (activeEventMenu) {
//             case "pendaftaran":
//               return <PendaftaranEventJuri />;
//             case "juknis":
//               return <JuknisEventJuri />;
//             case "lomba":
//               return <LombaEventJuri />;
//           }
//         }
//       }
//       return <div className="p-6">Pilih menu di sidebar event.</div>;
//     }

//     switch (activeMenu) {
//       case "dashboardAdmin":
//         return <DashboardAdmin />;
//       case "atlet":
//         return <AtletMaster />;
//       case "pelatih":
//         return <PelatihMaster />;
//       case "juri":
//         return <JuriMaster />;
//       case "penilaian":
//         return <AtletMaster />;
//       case "hasil":
//         return <AtletMaster />;
//       case "hakim-juri":
//         return <HakimJuriMaster />;
//       case "multiEvent":
//         return <MultiEvent setShowSidebarEvent={setShowSidebarEvent} />;
//       case "event":
//         return <EventMaster />;
//       case "dashboardIndependen":
//         return <DashboardIndependen />;
//       case "multiEventIndependen":
//         return (
//           <MultiEventIndependen
//             setShowSidebarEvent={setShowSidebarEvent}
//             setEventMenu={setEventMenu}
//             setEventType={setEventType}
//           />
//         );
//       case "eventIndependen":
//         return <EventIndependen />;
//       case "atletIndependen":
//         return <AtletIndependen />;
//       case "juriIndependen":
//         return <JuriIndependen />;
//       case "timeKeeperIndependen":
//         return <TimeKeeperIndependen />;
//       default:
//         return <div className="p-6">Silakan pilih menu di sidebar.</div>;
//     }
//   }

//   return (
//     <div className="flex">
//       {!showSidebarEvent && (
//         <Sidebar role={role} onMenuSelect={setActiveMenu} />
//       )}
//       {showSidebarEvent ? (
//         <>
//           <SidebarEvent onSelect={setEventMenu} />
//           <HeaderDetail
//             role={role}
//             onBack={() => setShowSidebarEvent(false)}
//             eventType={eventType}
//           />
//           <div className="flex-1 bg-gray-50 min-h-screen">
//             {renderContent()}
//           </div>
//           <SidebarRingkasan role={role} eventType={eventType} />
//         </>
//       ) : (
//         <div className="flex-1 bg-gray-50 min-h-screen">{renderContent()}</div>
//       )}
//     </div>
//   );
// }
