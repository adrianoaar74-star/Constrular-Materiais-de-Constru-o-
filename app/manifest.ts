import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Constrular Materiais",
    short_name: "Constrular",
    description: "Materiais, ferramentas e acabamentos para sua obra.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#1f2937",
    lang: "pt-BR",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
