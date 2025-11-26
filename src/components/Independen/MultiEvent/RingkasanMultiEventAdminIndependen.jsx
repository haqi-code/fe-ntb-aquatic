import { FlagIcon, Users } from "lucide-react";
import api from "../../../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RingkasanMultiEventAdminIndependen() {
  const { id } = useParams();

  const [statistik, setStatistik] = useState({
    peserta_terdaftar: 0,
    pertandingan_selesai: 0,
    pertandingan_berlangsung: 0,
  });

  const fetchData = async (id) => {
    try {
      const res = await api.get(
        `/independen-admin/multi-event/${id}/statistik`
      );
      setStatistik(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <div className="h-screen w-72 bg-gray-300">
      <h1 className="pt-5 pl-5 font-bold text-lg">Ini Ringkasan</h1>
      <div className="px-5 mt-2">
        <div className="flex justify-between py-1 px-3 mb-2 rounded-lg bg-white">
          <Users width={40} />
          <p>Peserta Terdaftar</p>
          <p className="pl-6 font-bold">{statistik.peserta_terdaftar}</p>
        </div>
        <div className="flex justify-between py-1 px-3 mb-2 rounded-lg bg-white">
          <FlagIcon width={40} />
          <p>Pertandingan Selesai</p>
          <p className="pl-6 font-bold">{statistik.pertandingan_selesai}</p>
        </div>
        <div className="flex justify-between py-1 px-3 mb-2 rounded-lg bg-white">
          <Users width={40} />
          <p>Pertandingan Berlangsung</p>
          <p className="pl-6 font-bold">{statistik.pertandingan_berlangsung}</p>
        </div>
      </div>
    </div>
  );
}
