import RingkasanMultiEventAdminIndependen from "./Independen/RingkasanMultiEventAdminIndependen";

export default function SidebarRingkasan({ role, eventType }) {
  if (role === "Admin") {
    if (eventType === "multi") return <RingkasanMultiEventAdmin />;
    if (eventType === "single") return <RingkasanEventAdmin />;
  }
  if (role === "AdminIndependen") {
    if (eventType === "multi") return <RingkasanMultiEventAdminIndependen />;
    if (eventType === "single") return <RingkasanEventAdminIndependen />;
  }
  if (role === "Juri") {
    if (eventType === "multi") return <RingkasanMultiEventJuri />;
    if (eventType === "single") return <RingkasanEventJuri />;
  }

  return null;
}
