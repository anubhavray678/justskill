export default function sitemap() {
  return [
    {
      url: "https://justskills.in",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://study.justskills.in",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://justskills.in/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://justskills.in/contact",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://justskills.in/read",
      lastModified: new Date(),
      changeFrequency: "weekly",
      // priority: 0.5,
    },
  ];
}
