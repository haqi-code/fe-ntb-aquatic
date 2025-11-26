import { Waves } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../../../../utils/api";
import { useParams } from "react-router-dom";
export default function PendaftaranMultiEventAdminIndependen() {
  const [listPendaftaran, setListPendaftaran] = useState([]);

  const { id } = useParams();

  const fetchData = async (id) => {
    try {
      const res = await api.get(
        `/independen-admin/multi-event-pendaftaran?id_event=${id}`
      );
      setListPendaftaran(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) fetchData(id);
  }, [id]);

  return (
    <>
      <div className="flex items-center justify-center py-16 bg-blue-500">
        <Waves size={80} color="white" />
      </div>
      {listPendaftaran.map((item) => (
        <div className="p-5" key={item.id}>
          <h1 className="font-bold text-2xl mb-2">Pendaftaran</h1>
          <p>Batas Daftar: {item.batas_daftar} </p>
          <p>Gaya DiLombakan: {item.gaya_renang}</p>
          <p>Terbuka Untuk: {item.catatan}</p>
          <p>Kategori Umur: {item.catatan}</p>
          <br />
          <p>Wajib Daftar Tepat Waktu!</p>
        </div>
      ))}
    </>
  );
}
