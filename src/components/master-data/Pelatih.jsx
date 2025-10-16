import { useEffect, useState } from "react";
import Button from "../Button";
import FormLayout from "../FormLayout";
import api from "../../utils/api";

export default function PelatihMaster() {
  const fields = [
    {
      id: "full_name",
      label: "Nama Lengkap",
      placeholder: "Masukkan nama lengkap",
    },
    {
      id: "discipline_and_function",
      label: "discipline_and_function",
      placeholder: "Masukkan discipline_and_function",
    },
    {
      id: "tanggal_lahir",
      label: "Tanggal Lahir",
      type: "date",
    },
    {
      id: "negara",
      label: "Negara",
      placeholder: "Masukkan Negara",
    },
    {
      id: "provinsi",
      label: "Provinsi",
      placeholder: "Masukkan Provinsi",
    },
    {
      id: "kota",
      label: "Kota",
      placeholder: "Masukkan Kota",
    },
    {
      id: "desa",
      label: "Desa",
      placeholder: "Masukkan Desa",
    },
    {
      id: "email",
      label: "Email",
      placeholder: "Masukkan Email",
    },
    {
      id: "nik",
      label: "Nik",
      placeholder: "Masukkan Nik",
    },
    {
      id: "jenis_kelamin",
      label: "Jenis Kelamin",
      type: "select",
      placeholder: "Pilih Gender",
      data: "",
      options: [
        { value: "Laki", label: "Laki" },
        { value: "Perempuan", label: "Perempuan" },
      ],
    },
    {
      id: "status",
      label: "Status",
      type: "select",
      placeholder: "Tentukan status",
      options: [
        { value: "Verify", label: "Verify" },
        { value: "NotVerify", label: "NotVerify" },
      ],
    },
  ];

  const initialForm = fields.reduce((acc, field) => {
    acc[field.id] = "";
    return acc;
  }, {});

  const [coaches, setCoaches] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const res = await api.get("/admin/pelatih");
      setCoaches(res.data.data.data);
    } catch (error) {
      console.log("Error fetch : ", error);
    }
  };

  const fetchById = async (id) => {
    try {
      const res = await api.get(`admin/pelatih/${id}`);
      setForm(res.data.data);
      setEditId(id);
      setShowForm(true);
    } catch (error) {
      console.log("Error fetch by id:", error);
    }
  };

  const handleSubmit = async (formData) => {
    setLoading(true);
    setMessage("");

    try {
      if (editId) {
        await api.put(`admin/pelatih/${editId}`, formData);
        setMessage("Data berhasil diupdate");
      } else {
        await api.post("admin/pelatih", formData);
        setMessage("Data ditambahkan");
      }
      fetchData();
      setShowForm(false);
      setForm(initialForm);
      setEditId(null);
    } catch (error) {
      console.log(error);
      setMessage("Gagal menyimpan data");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin menghapus data ini?")) return;
    try {
      await api.delete(`admin/pelatih/${id}`);
      setMessage("Data berhasil dihapus");
      fetchData();
    } catch (error) {
      console.log("Gagal menghapus data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Master Data Pelatih</h1>
        <Button
          text="Tambah Data Pelatih"
          onClick={() => {
            setShowForm(true);
            setForm(initialForm);
            setEditId(null);
          }}
        />
      </div>
      {!showForm && (
        <table className="w-full border-collapse border border-gray-600">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">Nama Pelatih</th>
              <th className="px-4 py-2 border">Tanggung Jawab</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Kontak</th>
              <th className="px-4 py-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {coaches.map((coach, i) => (
              <tr key={coach.idtable}>
                <td className="px-4 py-2 border">{i + 1}</td>
                <td className="px-4 py-2 border">{coach.full_name}</td>
                <td className="px-4 py-2 border">
                  {coach.discipline_and_function}
                </td>
                <td className="px-4 py-2 border">{coach.email}</td>
                <td className="px-4 py-2 border">{coach.full_name}</td>
                <td className="px-4 py-2 border space-x-2">
                  <Button
                    text="Edit"
                    onClick={() => fetchById(coach.id)}
                  ></Button>
                  <Button
                    text="Delete"
                    onClick={() => handleDelete(coach.id)}
                  ></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {showForm && (
        <FormLayout
          form={form}
          fields={fields}
          setForm={setForm}
          onSubmit={handleSubmit}
          loading={loading}
          message={message}
        />
      )}
    </div>
  );
}
