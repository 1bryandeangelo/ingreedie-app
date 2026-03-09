import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/auth/',
          '/api/',
          '/pantry',
          '/shopping-list',
          '/recipes',
        ],
      },
    ],
    sitemap: 'https://ingreedie.com/sitemap.xml',
    host: 'https://ingreedie.com',
  };
}
