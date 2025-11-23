import { useEffect, useState } from "react";
import api from "../../../utils/api";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";

export default function MultiEventBerlangsung() {
  const [listMultiEvent, setListMultiEvent] = useState([]);

  const navigate = useNavigate()

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
            onClick={() => {
          navigate(
                `/independen-admin/multi-event-independen/detail/${multiEvent.id}`
              );
            }}
          />
        </div>
      ))}
    </div>
  );
}
