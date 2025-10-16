import { Edit, Trash } from "lucide-react";
import Button from "../Button";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import FormLayout from "../FormLayout";

export default function EventMaster() {
  const fields = [
    {
      id: "nama_event",
      label: "Nama Event",
      placeholder: "Nama event",
    },
    {
      id: "deskripsi",
      label: "Deskripsi",
      placeholder: "Deskripsi",
    },
    {
      id: "start_date",
      label: "Tanggal Mulai",
      type: "date",
    },
    {
      id: "end_date",
      label: "Tanggal Berakhir",
      type: "date",
    },
    {
      id: "sampul",
      label: "Sampul",
      type: "file",
    },
    {
      id: "tingkat",
      label: "type",
      type: "select",
      placeholder: "Tingkat",
      options: [
        { value: "Nasional", label: "Nasional" },
        { value: "Provinsi", label: "Provinsi" },
        { value: "Kabupaten", label: "Kabupaten" },
        { value: "Kecamatan", label: "Kecamatan" },
        { value: "Desa", label: "Desa" },
      ],
    },
  ];

  const initialForm = fields.reduce((acc, field) => {
    acc[field.id] = "";
    return acc;
  });

  const [events, setEvents] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    try {
      const res = await api.get("/admin/event");
      setEvents(res.data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (formData) => {
    setLoading(true);
    setMessage("");

    try {
      if (editId) {
        await api.put(`/admin/event/${editId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setMessage("Data berhasil ditambahkan");
      } else {
        await api.post("/admin/event", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setMessage("Data berhasil ditambahkan");
      }
      fetchData();
      setShowForm(false);
      setEditId(null);
    } catch (error) {
      console.log(error);
      setMessage("Gagal menyimpan data");
    } finally {
      setLoading(false);
    }
  };

  const fetchById = async (id) => {
    try {
      const res = await api.get(`/admin/event/${id}`);
      setForm(res.data.data);
      setEditId(id);
      setShowForm(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Yakin ingin menghapus data ini?")) return;
    try {
      await api.delete(`/admin/event/${id}`);
      setMessage("Data berhasil dihapus");
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="font-bold text-xl">Master Data Event</h1>
        <Button
          text="Tambah Data Event"
          onClick={() => {
            setShowForm(true);
            setForm(initialForm);
            setEditId(null);
          }}
        />
      </div>

      {!showForm && (
        <div className="flex flex-wrap gap-3">
          {Array.isArray(events) &&
            events.map((event) => (
              <div
                key={event.id}
                className="flex flex-col p-3 w-1/3 border shadow shadow-blue-600 rounded-xl h-64"
              >
                <div>
                  <p className="font-bold text-lg">{event.nama_event}</p>
                  <p className="text-blue-500 font-medium">{event.tingkat}</p>
                  <p className="mb-4 text-sm">{event.deskripsi}</p>
                  <p className="text-gray-500 text-sm">
                    {event.start_date} - {event.end_date}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center gap-5">
                    <button
                      className="cursor-pointer"
                      onClick={() => fetchById(event.id)}
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      className="cursor-pointer"
                      onClick={() => handleDelete(event.id)}
                    >
                      <Trash size={18} />
                    </button>
                  </div>
                  <Button text="Lihat Detail" />
                </div>
              </div>
            ))}
        </div>
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
