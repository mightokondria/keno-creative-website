import Link from "next/link";
import Image from "next/image"; // Import komponen Image

export default function Footer() {
  // --- KONFIGURASI LINK MEDSOS DI SINI ---
  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com/keno_creativee" }, // Ganti dengan link asli
    {
      name: "Behance",
      url: "https://www.behance.net/keno_creative",
    },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/keno-creative" },
  ];

  return (
    <footer className="border-t border-gray-200 py-12 bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo & Copyright */}
        <div className="text-center md:text-left">
          {/* Logo Container */}
          <div className="relative h-8 w-32 mb-4 mx-auto md:mx-0">
            <Image
              src="/images/logo-keno/logo-1.png"
              alt="Keno Creative"
              fill
              className="object-contain object-center md:object-left"
            />
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Keno Creative Studio. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-8">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank" // Agar link terbuka di tab baru
              rel="noopener noreferrer" // Keamanan standar untuk target="_blank"
              className="text-gray-500 hover:text-brand-black transition-colors font-medium text-sm uppercase tracking-wider"
            >
              {social.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
