import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://Hilary-Tech.com'

  // Liste de TOUTES vos pages statiques
  return [
    {
      url: baseUrl,
      lastModified: new Date('2025-08-29'), // Date de création
      changeFrequency: 'monthly',
      priority: 1.0, // Page d'accueil = priorité max
    },
    {
      url: `${baseUrl}/cds`,
      lastModified: new Date('2025-08-29'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cge`,
      lastModified: new Date('2025-08-29'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ctvd`,
      lastModified: new Date('2025-08-29'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/eks`,
      lastModified: new Date('2025-08-29'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ltc`,
      lastModified: new Date('2025-08-29'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/minister_routes_senegal`,
      lastModified: new Date('2025-08-29'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/port_cotonou`,
      lastModified: new Date('2025-08-29'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/produit`,
      lastModified: new Date('2025-08-29'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/propos`,
      lastModified: new Date('2025-08-29'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/reussite`,
      lastModified: new Date('2025-08-29'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/secteur`,
      lastModified: new Date('2025-08-29'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/secteur-agricole`,
      lastModified: new Date('2025-08-29'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/secteur-arides`,
      lastModified: new Date('2025-08-29'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/secteur-dechets`,
      lastModified: new Date('2025-08-29'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/secteur-elevage`,
      lastModified: new Date('2025-08-29'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/secteur-industrie`,
      lastModified: new Date('2025-08-29'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/secteur-informatique`,
      lastModified: new Date('2025-08-29'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/secteur-logistique`,
      lastModified: new Date('2025-08-29'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/socoma`,
      lastModified: new Date('2025-08-29'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/sonabhy_bingo`,
      lastModified: new Date('2025-08-29'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/sonabhy_peni`,
      lastModified: new Date('2025-08-29'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },

  ]
}