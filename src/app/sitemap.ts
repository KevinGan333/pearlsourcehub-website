import type { MetadataRoute } from "next";
import { siteUrl, mainPages, locationPages } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...mainPages, ...locationPages].map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changefreq,
    priority: page.priority,
  }));
}
