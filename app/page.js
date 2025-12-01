import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { PenTool, Monitor, Box, Mail, Check, Zap } from "lucide-react";
// Import komponen form yang sudah kita buat
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section
        id="home"
        className="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto md:pt-40 md:pb-24 animate-fade-in"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block px-4 py-1.5 rounded-full border border-gray-300 text-xs font-semibold tracking-wider uppercase bg-brand-gray">
              Creative Digital Studio
            </div>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[0.95] tracking-tight text-brand-black">
              We craft <br />
              <span className="text-brand-accent italic">playful</span> brands &{" "}
              <br />
              digital joy.
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-md leading-relaxed">
              Keno Creative adalah partner Anda dalam menciptakan Identitas
              Visual, Desain Web, dan Ilustrasi yang tidak hanya estetik, tapi
              juga strategis.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#work"
                className="bg-brand-black text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-accent transition-all transform hover:-translate-y-1"
              >
                Lihat Karya
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 rounded-full font-semibold border border-brand-black hover:bg-gray-50 transition-all"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>

          {/* Hero Image / Illustration Placeholder */}
          <div className="relative h-[400px] md:h-[600px] w-full bg-gray-100 rounded-3xl overflow-hidden animate-slide-up delay-100 group">
            <div className="absolute inset-0 bg-linear-to-br from-blue-100 to-yellow-100 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
              <div className="text-center opacity-30 group-hover:opacity-50 transition-opacity">
                <Zap className="w-32 h-32 mx-auto text-brand-black mb-4" />
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute top-10 right-10 bg-white p-4 rounded-xl shadow-xl transform rotate-6 group-hover:rotate-12 transition-all duration-500">
              <span className="text-4xl">🎨</span>
            </div>
            <div className="absolute bottom-20 left-10 bg-brand-black text-white p-6 rounded-xl shadow-xl transform -rotate-3 group-hover:rotate-0 transition-all duration-500">
              <p className="font-display font-bold text-xl">100+ Projects</p>
              <p className="text-xs text-gray-400">Delivered with love</p>
            </div>
          </div>
        </div>

        {/* Marquee Text */}
        <div className="mt-24 border-y border-gray-100 py-8 overflow-hidden relative">
          <div className="whitespace-nowrap flex gap-16 text-gray-300 font-display font-bold text-4xl uppercase tracking-widest opacity-50 marquee-anim">
            <span>Visual Identity</span> • <span>Web Design</span> •{" "}
            <span>Illustration</span> • <span>Motion</span> •
            <span>Visual Identity</span> • <span>Web Design</span> •{" "}
            <span>Illustration</span> • <span>Motion</span>
          </div>
        </div>
      </section>

      {/* --- WORK SECTION --- */}
      <section id="work" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Selected Work
            </h2>
            <p className="text-gray-500 max-w-md">
              Kumpulan proyek terbaik kami. Klik untuk melihat detail studi
              kasus.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group cursor-pointer"
            >
              <div
                className={`relative overflow-hidden rounded-2xl ${project.bgColor} aspect-4/3 mb-6 shadow-sm group-hover:shadow-md transition-all`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
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
      </section>

      {/* --- SERVICES SECTION --- */}
      <section
        id="services"
        className="py-20 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50 rounded-[3rem] my-12"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-5xl mb-6">
            Our Expertise
          </h2>
          <p className="text-gray-600 text-lg">
            Layanan komprehensif untuk meningkatkan nilai brand Anda di era
            digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: PenTool,
              title: "Illustration",
              color: "text-brand-accent",
              bg: "bg-blue-50",
              items: [
                "Character Design",
                "Editorial Illustration",
                "Iconography",
              ],
            },
            {
              icon: Monitor,
              title: "Web Design",
              color: "text-green-600",
              bg: "bg-green-50",
              items: ["UI/UX Design", "Landing Pages", "Framer / Webflow Dev"],
            },
            {
              icon: Box,
              title: "Visual Identity",
              color: "text-purple-600",
              bg: "bg-purple-50",
              items: ["Logo Design", "Brand Guidelines", "Art Direction"],
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-10 border border-gray-100 rounded-3xl hover:border-brand-black hover:shadow-xl transition-all duration-300 group bg-white"
            >
              <div
                className={`w-16 h-16 ${service.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform ${service.color}`}
              >
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">
                {service.title}
              </h3>
              <ul className="space-y-3 text-sm text-gray-500">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="bg-gray-100 p-1 rounded-full">
                      <Check className="w-3 h-3 text-brand-black" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 leading-tight">
              Let's start a project together.
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Tertarik bekerja sama? Isi formulir di samping atau kirim email
              langsung kepada kami.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">
                    Email Us
                  </p>
                  <p className="text-xl font-display font-bold">
                    hello@kenocreative.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-8 md:p-10 rounded-3xl shadow-sm">
            {/* PERBAIKAN: Menggunakan Komponen ContactForm, bukan form HTML biasa */}
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
