export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "https://study.justskills.in/write",
    },
    sitemap: "https://justskills.in/sitemap.xml",
  };
}
