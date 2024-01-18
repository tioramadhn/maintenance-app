import Lottie from "lottie-react";
import MaintenanceAnimation from "./assets/maintenance.json";
import { data } from "./lib/data";
function App() {
  return (
    <main className="grid grid-cols-10  md:gap-4 min-h-screen">
      <div className="flex justify-center items-center col-span-full md:col-span-3">
        <Lottie
          animationData={MaintenanceAnimation}
          className="max-w-xs md:max-w-sm"
        />
      </div>
      <div className="flex flex-col justify-center col-span-full md:col-span-7">
        <h1 className="text-3xl font-bold mb-2">
          Selamat Datang di Halaman Pemeliharaan Kami
        </h1>
        <p>
          Maaf atas ketidaknyamanan ini. Kami sedang melakukan pemeliharaan
          untuk memastikan pengalaman Anda bersama kami tetap prima.
        </p>
        <div className="grid grid-cols-3 gap-2 border-t mt-2 py-4">
          {data.map((v, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2 col-span-full md:col-span-1 border rounded-md p-4"
            >
              <h2 className="font-bold text-lg flex flex-col gap-2">
                <span className="text-2xl">{v.icon}</span> {v.title}
              </h2>
              <p>{v.description}</p>
            </div>
          ))}
          <p className="col-span-full border-t pt-4 mt-4">
            Terima kasih atas pemahaman dan dukungan Anda. Kami berjanji untuk
            kembali dalam waktu singkat dengan fitur dan peningkatan baru yang
            akan membuat pengalaman online Anda semakin luar biasa!
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
