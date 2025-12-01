import { projects } from "@/data/projects";

export default function sitemap() {
  const baseUrl = "https://keno-creative.vercel.app"; // Ganti dengan domain asli nanti

  // 1. Halaman Statis
  const routes = ["", "#work", "#about", "#services", "#contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    })
  );

  // 2. Halaman Dinamis (Project)
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...routes, ...projectRoutes];
}
