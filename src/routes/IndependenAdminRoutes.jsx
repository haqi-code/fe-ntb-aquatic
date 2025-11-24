import { Route } from "react-router-dom";
import ProtectedRouted from "../utils/protectedRoute";
import IndependenAdminLayout from "../Layout/IndependenAdminLayout";
import DashboardIndependen from "../components/Independen/DashboardIndependen";
import MultiEventIndependen from "../components/Independen/MultiEvent/MultiEventIndependen";
import SemuaMultiEvent from "../components/Independen/MultiEvent/SemuaMultiEventIndependen";
import MultiEventAkanDatang from "../components/Independen/MultiEvent/MultiEventAkanDatangIndepenen";
import MultiEventBerlangsung from "../components/Independen/MultiEvent/MultiEventBerlangsungIndependen";
import MultiEventSelesai from "../components/Independen/MultiEvent/MultiEventSelesaiIndependen";
import AtletIndependen from "../components/Independen/AtletIndependen";
import TimeKeeperIndependen from "../components/Independen/TimeKeeperIndependen";
import PendaftaranMultiEventAdminIndependen from "../components/Independen/MultiEvent/DetailMultiEvent/PendaftaranMultiEventAdminIndependen";
import JuknisMultiEventAdminIndependen from "../components/Independen/MultiEvent/DetailMultiEvent/JuknisMultiEventAdminIndependen";
import LombaMultiEventAdminIndependen from "../components/Independen/MultiEvent/DetailMultiEvent/LombaMultiEventAdminIndependen";
import DetailMultiEventLayout from "../components/Independen/MultiEvent/DetailMultiEventLayout";
import EventIndependen from "../components/Independen/Event/EventIndependen";
import SemuaEventIndependen from "../components/Independen/Event/SemuaEventIndependen";
import EventAkanDatangIndependen from "../components/Independen/Event/EventAkanDatangIndependen";
import EventBerlangsungIndependen from "../components/Independen/Event/EventBerlangsung";
import EventSelesaiIndependen from "../components/Independen/Event/EventSelesaiIndependen";

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

      <Route path="event-independen" element={<EventIndependen />}>
        <Route index element={<SemuaEventIndependen />} />
        <Route path="semua" element={<SemuaEventIndependen />} />
        <Route path="akan-datang" element={<EventAkanDatangIndependen />} />
        <Route path="sedang-berlangsung" element={<EventBerlangsungIndependen />} />
        <Route path="selesai" element={<EventSelesaiIndependen />} />
      </Route>
      
      <Route path="event" element={<EventIndependen />} />
      <Route path="atlet" element={<AtletIndependen />} />
      <Route path="time-keeper" element={<TimeKeeperIndependen />} />
      

      <Route path="multi-event-independen/detail/:id" element={ <DetailMultiEventLayout /> }>
        <Route index element={<PendaftaranMultiEventAdminIndependen />} />
        <Route path="pendaftaran" element={<PendaftaranMultiEventAdminIndependen />} />
        <Route path="juknis" element={<JuknisMultiEventAdminIndependen />} />
        <Route path="lomba" element={<LombaMultiEventAdminIndependen />} />
      </Route>
    </Route>

  );
}
