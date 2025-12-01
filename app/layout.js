import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google"; // Ganti Inter dengan Plus_Jakarta_Sans
import "./globals.css";

// Setup Font: Ganti Inter menjadi Plus Jakarta Sans
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta", // Nama variabel baru
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata = {
  title: "Keno Creative | Digital Studio",
  description:
    "Studio desain digital yang berbasis di Pekalongan. Spesialis Branding, Web Design, dan Ilustrasi.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Update variabel di className body */}
      <body
        className={`${jakarta.variable} ${spaceGrotesk.variable} bg-white text-brand-black font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
