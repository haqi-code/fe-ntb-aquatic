import { Outlet, useNavigate } from "react-router-dom";
import HeaderDetailMultiEventAdminIndependen from "../HeaderDetailMultiEventAdminIndependen";
import SidebarEvent from "../../SidebarEvent";
import SidebarRingkasan from "../../SidebarRingkasan";

export default function DetailMultiEventLayout() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleSelectMenu = (menuKey) => {
    navigate(menuKey);
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <HeaderDetailMultiEventAdminIndependen onBack={handleBack} />

      <div className="flex w-full pt-16 overflow-hidden">
        <div className="w-[18%] border-r">
          <SidebarEvent onSelect={handleSelectMenu} />
        </div>

        <div className="flex-1 p-5 overflow-auto">
          <Outlet />
        </div>

        <div className="w-[20%] border-l">
          <SidebarRingkasan role="AdminIndependen" eventType="multi" />
        </div>
      </div>
    </div>
  );
}
