import { z } from "zod";
import type { MetadataRoute } from 'next';
import { signed_out_menu, footer_menu } from '@/data/menus';
import app from '@/data/app';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = z.string().datetime().parse(new Date().toISOString());
  const changeFrequency = z.enum(['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']).parse('hourly');
  const priority = z.number().lte(1).gte(0).parse(0.8);

  const SitemapItem = z.object({
    url: z.string().url(),
    lastModified: z.string().datetime(),
    changeFrequency: z.enum(['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']),
    priority: z.number().lte(1).gte(0),
  });

  const publicRoutes: z.infer<typeof SitemapItem>[] = signed_out_menu.map((page) => {
    return {
      url: `${app.url}${page.route}`,
      lastModified,
      changeFrequency,
      priority,
    }
  });

  const legalRoutes: z.infer<typeof SitemapItem>[] = footer_menu.map((page) => {
    return {
      url: `${app.url}${page.route}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.5,
    }
  });

  // remove sitemap.xml from legalRoutes
  legalRoutes.splice(legalRoutes.findIndex((page) => page.url === '/sitemap.xml'), 1);

  return [
    {
      url: `${app.url}`,
      lastModified,
      changeFrequency: 'hourly',
      priority: 1,
    },
    ...publicRoutes,
    ...legalRoutes,
  ];
};
