"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

export default function WorkPage() {
  const [filter, setFilter] = useState("All");

  // Daftar kategori (sesuai data di projects.js)
  const categories = ["All", "Illustration", "Visual Identity", "Web Design"];

  // Logic Filter: Jika 'All', tampilkan semua. Jika tidak, filter berdasarkan kategori.
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 px-6 md:px-12 max-w-7xl mx-auto w-full animate-fade-in">
        {/* Header Halaman */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-xs font-bold tracking-wider uppercase bg-brand-gray mb-6 text-gray-500">
            Portfolio
          </span>
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 leading-tight">
            Selected Work
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Eksplorasi karya terbaik kami yang telah dikurasi di berbagai
            bidang.
          </p>
        </div>

        {/* --- TOMBOL FILTER --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-slide-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                filter === cat
                  ? "bg-brand-black text-white border-brand-black transform scale-105 shadow-lg"
                  : "bg-white text-gray-600 border-gray-200 hover:border-brand-black hover:text-brand-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- GRID PROJECT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-24">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group cursor-pointer block animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`relative overflow-hidden rounded-2xl ${project.bgColor} aspect-[4/3] mb-6 shadow-sm group-hover:shadow-md transition-all`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Overlay Text saat Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10 backdrop-blur-[2px]">
                  <div className="bg-white p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-brand-black font-bold text-sm">
                      View Case Study
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display font-bold text-xl group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {project.category}
                  </p>
                </div>
                <span className="bg-gray-100 text-xs font-semibold px-3 py-1 rounded-full text-gray-600 h-fit">
                  {project.year}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
