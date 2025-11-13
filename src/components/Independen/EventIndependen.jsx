import { Calendar } from "lucide-react";
import Button from "../Button";
import { useState } from "react";

function SemuaEvent() {
  return (
    <div className="p-4">
      <div className="w-1/3 p-4 rounded-md shadow">
        <h1 className="font-bold">Event Ntb Aquatic</h1>
        <p className="text-sm text-blue-500">Nasional</p>
        <p className="text-sm text-gray-600">
          Ini deskripsi untuk milti event keras
        </p>
        <div className="flex py-2">
          <p className="text-sm text-gray-600">15/07/2025 - </p>
          <p className="text-sm text-gray-600">15/07/2025</p>
        </div>
        <Button text="Lihat Detail" />
      </div>
    </div>
  );
}
function EventAkanDatang() {
  return (
    <div className="p-4">
      <div className="w-1/3 p-4 rounded-md shadow">
        <h1 className="font-bold">Event Ntb Aquatic</h1>
        <p className="text-sm text-blue-500">Nasional</p>
        <p className="text-sm text-gray-600">
          Ini deskripsi untuk milti event keras
        </p>
        <div className="flex py-2">
          <p className="text-sm text-gray-600">15/07/2025 - </p>
          <p className="text-sm text-gray-600">15/07/2025</p>
        </div>
        <Button text="Lihat Detail" />
      </div>
    </div>
  );
}
function EventBerlangsung() {
  return (
    <div className="p-4">
      <div className="w-1/3 p-4 rounded-md shadow">
        <h1 className="font-bold">Event Ntb Aquatic</h1>
        <p className="text-sm text-blue-500">Nasional</p>
        <p className="text-sm text-gray-600">
          Ini deskripsi untuk milti event keras
        </p>
        <div className="flex py-2">
          <p className="text-sm text-gray-600">15/07/2025 - </p>
          <p className="text-sm text-gray-600">15/07/2025</p>
        </div>
        <Button text="Lihat Detail" />
      </div>
    </div>
  );
}

function EventSelesai() {
  return (
    <div className="p-4">
      <div className="w-1/3 p-4 rounded-md shadow">
        <h1 className="font-bold">Event Ntb Aquatic</h1>
        <p className="text-sm text-blue-500">Nasional</p>
        <p className="text-sm text-gray-600">
          Ini deskripsi untuk milti event keras
        </p>
        <div className="flex py-2">
          <p className="text-sm text-gray-600">15/07/2025 - </p>
          <p className="text-sm text-gray-600">15/07/2025</p>
        </div>
        <Button text="Lihat Detail" />
      </div>
    </div>
  );
}

export default function EventIndependen() {
  const [activeMenu, setActiveMenu] = useState("semua");

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
          onClick={() => setActiveMenu("semua")}
          className={`text-sm cursor-pointer ${
            activeMenu === "semua" ? "text-blue-600" : "text-gray-800"
          }`}
        >
          Semua
        </button>
        <button
          onClick={() => setActiveMenu("akanDatang")}
          className={`text-sm cursor-pointer ${
            activeMenu === "akanDatang" ? "text-blue-600" : "text-gray-800"
          }`}
        >
          Akan Datang
        </button>
        <button
          onClick={() => setActiveMenu("sedangBerlangsung")}
          className={`text-sm cursor-pointer ${
            activeMenu === "sedangBerlangsung"
              ? "text-blue-600"
              : "text-gray-800"
          }`}
        >
          Sedang Berlangsung
        </button>
        <button
          onClick={() => setActiveMenu("selesai")}
          className={`text-sm cursor-pointer ${
            activeMenu === "selesai" ? "text-blue-600" : "text-gray-800"
          }`}
        >
          Selesai
        </button>
      </div>
      <div className="p-4">
        {activeMenu === "semua" && <SemuaEvent />}
        {activeMenu === "akanDatang" && <EventAkanDatang />}
        {activeMenu === "sedangBerlangsung" && <EventBerlangsung />}
        {activeMenu === "selesai" && <EventSelesai />}
      </div>
    </div>
  );
}
