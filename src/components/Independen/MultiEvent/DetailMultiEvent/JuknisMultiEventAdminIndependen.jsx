import { Waves } from "lucide-react";
export default function JuknisMultiEventAdminIndependen() {
  return (
    <>
      <div className="flex items-center justify-center py-16 bg-blue-500">
        <Waves size={80} color="white" />
      </div>
      <div className="p-5">
        <h1 className="font-bold text-2xl mb-2">Petunjuk Juknis</h1>
        <p>Nama Event: </p>
        <p>Tingkat Event: </p>
        <p>Deskripsi: </p>
        <p>Periode Event: </p>
        <br />
        <p className="font-bold text-lg">Lampiran Juknis</p>
      </div>
    </>
  );
}
