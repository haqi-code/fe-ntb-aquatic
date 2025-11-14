  import { Users } from "lucide-react";

  export default function RingkasanMultiEventAdminIndependen() {
    return (
      <div className="h-screen w-64  bg-amber-950">
        <h1 className="mt-24 pl-5 font-bold text-lg">Ini Ringkasan</h1>
        <div className="px-5 mt-2">
          <div className="flex justify-center py-1 mb-2 rounded-lg bg-white">
            <Users width={40} />
            <p>Peserta Terdaftar</p>
            <p className="pl-6 font-bold">0</p>
          </div>
          <div className="flex justify-center py-1 mb-2 rounded-lg bg-white">
            <Users width={40} />
            <p>Peserta Terdaftar</p>
            <p className="pl-6 font-bold">0</p>
          </div>
          <div className="flex justify-center py-1 mb-2 rounded-lg bg-white">
            <Users width={40} />
            <p>Peserta Terdaftar</p>
            <p className="pl-6 font-bold">0</p>
          </div>
        </div>
      </div>
    );
  }
