import { useEffect, useState } from "react";
import api from "../../utils/api";
import Button from "../Button";

export default function JuriIndependen() {
  const [judges, setJudges] = useState([]);

  const fetchData = async () => {
    try {
      const res = await api.get("/independen-admin/nopag/juri");
      setJudges(res.data.data);
    } catch (error) {
      console.log("error fetch : ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="font-bold text-xl mb-4">Master Data Juri</h1>
      <table className="w-full border border-collapse border-gray-600">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-2 border">No</th>
            <th className="px-4 py-2 border">Nama</th>
            <th className="px-4 py-2 border">Tugas</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Nik</th>
          </tr>
        </thead>
        <tbody>
          {judges.map((judge, i) => (
            <tr key={judge.id}>
              <td className="px-4 py-2 border">{i + 1}</td>
              <td className="px-4 py-2 border">{judge.full_name}</td>
              <td className="px-4 py-2 border">
                {judge.discipline_and_function}
              </td>
              <td className="px-4 py-2 border">{judge.email}</td>
              <td className="px-4 py-2 border">{judge.nik}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
