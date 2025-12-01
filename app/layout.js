import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Setup Font: Plus Jakarta Sans (Utama)
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

// Setup Font: Space Grotesk (Display/Judul)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

// --- METADATA SEO GLOBAL ---
export const metadata = {
  // SUDAH DIUPDATE: Menggunakan domain utama Anda
  metadataBase: new URL("https://www.kenocreative.com"),

  title: {
    default: "Keno Creative | Digital Studio Pekalongan",
    template: "%s | Keno Creative", // Contoh hasil: "Matcha Story | Keno Creative"
  },
  description:
    "Studio desain digital spesialis Branding, Web Design, dan Ilustrasi berbasis di Pekalongan. Kami membantu brand tampil beda.",
  keywords: [
    "Digital Studio",
    "Graphic Design",
    "Web Design Surakarta",
    "Branding Agency",
    "Keno Creative",
    "Jasa Bikin Website Murah",
  ],
  authors: [{ name: "Keno Team" }],
  creator: "Keno Creative",

  // Tampilan saat link dishare di WhatsApp/Twitter/LinkedIn
  openGraph: {
    title: "Keno Creative | Playful Brands & Digital Joy",
    description:
      "Studio desain digital yang membantu brand Anda tampil beda dan strategis.",
    url: "https://www.kenocreative.com",
    siteName: "Keno Creative",
    images: [
      {
        url: "/images/matcha-cover-1.jpg", // Pastikan Anda punya gambar ini di folder public/images
        width: 1200,
        height: 630,
        alt: "Keno Creative Studio Cover",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${jakarta.variable} ${spaceGrotesk.variable} bg-white text-brand-black font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
