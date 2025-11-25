import { Waves } from "lucide-react";
export default function LombaMultiEventAdminIndependen() {
  return (
    <>
      <div className="flex items-center justify-center py-16 bg-blue-500">
        <Waves size={80} color="white" />
      </div>
      <div className="p-5">
        <h1 className="font-bold text-2xl mb-2">Manajemen Pertandingan</h1>
        <p>Batas Daftar: </p>
        <p>Gaya DiLombakan: </p>
        <p>Terbuka Untuk: </p>
        <p>Kategori Umur: </p>
        <br />
        <p>Wajib Daftar Tepat Waktu!</p>
      </div>
    </>
  );
}
