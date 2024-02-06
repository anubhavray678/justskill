import FeaturedSection from "@/components/Featured/FeaturedSection";
import Head from "next/head";
export const metadata = {
  title: "JustSkills | Improve then prove.",
  description:
    "JustSkills is one of the leading platforms to learn Computer Science skills. Master essential data structures and algorithms,read trending tech and expand your knowledge on different tech stuff.",
  url: "https://justskills.in/",
  openGraph: {
    title: "JustSkills | Improve then prove.",
    description:
      "JustSkills is one of the leading platforms to learn Computer Science skills. Master essential data structures and algorithms,read trending tech and expand your knowledge on different tech stuff.",
    url: "https://justskills.in/",
    image: "/logo.png",
  },
};
export default function Home() {
  return (
    <>
      <Head>
        <title>JustSkills | Improve then prove.</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="JustSkills is one of the leading platforms to learn Computer Science skills. Master essential data structures and algorithms,read trending tech and expand your knowledge on different tech stuff."
        />
        <meta
          property="og:description"
          content="JustSkills is one of the leading platforms to learn Computer Science skills. Master essential data structures and algorithms,read trending tech and expand your knowledge on different tech stuff."
        />
        <meta property="og:title" content="JustSkills | Improve then prove." />
        <meta
          property="og:image"
          content="https://justskills.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.bd81bc90.png&w=640&q=75"
        />
        <meta property="og:url" content="https://justskills.in/" />
      </Head>
      <main>
        <FeaturedSection />
      </main>
    </>
  );
}
