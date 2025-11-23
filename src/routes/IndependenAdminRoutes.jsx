import { Route } from "react-router-dom";
import ProtectedRouted from "../utils/protectedRoute";
import IndependenAdminLayout from "../Layout/IndependenAdminLayout";
import DashboardIndependen from "../components/Independen/DashboardIndependen";
import MultiEventIndependen from "../components/Independen/MultiEventIndependen";
import SemuaMultiEvent from "../components/Independen/MultiEvent/SemuaMultiEventIndependen";
import RingkasanMultiEventAdminIndependen from "../components/Independen/RingkasanMultiEventAdminIndependen";
import MultiEventAkanDatang from "../components/Independen/MultiEvent/MultiEventAkanDatangIndepenen";
import MultiEventBerlangsung from "../components/Independen/MultiEvent/MultiEventBerlangsungIndependen";
import MultiEventSelesai from "../components/Independen/MultiEvent/MultiEventSelesaiIndependen";
import EventIndependen from "../components/Independen/EventIndependen";
import AtletIndependen from "../components/Independen/AtletIndependen";
import TimeKeeperIndependen from "../components/Independen/TimeKeeperIndependen";
import PendaftaranMultiEventAdminIndependen from "../components/Independen/MultiEvent/PendaftaranMultiEventAdminIndependen";
import JuknisMultiEventAdminIndependen from "../components/Independen/MultiEvent/JuknisMultiEventAdminIndependen";
import LombaMultiEventAdminIndependen from "../components/Independen/MultiEvent/LombaMultiEventAdminIndependen";
import DetailMultiEventLayout from "../components/Independen/MultiEvent/DetailMultiEventLayout";

export default function IndependenAdminRoutes() {
  return (
    <Route
      path="/independen-admin"
      element={
        <ProtectedRouted role="AdminIndependen">
          <IndependenAdminLayout />
        </ProtectedRouted>
      }
    >
      <Route index element={<DashboardIndependen />} />

      <Route path="multi-event-independen" element={<MultiEventIndependen />}>
        <Route index element={<SemuaMultiEvent />} />
        <Route path="semua" element={<SemuaMultiEvent />} />
        <Route path="akan-datang" element={<MultiEventAkanDatang />} />
        <Route path="sedang-berlangsung" element={<MultiEventBerlangsung />} />
        <Route path="selesai" element={<MultiEventSelesai />} />
      </Route>
      
      <Route path="event" element={<EventIndependen />} />
      <Route path="atlet" element={<AtletIndependen />} />
      <Route path="time-keeper" element={<TimeKeeperIndependen />} />
      

      <Route path="multi-event-independen/detail/:id" element={ <DetailMultiEventLayout /> }>
        <Route index element={<RingkasanMultiEventAdminIndependen />} />
        <Route path="pendaftaran" element={<PendaftaranMultiEventAdminIndependen />} />
        <Route path="juknis" element={<JuknisMultiEventAdminIndependen />} />
        <Route path="lomba" element={<LombaMultiEventAdminIndependen />} />
      </Route>
    </Route>

  );
}
