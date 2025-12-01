import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { coreTeam, partners } from "@/data/team"; // Import data yang sudah dipisah
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Our Team | Keno Creative",
  description:
    "Kenalan dengan tim inti dan mitra kolaborator di balik Keno Creative Studio.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="grow pt-32 px-6 md:px-12 max-w-7xl mx-auto w-full animate-fade-in">
        {/* Header Utama */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-xs font-bold tracking-wider uppercase bg-brand-gray mb-6 text-gray-500">
            The People
          </span>
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6 leading-tight">
            Meet the minds <br />
            behind the <span className="text-brand-accent italic">magic.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Kombinasi tim inti yang solid dan jaringan mitra ahli yang luas
            untuk memberikan hasil terbaik.
          </p>
        </div>

        {/* --- SECTION 1: TIM INTI (CORE TEAM) --- */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-4">
            <h2 className="font-display font-bold text-3xl">Tim Inti</h2>
            <span className="bg-brand-black text-white text-xs px-2 py-1 rounded-full">
              {coreTeam.length}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {coreTeam.map((member, index) => (
              <div
                key={member.id}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Foto Tim */}
                <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-gray-100 mb-6">
                  <div className="absolute inset-0 bg-brand-accent/0 group-hover:bg-brand-accent/10 transition-colors duration-500 z-10" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  />
                </div>
                {/* Info Tim */}
                <div className="text-center">
                  <h3 className="font-display font-bold text-xl mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-accent font-medium text-xs uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed max-w-[200px] mx-auto opacity-80">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: MITRA & KOLABORATOR (PARTNERS) --- */}
        {partners.length > 0 && (
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-4">
              <h2 className="font-display font-bold text-3xl">
                Mitra & Kolaborator
              </h2>
              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                {partners.length}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={partner.id}
                  className="group flex items-center gap-6 p-6 border border-gray-100 rounded-2xl hover:border-brand-accent/30 hover:shadow-lg transition-all bg-white animate-slide-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-full bg-gray-100 border border-gray-200">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">
                      {partner.name}
                    </h3>
                    <p className="text-brand-accent font-medium text-xs uppercase tracking-wider mb-2">
                      {partner.role}
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                      {partner.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Join Us CTA */}
        <div className="bg-brand-black text-white rounded-3xl p-12 md:p-20 text-center mb-20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Ingin bergabung dengan kami?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Baik sebagai tim full-time atau mitra freelance, kami selalu
              terbuka untuk talenta baru yang memiliki visi serupa.
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
