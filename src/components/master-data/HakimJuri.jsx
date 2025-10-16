import { useEffect, useState } from "react";
import api from "../../utils/api";

export default function HakimJuriMaster() {
  const [listHakimJuri, setListHakimJuri] = useState([]);

  const fetchData = async () => {
    try {
      const res = await api.get("/admin/hakim-juri");
      setListHakimJuri(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="font-bold text-xl mb-4">Master Data Hakim Juri</h1>
      <table className="w-full">
        <thead className="bg-gray-800 border border-collapse text-white">
          <tr>
            <th className="px-4 py-2 border">No</th>
            <th className="px-4 py-2 border">Nama</th>
            <th className="px-4 py-2 border">Tanggung Jawab</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Nik</th>
          </tr>
        </thead>
        <tbody>
          {listHakimJuri.map((hakimJuri, i) => (
            <tr>
              <td className="px-4 py-2 border">{i + 1}</td>
              <td className="px-4 py-2 border">{hakimJuri.full_name}</td>
              <td className="px-4 py-2 border">
                {hakimJuri.discipline_and_function}
              </td>
              <td className="px-4 py-2 border">{hakimJuri.email}</td>
              <td className="px-4 py-2 border">{hakimJuri.nik}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
