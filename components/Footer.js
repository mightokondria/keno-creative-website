import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="font-display font-bold text-xl tracking-tight">
            KENO.
          </span>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 Keno Creative Studio. All rights reserved.
          </p>
        </div>
        <div className="flex gap-8">
          {["Instagram", "Behance", "Dribbble", "LinkedIn"].map((social) => (
            <Link
              key={social}
              href="#"
              className="text-gray-500 hover:text-brand-black transition-colors font-medium text-sm uppercase tracking-wider"
            >
              {social}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
