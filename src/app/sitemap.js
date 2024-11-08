import GetBlogs from "@/lib/getBlogs";

const URL = "https://study.justskills.in";

export default async function Sitemap() {
  try {
    // Fetch study posts
    let blogs = await GetBlogs();

    // Define additional URLs
    const additionalUrls = [
      {
        url: "https://study.justskills.in",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://study.justskills.in/read",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://study.justskills.in/login",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://study.justskills.in/read?cat=android",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://study.justskills.in/read?cat=emerging-tech",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://study.justskills.in/read?cat=coding",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://study.justskills.in/read?cat=travel",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://study.justskills.in/read?cat=culture",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://study.justskills.in/read?cat=placement",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: "https://justskills.in",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
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

      {
        url: "https://justskills.in/joblist",
        lastModified: new Date(),
        changeFrequency: "weekly",
        // priority: 0.5,
      },
    ];

    // Concatenate all URLs
    const allUrls = [...additionalUrls, ...blogs];

    return allUrls;
  } catch (error) {
    console.error("Error fetching study posts:", error);
    throw new Error("Failed to generate sitemap");
  }
}
