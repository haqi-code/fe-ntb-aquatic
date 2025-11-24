import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function EventIndependen() {
  const navigate = useNavigate()
  const location = useLocation()

  const getActiveMenu = () => {
    const path = location.pathname.split("/").pop()
    return path || "semua"
  }

  const activeMenu = getActiveMenu()

  return (
    <div className="">
      <div className="p-5 border border-gray-600">
        <h1 className="font-bold text-2xl ">Event</h1>
        <p className="text-sm text-gray-600">
          Lihat event gabungan & jadwal lomba
        </p>
      </div>

      <div className="flex gap-7 pt-5 pl-10">
        <button
          onClick={() => navigate("semua")}
          className={`text-sm cursor-pointer ${
            activeMenu === "semua" ? "text-blue-600" : "text-gray-800"
          }`}
        >
          Semua
        </button>
        <button
          onClick={() => navigate("akan-datang")}
          className={`text-sm cursor-pointer ${
            activeMenu === "akanDatang" ? "text-blue-600" : "text-gray-800"
          }`}
        >
          Akan Datang
        </button>
        <button
          onClick={() => navigate("sedang-berlangsung")}
          className={`text-sm cursor-pointer ${
            activeMenu === "sedangBerlangsung"
              ? "text-blue-600"
              : "text-gray-800"
          }`}
        >
          Sedang Berlangsung
        </button>
        <button
          onClick={() => navigate("selesai")}
          className={`text-sm cursor-pointer ${
            activeMenu === "selesai" ? "text-blue-600" : "text-gray-800"
          }`}
        >
          Selesai
        </button>
      </div>
      <div className="p-4">
      <Outlet />
      </div>
    </div>
  );
}
