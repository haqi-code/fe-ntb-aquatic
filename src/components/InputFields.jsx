export default function InputFields ({id, label, type = "text",value, onChange, onBlur, placeholder, error}) {
    return (
        <div>
          <label htmlFor={id} className="mb-1 block text-sm font-medium text-white">{label}</label>
          <input id={id} type={type} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder}
            className="w-full rounded-lg border border-gray-500 bg-white/5 px-4 py-2 text-white" />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    )
}