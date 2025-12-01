import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { teamMembers } from "@/data/team";
import Image from "next/image";

// Metadata Khusus Halaman Team
export const metadata = {
  title: "Our Team | Keno Creative",
  description:
    "Kenalan dengan orang-orang kreatif di balik Keno Creative Studio.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="grow pt-32 px-6 md:px-12 max-w-7xl mx-auto w-full animate-fade-in">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-xs font-bold tracking-wider uppercase bg-brand-gray mb-6 text-gray-500">
            The Misfits
          </span>
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 leading-tight">
            Meet the minds <br />
            behind the <span className="text-brand-accent italic">magic.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Kami adalah kumpulan individu dengan latar belakang berbeda yang
            disatukan oleh satu tujuan: menciptakan karya digital yang
            berdampak.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-24">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Card */}
              <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-gray-100 mb-6">
                {/* Efek Hover Overlay */}
                <div className="absolute inset-0 bg-brand-accent/0 group-hover:bg-brand-accent/10 transition-colors duration-500 z-10" />

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Text Info */}
              <div className="text-center">
                <h3 className="font-display font-bold text-2xl mb-1">
                  {member.name}
                </h3>
                <p className="text-brand-accent font-medium text-sm uppercase tracking-wider mb-3">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Join Us CTA */}
        <div className="bg-brand-black text-white rounded-3xl p-12 md:p-20 text-center mb-20 relative overflow-hidden">
          {/* Dekorasi Background */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

          <div className="relative z-10">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Ingin bergabung dengan kami?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Kami selalu mencari talenta baru yang bersemangat. Jika Anda
              merasa cocok dengan budaya kami, jangan ragu untuk menyapa.
            </p>
            <a
              href="mailto:career@kenocreative.com"
              className="inline-block bg-white text-brand-black px-8 py-4 rounded-full font-bold hover:bg-brand-yellow hover:scale-105 transition-all duration-300"
            >
              Lihat Posisi Terbuka
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
