export default async function getBlogs() {
  try {
    const response = await fetch("https://study.justskills.in/api/blog");

    if (!response.ok) {
      throw new Error(`Error fetching blog posts: ${response.statusText}`);
    }

    // Parse the JSON response
    const posts = await response.json();

    // Generate URLs for each blog post
    const urls = posts.map((post) => ({
      url: post,
      lastModified: post.createdAt,
      changeFrequency: "daily",
      priority: 0.7,
    }));

    // Return the array of URLs
    return urls;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw new Error("Failed to fetch blog posts");
  }
}
