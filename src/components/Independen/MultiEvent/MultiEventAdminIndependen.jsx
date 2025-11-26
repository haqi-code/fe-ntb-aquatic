import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../utils/api";
import Button from "../../Button";

export default function MultiEventAdminIndependen() {
  const [activeMenu, setActiveMenu] = useState("semua");
  const [listMultiEvent, setListMultiEvent] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const endpointMap = {
        "semua": "/independen-admin/multi-event",
        "akan-datang": "/independen-admin/multi-event",
        "sedang-berlangsung": "/independen-admin/multi-event?status=Berlangsung",
        "selesai": "/independen-admin/multi-event?status=Selesai",
      };

      const endpoint = endpointMap[activeMenu];

      const res = await api.get(endpoint);
      setListMultiEvent(res.data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activeMenu]);


  return (
    <div>
      <div className="p-5 border border-gray-600">
        <h1 className="font-bold text-2xl ">Multi Event</h1>
        <p className="text-sm text-gray-600">
          Lihat multi event gabungan & jadwal lomba
        </p>
      </div>

      <div className="flex gap-7 pt-5 pl-10">
        {["semua", "akan-datang", "sedang-berlangsung", "selesai"].map((menu) => (
          <button
            key={menu}
            onClick={() => setActiveMenu(menu)}
            className={`text-sm cursor-pointer capitalize ${
              activeMenu === menu
                ? "text-blue-600 border-b-1 border-blue-600"
                : "text-gray-800"
            }`}
          >
            {menu.replace("-", " ")}
          </button>
        ))}
      </div>

      <div className="flex gap-2 p-4">
        {listMultiEvent.map((multiEvent) => (
          <div key={multiEvent.id} className="w-1/3 p-4 gap-20 rounded-md shadow">
            <h1 className="font-bold">{multiEvent.nama_event}</h1>
            <p className="text-sm text-blue-500">{multiEvent.tingkat}</p>
            <p className="text-sm text-gray-600">{multiEvent.deskripsi}</p>

            <div className="flex py-2">
              <p className="text-sm text-gray-600">{multiEvent.start_date} - </p>
              <p className="text-sm text-gray-600">{multiEvent.end_date}</p>
            </div>

            <Button
              text="Lihat Detail"
              onClick={() =>
                navigate(
                  `/independen-admin/multi-event-independen/detail/${multiEvent.id}`
                )
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
