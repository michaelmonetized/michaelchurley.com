import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/private/",
        "/tmp/",
        "/profile/",
        "/billing/",
        "/settings/",
        "/support/",
      ],
      crawlDelay: 0,
    },
    sitemap: `https://www.michaelchurley.com/sitemap.xml`,
    host: "www.michaelchurley.com",
  };
}
