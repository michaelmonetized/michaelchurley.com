import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();
  const changeFrequency = "hourly";

  type SitemapItem = {
    url: string;
    lastModified: string;
    changeFrequency:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never";
    priority: number;
  };

  const publicRoutes: SitemapItem[] = [
    {
      url: `https://www.michaelchurley.com/`,
      lastModified,
      changeFrequency,
      priority: 1,
    },
  ];

  return publicRoutes;
}
