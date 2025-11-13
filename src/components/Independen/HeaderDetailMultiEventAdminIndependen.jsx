import { ArrowLeft } from "lucide-react";

export default function HeaderDetailMultiEventAdminIndependen({ onBack }) {
  return (
    <div className="w-full h-16 top-0 fixed z-30 bg-amber-500">
      <ArrowLeft
        className="p-3 w-auto cursor-pointer"
        size={60}
        color="grey"
        onClick={onBack}
      />

      <h1></h1>
    </div>
  );
}
