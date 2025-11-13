import Button from "../Button";
import { useEffect, useState } from "react";
import api from "../../utils/api";

export default function MultiEventIndependen({
  setShowSidebarEvent,
  setEventMenu,
  setEventType,
}) {
  function SemuaMultiEvent() {
    const [listMultiEvent, setListMultiEvent] = useState([]);

    const fetchData = async () => {
      try {
        const res = await api.get("/independen-admin/multi-event");
        setListMultiEvent(res.data.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <div className="flex gap-2 p-4">
        {listMultiEvent.map((multiEvent) => (
          <div
            key={multiEvent.id}
            className="w-1/3 p-4 gap-20 rounded-md shadow"
          >
            <h1 className="font-bold">{multiEvent.nama_event}</h1>
            <p className="text-sm text-blue-500">{multiEvent.tingkat}</p>
            <p className="text-sm text-gray-600">{multiEvent.deskripsi}</p>
            <div className="flex py-2">
              <p className="text-sm text-gray-600">
                {multiEvent.start_date} -{" "}
              </p>
              <p className="text-sm text-gray-600">{multiEvent.end_date}</p>
            </div>
            <Button
              text="Lihat Detail"
              onClick={() => {
                setShowSidebarEvent(true);
                setEventType("multi");
                setEventMenu("pendaftaran");
              }}
            />
          </div>
        ))}
      </div>
    );
  }


  // Today < start date
  function MultiEventAkanDatang() {
    const [listMultiEvent, setListMultiEvent] = useState([]);

    const fetchData = async () => {
      try {
        const res = await api.get("/independen-admin/multi-event");
        setListMultiEvent(res.data.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <div className="flex gap-2 p-4">
        {listMultiEvent.map((multiEvent) => (
          <div
            key={multiEvent.id}
            className="w-1/3 p-4 gap-20 rounded-md shadow"
          >
            <h1 className="font-bold">{multiEvent.nama_event}</h1>
            <p className="text-sm text-blue-500">{multiEvent.tingkat}</p>
            <p className="text-sm text-gray-600">{multiEvent.deskripsi}</p>
            <div className="flex py-2">
              <p className="text-sm text-gray-600">
                {multiEvent.start_date} -{" "}
              </p>
              <p className="text-sm text-gray-600">{multiEvent.end_date}</p>
            </div>
            <Button
              text="Lihat Detail"
              onClick={() => {
                setShowSidebarEvent(true);
                setEventType("multi");
                setEventMenu("pendaftaran");
              }}
            />
          </div>
        ))}
      </div>
    );
  }

  function MultiEventBerlangsung() {
    const [listMultiEvent, setListMultiEvent] = useState([]);

    const fetchData = async () => {
      try {
        const res = await api.get(
          "/independen-admin/multi-event?status=Berlangsung"
        );
        setListMultiEvent(res.data.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <div className="flex gap-2 p-4">
        {listMultiEvent.map((multiEvent) => (
          <div
            key={multiEvent.id}
            className="w-1/3 p-4 gap-20 rounded-md shadow"
          >
            <h1 className="font-bold">{multiEvent.nama_event}</h1>
            <p className="text-sm text-blue-500">{multiEvent.tingkat}</p>
            <p className="text-sm text-gray-600">{multiEvent.deskripsi}</p>
            <div className="flex py-2">
              <p className="text-sm text-gray-600">
                {multiEvent.start_date} -{" "}
              </p>
              <p className="text-sm text-gray-600">{multiEvent.end_date}</p>
            </div>
            <Button
              text="Lihat Detail"
              onClick={() => {
                setShowSidebarEvent(true);
                setEventType("multi");
                setEventMenu("pendaftaran");
              }}
            />
          </div>
        ))}
      </div>
    );
  }

  function MultiEventSelesai() {
    const [listMultiEvent, setListMultiEvent] = useState([]);

    const fetchData = async () => {
      try {
        const res = await api.get(
          "/independen-admin/multi-event?status=Selesai"
        );
        setListMultiEvent(res.data.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <div className="flex gap-2 p-4">
        {listMultiEvent.map((multiEvent) => (
          <div
            key={multiEvent.id}
            className="w-1/3 p-4 gap-20 rounded-md shadow"
          >
            <h1 className="font-bold">{multiEvent.nama_event}</h1>
            <p className="text-sm text-blue-500">{multiEvent.tingkat}</p>
            <p className="text-sm text-gray-600">{multiEvent.deskripsi}</p>
            <div className="flex py-2">
              <p className="text-sm text-gray-600">
                {multiEvent.start_date} -{" "}
              </p>
              <p className="text-sm text-gray-600">{multiEvent.end_date}</p>
            </div>
            <Button
              text="Lihat Detail"
              onClick={() => {
                setShowSidebarEvent(true);
                setEventMenu("pendaftaran");
                setEventType("multi");
              }}
            />
          </div>
        ))}
      </div>
    );
  }
  const [activeMenu, setActiveMenu] = useState("semua");

  return (
    <div className="">
      <div className="p-5 border border-gray-600">
        <h1 className="font-bold text-2xl ">Multi Event</h1>
        <p className="text-sm text-gray-600">
          Lihat multi event gabungan & jadwal lomba
        </p>
      </div>

      <div className="flex gap-7 pt-5 pl-10">
        <button
          onClick={() => setActiveMenu("semua")}
          className={`text-sm cursor-pointer ${
            activeMenu === "semua"
              ? "text-blue-600 border-b-1 border-blue-600"
              : "text-gray-800"
          }`}
        >
          Semua
        </button>
        <button
          onClick={() => setActiveMenu("akanDatang")}
          className={`text-sm cursor-pointer ${
            activeMenu === "akanDatang"
              ? "text-blue-600 border-b-1 border-blue-600"
              : "text-gray-800"
          }`}
        >
          Akan Datang
        </button>
        <button
          onClick={() => setActiveMenu("sedangBerlangsung")}
          className={`text-sm cursor-pointer ${
            activeMenu === "sedangBerlangsung"
              ? "text-blue-600 border-b-1 border-blue-600"
              : "text-gray-800"
          }`}
        >
          Sedang Berlangsung
        </button>
        <button
          onClick={() => setActiveMenu("selesai")}
          className={`text-sm cursor-pointer ${
            activeMenu === "selesai"
              ? "text-blue-600 border-b-1 border-blue-600"
              : "text-gray-800"
          }`}
        >
          Selesai
        </button>
      </div>
      <div className="p-4">
        {activeMenu === "semua" && <SemuaMultiEvent />}
        {activeMenu === "akanDatang" && <MultiEventAkanDatang />}
        {activeMenu === "sedangBerlangsung" && <MultiEventBerlangsung />}
        {activeMenu === "selesai" && <MultiEventSelesai />}
      </div>
    </div>
  );
}
