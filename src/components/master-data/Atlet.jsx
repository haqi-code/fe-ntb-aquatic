import React, { useEffect, useState } from "react";
import Button from "../Button";
import FormLayout from "../FormLayout";
import api from "../../utils/api";

export default function AtletMaster() {
  const fields = [
    {
      id: "full_name",
      label: "Nama Lengkap",
      placeholder: "Masukkan nama lengkap",
    },
    { id: "nis", label: "NIS", placeholder: "Masukkan NIS" },
    { id: "nik", label: "NIK", placeholder: "Masukkan NIK" },
    {
      id: "tempat_lahir",
      label: "Tempat Lahir",
      placeholder: "Masukkan tempat lahir",
    },
    { id: "tanggal_lahir", label: "Tanggal Lahir", type: "date" },
    {
      id: "alamat_ktp",
      label: "Alamat KTP",
      placeholder: "Masukkan alamat KTP",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Masukkan email",
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
      id: "agama",
      label: "Agama",
      type: "select",
      placeholder: "Pilih agama",
      options: [
        { value: "Kristen", label: "Kristen" },
        { value: "Islam", label: "Islam" },
        { value: "Katolik", label: "Katolik" },
        { value: "Hindu", label: "Hindu" },
        { value: "Buddha", label: "Buddha" },
        { value: "Khonghucu", label: "Khonghucu" },
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

  const [atlets, setAtlets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(initialForm);

  const fetchData = async () => {
    try {
      const res = await api.get("/admin/atlet");
      setAtlets(res.data.data.data);
    } catch (err) {
      console.error("Error fetch:", err);
    }
  };

  const fetchById = async (id) => {
    try {
      const res = await api.get(`/admin/atlet/${id}`);
      setForm(res.data.data);
      setEditId(id);
      setShowForm(true);
    } catch (err) {
      console.error("Error fetch by id:", err);
    }
  };

  const handleSubmit = async (formData) => {
    setLoading(true);
    setMessage("");

    try {
      if (editId) {
        await api.put(`/admin/atlet/${editId}`, formData);
        setMessage("Data berhasil diupdate");
      } else {
        await api.post("/admin/atlet", formData);
        setMessage("Data berhasil ditambahkan");
      }
      fetchData();
      setShowForm(false);
      setForm(initialForm);
      setEditId(null);
    } catch (err) {
      console.error("Error submit:", err);
      setMessage("Gagal menyimpan data");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin hapus data ini?")) return;
    try {
      await api.delete(`/admin/atlet/${id}`);
      setMessage("Data berhasil dihapus");
      fetchData();
    } catch (err) {
      console.error("Error delete:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Master Data Atlet</h1>
        <Button
          text="Tambah Atlet"
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
              <th className="px-4 py-2 border">Nama</th>
              <th className="px-4 py-2 border">NIS</th>
              <th className="px-4 py-2 border">NIK</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {atlets.map((atlet, i) => (
              <tr key={atlet.idtable} className="hover:bg-gray-700">
                <td className="px-4 py-2 border">{i + 1}</td>
                <td className="px-4 py-2 border">{atlet.full_name}</td>
                <td className="px-4 py-2 border">{atlet.nis}</td>
                <td className="px-4 py-2 border">{atlet.nik}</td>
                <td className="px-4 py-2 border">{atlet.email}</td>
                <td className="px-4 py-2 border space-x-2">
                  <Button text="Edit" onClick={() => fetchById(atlet.id)} />
                  <Button
                    text="Delete"
                    onClick={() => handleDelete(atlet.id)}
                  />
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
