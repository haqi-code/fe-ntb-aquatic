import { Route } from "react-router-dom";
import ProtectedRouted from "../utils/protectedRoute";
import IndependenAdminLayout from "../Layout/IndependenAdminLayout";
import DashboardIndependen from "../components/Independen/DashboardIndependen";
import MultiEventIndependen from "../components/Independen/MultiEvent/MultiEventIndependen";
import AtletIndependen from "../components/Independen/AtletIndependen";
import TimeKeeperIndependen from "../components/Independen/TimeKeeperIndependen";
import PendaftaranMultiEventAdminIndependen from "../components/Independen/MultiEvent/DetailMultiEvent/PendaftaranMultiEventAdminIndependen";
import JuknisMultiEventAdminIndependen from "../components/Independen/MultiEvent/DetailMultiEvent/JuknisMultiEventAdminIndependen";
import LombaMultiEventAdminIndependen from "../components/Independen/MultiEvent/DetailMultiEvent/LombaMultiEventAdminIndependen";
import DetailMultiEventLayout from "../components/Independen/MultiEvent/DetailMultiEventLayout";
import EventIndependen from "../components/Independen/Event/EventIndependen";

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
       
      </Route>

      <Route path="event-independen" element={<EventIndependen />}>
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
