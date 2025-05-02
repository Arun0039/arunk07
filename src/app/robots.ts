import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'ia_archiver', // Block Internet Archive (Wayback Machine)
        disallow: '/' // Disallow access to all pages
      }
    ],
    sitemap: [
    ]
  };
}
