import { Route } from "react-router-dom";
import ProtectedRouted from "../utils/protectedRoute";
import IndependenAdminLayout from "../Layout/IndependenAdminLayout";
import TimeKeeperAdminIndependen from "../components/Independen/TimeKeeperAdminIndependen";
import PendaftaranMultiEventAdminIndependen from "../components/Independen/MultiEvent/DetailMultiEvent/PendaftaranMultiEventAdminIndependen";
import JuknisMultiEventAdminIndependen from "../components/Independen/MultiEvent/DetailMultiEvent/JuknisMultiEventAdminIndependen";
import LombaMultiEventAdminIndependen from "../components/Independen/MultiEvent/DetailMultiEvent/LombaMultiEventAdminIndependen";
import MultiEventAdminIndependen from "../components/Independen/MultiEvent/MultiEventAdminIndependen";
import AtletAdminIndependen from "../components/Independen/AtletAdminIndependen";
import EventAdminIndependen from "../components/Independen/Event/EventAdminIndependen";
import DashboardAdminIndependen from "../components/Independen/DashboardAdminIndependen";
import DetailMultiEvenAdminIndependentLayout from "../components/Independen/MultiEvent/DetailMultiEvenAdminIndependentLayout";

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
      <Route index element={<DashboardAdminIndependen />} />
      <Route path="multi-event-independen" element={<MultiEventAdminIndependen />} />
      <Route path="event-independen" element={<EventAdminIndependen />} />
      <Route path="event" element={<EventAdminIndependen />} />
      <Route path="atlet" element={<AtletAdminIndependen />} />
      <Route path="time-keeper" element={<TimeKeeperAdminIndependen />} />
      
      <Route path="multi-event-independen/detail/:id" element={ <DetailMultiEvenAdminIndependentLayout /> }>
        <Route index element={<PendaftaranMultiEventAdminIndependen />} />
        <Route path="pendaftaran" element={<PendaftaranMultiEventAdminIndependen />} />
        <Route path="juknis" element={<JuknisMultiEventAdminIndependen  />} />
        <Route path="lomba" element={<LombaMultiEventAdminIndependen />} />
      </Route>
    </Route>

  );
}
