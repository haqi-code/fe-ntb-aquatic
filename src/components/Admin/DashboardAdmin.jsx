import { RefreshCw, Users } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../../utils/api";

export default function DashboardAdmin() {
  const [stats, setStats] = useState({
    total_atlet: 0,
    total_pelatih: 0,
    total_event_diikuti: 0,
    total_event_ditolak: 0,
    total_event_menunggu_persetujuan: 0,
    total_event_dibuat: 0,
  });

  const fetchStatistik = async () => {
    try {
      const res = await api.get("/admin/statistik");
      setStats(res.data.data);
    } catch (error) {
      console.log(error + "error bro");
    }
  };

  useEffect(() => {
    fetchStatistik();
  }, []);

  return (
    <>
      <div className="p-6">
        <div className="flex justif items-center gap-3">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <RefreshCw size={18} className="cursor-pointer" />
        </div>
        <p className="text-gray-600">Ringkasan data & monitoring aplikasi.</p>
      </div>

      <div className="bg-gray-600 h-48 p-5">
        <h1 className="text-xl font-bold text-white mt-5">Selamat Datang!</h1>
        <p className="text-white mt-2">Pantau kegiatan renang dengan mudah.</p>
      </div>
      <div className="p-6">
        <h1 className="text-xl font-bold mb-4">Rekap Data</h1>
        <div className="flex flex-wrap gap-3 ">
          <div className="flex items-center py-6 px-10 bg-sky-300/30 rounded-md gap-4">
            <div className="p-2 bg-sky-300/50 rounded-full">
              <Users size={24} color="blue" strokeWidth={2} className="" />
            </div>
            <div className="">
              <p className="font-bold text-sm">Total Atlet</p>
              <p className="font-bold text-xl">{stats.total_atlet}</p>
              <p className="text-green-600 font-bold text-sm">Orang Terdata</p>
            </div>
          </div>
          <div className="flex items-center py-6 px-10 bg-sky-300/30 rounded-md gap-4">
            <div className="p-2 bg-sky-300/50 rounded-full">
              <Users size={24} color="blue" strokeWidth={2} className="" />
            </div>
            <div className="">
              <p className="font-bold text-sm">Total Pelatih</p>
              <p className="font-bold text-xl">{stats.total_pelatih}</p>
              <p className="text-green-600 font-bold text-sm">Orang Terdata</p>
            </div>
          </div>
          <div className="flex items-center py-6 px-10 bg-sky-300/30 rounded-md gap-4">
            <div className="p-2 bg-sky-300/50 rounded-full">
              <Users size={24} color="blue" strokeWidth={2} className="" />
            </div>
            <div className="">
              <p className="font-bold text-sm">Total Event</p>
              <p className="font-bold text-xl">{stats.total_event_dibuat}</p>
              <p className="text-green-600 font-bold text-sm">Event Dibuat</p>
            </div>
          </div>
          <div className="flex items-center py-6 px-10 bg-sky-300/30 rounded-md gap-4">
            <div className="p-2 bg-sky-300/50 rounded-full">
              <Users size={24} color="blue" strokeWidth={2} className="" />
            </div>
            <div className="">
              <p className="font-bold text-sm">Total Event Ditolak</p>
              <p className="font-bold text-xl">{stats.total_event_ditolak}</p>
              <p className="text-green-600 font-bold text-sm">Event</p>
            </div>
          </div>
          <div className="flex items-center py-6 px-10 bg-sky-300/30 rounded-md gap-4">
            <div className="p-2 bg-sky-300/50 rounded-full">
              <Users size={24} color="blue" strokeWidth={2} className="" />
            </div>
            <div className="">
              <p className="font-bold text-sm">
                Total Event Menunggu Persetujuan
              </p>
              <p className="font-bold text-xl">
                {stats.total_event_menunggu_persetujuan}
              </p>
              <p className="text-green-600 font-bold text-sm">Event</p>
            </div>
          </div>
          <div className="flex items-center py-6 px-10 bg-sky-300/30 rounded-md gap-4">
            <div className="p-2 bg-sky-300/50 rounded-full">
              <Users size={24} color="blue" strokeWidth={2} className="" />
            </div>
            <div className="">
              <p className="font-bold text-sm">Total Event Diikuti</p>
              <p className="font-bold text-xl">{stats.total_event_dibuat}</p>
              <p className="text-green-600 font-bold text-sm">Event</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
