import { useEffect, useState } from "react";
import api from "../../utils/api";

export default function TimeKeeperAdminIndependen() {
  const [listTimeKeeper, setListTimeKeeper] = useState([]);

  const fetchData = async () => {
    try {
      const res = await api.get("/independen-admin/nopag/time-keeper");
      setListTimeKeeper(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="font-bold text-xl mb-4">Master Data Time Keeper</h1>
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
          {listTimeKeeper.map((TimeKeeper, i) => (
            <tr>
              <td className="px-4 py-2 border">{i + 1}</td>
              <td className="px-4 py-2 border">{TimeKeeper.full_name}</td>
              <td className="px-4 py-2 border">
                {TimeKeeper.discipline_and_function}
              </td>
              <td className="px-4 py-2 border">{TimeKeeper.email}</td>
              <td className="px-4 py-2 border">{TimeKeeper.nik}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
