export default function Button({text, onClick, icon}) {
    return (
        <button onClick={onClick} type="submit" aria-label="Login"
          className="flex items-center justify-center rounded-lg bg-blue-500 py-2 px-6 text-white font-medium shadow-md hover:bg-blue-600 active:bg-blue-700 transition cursor-pointer">
            <div className="flex items-center">
              {icon && <img src={icon} alt="" className="h-5 w-5" />}
              <span className="ml-2 text-md font-medium">{text}</span>
            </div>
        </button>
    )
}