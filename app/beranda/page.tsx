"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Beranda() {
  return (
    <main className="relative w-full min-h-screen bg-gray-50 text-gray-900 overflow-hidden">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full flex flex-col justify-center items-center text-center text-white">
        <Image
          src="/background.jpeg"
          alt="Background"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-brightness-90" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl px-4"
        >
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
            SIPRES TUTORIAL UPI
          </h1>
          <p className="mb-8 text-lg text-gray-200">
            Sistem Informasi Peserta Tutorial PAI-SPAI UPI
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition shadow-md">
              Masuk →
            </button>
          </div>
        </motion.div>
      </section>

      {/* Section Utama */}
      <section className="relative bg-white mt-[-60px] z-10">
        {/* Atap Rumah */}
        <div className="absolute top-[-100px] left-0 w-full h-[150px] bg-white [clip-path:polygon(10%_100%,20%_30%,80%_30%,90%_90%)] shadow-md"></div>

        {/* Konten */}
        <div className="relative z-10 pt-28 pb-16 max-w-[1400px] mx-auto px-6">
          {/* === Section Informasi Tutorial === */}
          <section className="bg-gradient-to-b from-blue-50 to-white pt-32 pb-20">
            <div className="max-w-5xl mx-auto px-6 text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                Apa itu Tutorial UPI?
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Program Tutorial PAI-SPAI Universitas Pendidikan Indonesia merupakan kegiatan akademik 
                yang terintegrasi dalam sistem pembelajaran Pendidikan Agama Islam (PAI) dan Seminar 
                Pendidikan Agama Islam (SPAI). Tujuannya untuk membentuk mahasiswa beriman, bertakwa, 
                dan berakhlak mulia sesuai dengan visi UPI sebagai kampus ilmiah, edukatif, dan religius.
              </p>
            </div>
          </section>
          
          {/* Fitur Utama */}
          <section className="bg-blue-50 py-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Fitur Utama SIPRES</h2>
              <p className="text-gray-600">Satu sistem untuk presensi, tugas, dan nilai peserta tutorial.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { img: "/img/presensi.svg", title: "Presensi Online", desc: "Absensi peserta secara real-time selama tutorial berlangsung." },
                { img: "/img/tugas.svg", title: "Pengumpulan Tugas", desc: "Kumpulkan dan pantau status tugasmu dengan mudah dan cepat." },
                { img: "/img/nilai.svg", title: "Rekap Nilai", desc: "Transparansi penilaian langsung dari panitia tutorial." },
                { img: "/img/info.svg", title: "Informasi Tutorial", desc: "Akses jadwal, panduan, dan pengumuman terbaru." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="bg-gray-50 rounded-2xl border border-gray-100 shadow hover:shadow-lg transition p-6 text-center"
                >
                  <div className="w-full h-32 relative mb-4">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* === Section Langkah Menggunakan SIPRES === */}
          <section className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-12">
                Langkah Menggunakan SIPRES
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {[
                  { step: 1, title: "Daftar Akun" },
                  { step: 2, title: "Login ke Sistem" },
                  { step: 3, title: "Lakukan Presensi" },
                  { step: 4, title: "Kumpulkan Tugas" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-xl font-bold shadow-md">
                      {item.step}
                    </div>
                    <span className="ml-4 text-gray-700 font-medium">{item.title}</span>
                    {i !== 3 && (
                      <div className="mx-6 w-10 h-[2px] bg-blue-300 rounded-full" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* Quote */}
          <div className="mt-20 text-center">
            <blockquote className="italic text-gray-700 text-lg max-w-2xl mx-auto">
              “Tutorial bukan sekadar kewajiban, tapi jalan menuju keberkahan.”
            </blockquote>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
