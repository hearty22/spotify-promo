import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/admin/"] },
    ],
    sitemap: "https://spotify-3-meses-gratis.example.com/sitemap.xml",
    host: "https://spotify-3-meses-gratis.example.com",
  };
}
