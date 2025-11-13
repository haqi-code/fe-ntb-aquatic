import HeaderDetailMultiEventAdminIndependen from "./Independen/HeaderDetailMultiEventAdminIndependen";

export default function HeaderDetail({ eventType, role, onBack }) {
  if (role === "Admin") {
    if (eventType === "multi") return <HeaderDetailMultiEventAdmin onBack={onBack} />;
    if (eventType === "single") return <HeaderDetailEventAdmin onBack={onBack} />;
  }
  if (role === "AdminIndependen") {
    if (eventType === "multi") return <HeaderDetailMultiEventAdminIndependen onBack={onBack} />;
    if (eventType === "single") return <HeaderDetailEventAdminIndependen onBack={onBack} />;
  }
  if (role === "Juri") {
    if (eventType === "multi") return <HeaderDetailMultiEventJuri onBack={onBack} />;
    if (eventType === "single") return <HeaderDetailEventJuri onBack={onBack} />;
  }
  return null;
}
