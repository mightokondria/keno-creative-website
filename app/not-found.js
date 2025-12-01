import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col text-brand-black font-sans">
      <Navbar />
      <main className="grow flex flex-col items-center justify-center text-center px-6 pt-20">
        <h1 className="font-display font-bold text-9xl text-brand-accent mb-4">
          404
        </h1>
        <h2 className="font-display font-bold text-4xl mb-6">
          Halaman Nyasar?
        </h2>
        <p className="text-gray-600 text-lg max-w-md mb-8">
          Sepertinya halaman yang Anda cari sudah pindah dimensi atau memang
          tidak pernah ada.
        </p>
        <Link
          href="/"
          className="bg-brand-black text-white px-8 py-4 rounded-full font-bold hover:bg-brand-accent transition-colors"
        >
          Kembali ke Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
