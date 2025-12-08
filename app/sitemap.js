import { projects } from "@/data/projects";

// PENTING: Wajib ada untuk output: 'export'
export const dynamic = "force-static";

export default function sitemap() {
  // Gunakan domain yang Anda set di metadata layout
  const baseUrl = "https://www.kenocreative.com";

  // 1. Halaman Fisik
  const staticRoutes = [
    "", // Homepage (/)
    "/work", // Halaman Portfolio (/work)
    "/team", // Halaman Team (/team)
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }));

  // 2. Halaman Dinamis (Detail Project)
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
