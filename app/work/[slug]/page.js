import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// --- 1. FUNGSI SEO DINAMIS (Metadata) ---
export async function generateMetadata({ params }) {
  // Await params (Wajib di Next.js 15+)
  const { slug } = await params;

  // Cari data project
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title, // Judul Tab Browser
    description: project.description, // Deskripsi di Google

    // Tampilan saat link dishare (WA/Twitter/FB)
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.image, // Menggunakan gambar utama project sebagai thumbnail link
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

// --- 2. FUNGSI STATIC GENERATION (Performa) ---
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// --- 3. KOMPONEN UTAMA HALAMAN ---
export default async function ProjectDetail({ params }) {
  // Await params terlebih dahulu
  const { slug } = await params;

  // Cari data project
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="grow pt-32 px-6 md:px-12 max-w-7xl mx-auto w-full animate-fade-in">
        {/* Tombol Kembali */}
        <div className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-black transition-colors group px-4 py-2 rounded-full hover:bg-gray-100 -ml-4"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Work</span>
          </Link>
        </div>

        {/* Header Project */}
        <div className="mb-12 border-b border-gray-100 pb-12">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-1.5 bg-brand-black text-white text-sm font-bold rounded-full uppercase tracking-wider">
              {project.year}
            </span>
            <span
              className={`px-4 py-1.5 ${project.bgColor} ${project.iconColor} text-sm font-bold rounded-full uppercase tracking-wider`}
            >
              {project.category}
            </span>
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-8 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        {/* Gambar Utama */}
        <div className="w-full aspect-video bg-gray-100 rounded-3xl overflow-hidden mb-16 shadow-lg relative">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Detail Studi Kasus */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-24">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-2xl border-l-4 border-red-400 pl-4">
              The Challenge
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {project.challenge}
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display font-bold text-2xl border-l-4 border-yellow-400 pl-4">
              Our Approach
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {project.solution}
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display font-bold text-2xl border-l-4 border-green-400 pl-4">
              The Result
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {project.result}
            </p>
          </div>
        </div>

        {/* Gallery Section (Dinamis) */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {project.gallery.map((galleryImage, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-100 rounded-2xl relative overflow-hidden shadow-sm group"
              >
                <Image
                  src={galleryImage}
                  alt={`Gallery image ${index + 1} for ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="bg-brand-gray rounded-3xl p-12 text-center mb-20">
          <h3 className="font-display font-bold text-3xl mb-4">
            Suka dengan hasil karya ini?
          </h3>
          <p className="text-gray-600 mb-8">
            Mari diskusikan bagaimana kami bisa membantu brand Anda.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-brand-black text-white px-8 py-4 rounded-full font-bold hover:bg-brand-accent transition-colors"
          >
            Mulai Projek
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
