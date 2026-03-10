import { MetadataRoute } from 'next'
import { products } from "@/app/lib/products"; // Tételezzük fel, hogy itt vannak a klímák

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aclimate.hu'

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/szolgaltatasok`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tudastar`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/teruletek`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kapcsolat`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/akcios-klimak`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/klimak`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/multi-klimak`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kazettas-klimak`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/legcsatornas-klimak`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/parapet-klimak`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/konzol-klimak`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hoszivattyuk`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  const akciosKlimak: MetadataRoute.Sitemap = products.filter(p => p.type == "ac" && p.action).map((product) => ({
    url: `${baseUrl}/akcios-klimak/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  const klimak: MetadataRoute.Sitemap = products.filter((p) => p.type == "ac" && p.action === undefined).map((product) => ({
    url: `${baseUrl}/klimak/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  const multiKlimak: MetadataRoute.Sitemap = products.filter((p) => p.type == "ac-multi").map((product) => ({
    url: `${baseUrl}/multi-klimak/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  const kazettasKlimak: MetadataRoute.Sitemap = products.filter((p) => p.type == "ac-casette").map((product) => ({
    url: `${baseUrl}/kazettas-klimak/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  const legcsatornasKlimak: MetadataRoute.Sitemap = products.filter((p) => p.type == "ac-ducted").map((product) => ({
    url: `${baseUrl}/legcsatornas-klimak/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  const parapetKlimak: MetadataRoute.Sitemap = products.filter((p) => p.type == "ac-parapet").map((product) => ({
    url: `${baseUrl}/parapet-klimak/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  const konzolKlimak: MetadataRoute.Sitemap = products.filter((p) => p.type == "ac-console").map((product) => ({
    url: `${baseUrl}/konzol-klimak/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  const hoszivattyuk: MetadataRoute.Sitemap = products.filter((p) => p.type == "hp").map((product) => ({
    url: `${baseUrl}/hoszivattyuk/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  return [...staticPages, 
    ...akciosKlimak, 
    ...klimak, 
    ...multiKlimak,
    ...kazettasKlimak,
    ...legcsatornasKlimak,
    ...parapetKlimak,
    ...konzolKlimak,
    ...hoszivattyuk
  ]
}