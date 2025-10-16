export default function FormLayout({
  fields,
  form,
  setForm,
  onSubmit,
  loading,
  message,
}) {
  const handleChange = (e) => {
    const { id, value, name } = e.target;
    setForm({ ...form, [id || name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 border border-gray-600 rounded-lg shadow-md"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div className="space-y-1" key={field.id}>
            <label htmlFor={field.id} className="block text-sm font-medium">
              {field.label}
            </label>

            {field.type === "select" ? (
              <select
                id={field.id}
                value={form[field.id] || ""}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-500 bg-white/5 px-4 py-2"
              >
                <option value="">{field.placeholder}</option>
                {field.options?.map((opt) => (
                  <option value={opt.value} key={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : field.type === "file" ? (
              <input
                id={field.id}
                type="file"
                accept={field.accept || "image/*"}
                onChange={(e) =>
                  setForm({ ...form, [field.id]: e.target.files?.[0] || null })
                }
                className="w-full rounded-lg border border-gray-500 bg-white/5 px-4 py-2"
              />
            ) : (
              <input
                id={field.id}
                type={field.type || "text"}
                value={form[field.id] || ""}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full rounded-lg border border-gray-500 bg-white/5 px-4 py-2"
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto rounded-lg bg-blue-600 hover:bg-blue-700 py-2 px-6 font-medium text-white"
        >
          {loading ? "Menyimpan..." : "Simpan"}
        </button>

        {message && (
          <p className="mt-2 text-center text-sm text-gray-300">{message}</p>
        )}
      </div>
    </form>
  );
}
