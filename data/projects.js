// data/projects.js
// Database project dengan properti 'gallery' baru

export const projects = [
  {
    slug: "matcha-story",
    title: "Matcha Story Branding",
    category: "Visual Identity",
    year: "2025",
    // Gambar Utama
    image: "/images/matcha-cover-1.jpg",
    bgColor: "bg-[#f0fdf4]",
    iconColor: "text-[#15803d]",
    description:
      "Identitas visual yang menenangkan untuk kedai matcha artisan modern. Menggabungkan estetika Jepang tradisional dengan sentuhan minimalis kontemporer.",
    challenge:
      "Menciptakan brand image yang menonjol di tengah tren kopi kekinian, sekaligus mengedukasi pasar tentang matcha asli.",
    solution:
      'Kami menggunakan palet warna "Earth Tone" dan tipografi serif yang elegan untuk memberikan kesan premium namun tetap hangat dan ramah.',
    result:
      "Berhasil membuka 3 cabang baru dalam waktu 6 bulan dengan antrian pelanggan yang konsisten.",

    // --- BAGIAN INI YANG SEBELUMNYA HILANG ---
    gallery: [
      "/images/matcha-interior.jpg", // Gambar Setup Toko
      "/images/matcha-cover-2.jpg", // Gambar Setup Toko
    ],
  },
  {
    slug: "neo-mascot",
    title: "Neo Mascot Design",
    category: "Illustration",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
    bgColor: "bg-[#FFEDD5]",
    iconColor: "text-[#F97316]",
    description:
      "Desain maskot futuristik untuk startup teknologi blockchain. Maskot ini dirancang untuk terlihat ramah namun canggih.",
    challenge:
      "Klien membutuhkan wajah untuk brand teknologi yang sering dianggap dingin dan sulit dipahami.",
    solution:
      'Kami menciptakan karakter "Neo" dengan bentuk bulat yang ramah namun dengan palet warna neon cyberpunk.',
    result:
      "Brand awareness meningkat 40% di media sosial setelah peluncuran maskot.",
    gallery: [], // Kosongkan jika tidak ada galeri tambahan
  },
  {
    slug: "fintech-dash",
    title: "Fintech Dashboard",
    category: "Web Design",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200",
    bgColor: "bg-[#E0F2FE]",
    iconColor: "text-[#0EA5E9]",
    description:
      "Perancangan ulang antarmuka pengguna (UI) untuk platform manajemen keuangan pribadi.",
    challenge:
      "Pengguna lama mengeluhkan dashboard yang terlalu padat dan membingungkan.",
    solution:
      'Penyederhanaan tata letak dengan prinsip "Progressive Disclosure".',
    result: "Waktu penyelesaian tugas pengguna berkurang rata-rata 25%.",
    gallery: [],
  },
  {
    slug: "brew-co",
    title: "Brew Co. Branding",
    category: "Visual Identity",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200",
    bgColor: "bg-[#F3E8FF]",
    iconColor: "text-[#A855F7]",
    description: "Identitas visual lengkap untuk kedai kopi artisan lokal.",
    challenge:
      "Bersaing di pasar kedai kopi yang sangat jenuh dengan visual yang generik.",
    solution:
      "Menggali sejarah lokasi kedai untuk menciptakan narasi visual yang otentik.",
    result: "Menjadi tempat nongkrong terpopuler di area tersebut.",
    gallery: [],
  },
  {
    slug: "urban-store",
    title: "Urban Store E-com",
    category: "Web Design",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    bgColor: "bg-[#DCFCE7]",
    iconColor: "text-[#22C55E]",
    description: "Website e-commerce responsif untuk brand fashion streetwear.",
    challenge:
      "Tingkat cart abandonment yang tinggi pada website versi sebelumnya.",
    solution:
      "Redesain alur checkout menjadi one-page checkout dan optimasi performa mobile.",
    result: "Konversi penjualan meningkat 15% dalam bulan pertama peluncuran.",
    gallery: [],
  },
  {
    slug: "festival-sticker",
    title: "Summer Fest Art",
    category: "Illustration",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e0d7a8?auto=format&fit=crop&q=80&w=1200",
    bgColor: "bg-[#FFD1DC]",
    iconColor: "text-[#DB2777]",
    description:
      "Seri ilustrasi dan stiker untuk festival musik musim panas tahunan.",
    challenge: 'Menciptakan merchandise yang "collectible" dan viral.',
    solution:
      'Membuat seri karakter "Summer Misfits" yang mewakili berbagai tipe penonton.',
    result: "Merchandise sold out dalam 2 hari pertama festival.",
    gallery: [],
  },
  {
    slug: "tech-rebrand",
    title: "Tech Corp Rebrand",
    category: "Visual Identity",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=1200",
    bgColor: "bg-[#FAE8FF]",
    iconColor: "text-[#D946EF]",
    description: "Penyegaran merek total untuk perusahaan solusi IT korporat.",
    challenge:
      "Persepsi publik bahwa perusahaan sudah tua dan tertinggal teknologi.",
    solution:
      "Rebranding total dengan sistem identitas dinamis (dynamic identity).",
    result: "Berhasil menarik talenta muda baru untuk melamar kerja.",
    gallery: [],
  },
];
