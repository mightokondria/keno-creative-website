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

// --- METADATA SEO GLOBAL AW ---
export const metadata = {
  // Ganti URL ini dengan domain Vercel Anda nanti setelah deploy
  metadataBase: new URL("https://www.kenocreative.com"),

  title: {
    default: "Keno Creative | Digital Studio Pekalongan",
    template: "%s | Keno Creative",
  },
  description:
    "Studio desain digital spesialis Branding, Web Design, dan Ilustrasi berbasis di Pekalongan. Kami membantu brand tampil beda.",
  keywords: [
    "Digital Studio",
    "Graphic Design",
    "Web Design Pekalongan",
    "Branding Agency",
    "Jasa Bikin Website Murah",
    "Jasa Desain Logo",
    "Jasa Desain Branding",
    "Jasa Desain Ilustrasi",
    "Jasa Desain Visual Identity",
    "Jasa Desain Web Design",
    "Jasa Desain UI/UX Design",
    "Jasa Desain Landing Page",
    "Jasa Desain Framer",
    "Jasa Desain Webflow",
    "Jasa Desain Figma",
    "Jasa Desain Adobe Illustrator",
    "Jasa Desain Adobe Photoshop",
    "Jasa Desain Adobe InDesign",
    "Jasa Desain Adobe XD",
    "Keno Creative",
  ],
  authors: [{ name: "Keno Team" }],
  creator: "Keno Creative",

  // --- BAGIAN INI YANG MENGATUR LOGO BROWSER ---
  icons: {
    // Ganti '/images/logo-kotak.png' dengan nama file logo Anda di folder public
    // Contoh: jika nama file Anda 'icon.png' di dalam folder public, tulis '/icon.png'
    icon: "/images/logo-keno/logo-emblem.png",
    apple: "/images/logo-keno/logo-emblem.png", // Ikon untuk shortcut di iPhone/iPad
  },

  openGraph: {
    title: "Keno Creative | Playful Brands & Digital Joy",
    description:
      "Studio desain digital yang membantu brand Anda tampil beda dan strategis.",
    url: "https://www.kenocreative.com",
    siteName: "Keno Creative",
    images: [
      {
        url: "/images/og-image-default.jpg",
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
