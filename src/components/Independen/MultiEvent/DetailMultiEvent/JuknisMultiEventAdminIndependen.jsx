import { Waves } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../../../../utils/api";
import { useParams } from "react-router-dom";
export default function JuknisMultiEventAdminIndependen() {
  const [listJuknis, setListJuknis] = useState([]);

  const { id } = useParams();

  const fetchData = async (id) => {
    try {
      const res = await api.get(
        `/independen-admin/multi-event-juknis?id_event=${id}`
      );
      setListJuknis(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <>
      <div className="flex items-center justify-center py-16 bg-blue-500">
        <Waves size={80} color="white" />
      </div>

      {listJuknis.map((item) => (
        <div className="p-5" key={item.id}>
          <h1 className="font-bold text-2xl mb-2">Petunjuk Juknis</h1>
          <p>Nama Event: </p>
          <p>Tingkat Event: </p>
          <p>Deskripsi: </p>
          <p>Periode Event: </p>
          <br />
          <p className="font-bold text-lg">Lampiran Juknis</p>
        </div>
      ))}
    </>
  );
}
