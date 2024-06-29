import FeaturedSection from "@/components/Featured/FeaturedSection";
import { Benefits } from "@/components/new/Benefits";
import { Faq } from "@/components/new/Faq";
import { SectionTitle } from "@/components/new/SectionTitle";
import { Testimonials } from "@/components/new/Testimonials";
import Head from "next/head";

import { benefitOne, benefitTwo } from "@/components/new/data";
import Course from "@/components/new/Course";
export const metadata = {
  title: "JustSkills | Improve then prove.",
  description:
    "JustSkills is one of the leading platforms to learn Computer Science skills. Master essential data structures and algorithms,read trending tech and expand your knowledge on different tech stuff.",
  url: "https://justskills.in/",
  metadataBase: new URL("https://justskills.in/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },

  openGraph: {
    title: "JustSkills | Improve then prove.",
    description:
      "JustSkills is one of the leading platforms to learn Computer Science skills. Master essential data structures and algorithms,read trending tech and expand your knowledge on different tech stuff.",
    url: "https://justskills.in/",
    metadataBase: new URL("https://justskills.in/"),
    images: "/logo.png",
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
        <Course />
        <Benefits data={benefitOne} />

        <SectionTitle
          preTitle="Testimonials"
          title="Here's what our customers said"
        >
          Testimonials is a great way to increase the brand trust and awareness.
          Use this section to highlight your popular customers.
        </SectionTitle>

        <Testimonials />

        <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
          Answer your customers possible questions here, it will increase the
          conversion rate as well as support or chat requests.
        </SectionTitle>
        <Faq />
        <section>
          <h1 className="text-center text-2xl font-bold font-sans">
            AWESOME COMMUNITY
          </h1>
          <p className="text-center text-xl font-semibold font-sans text-indigo-600">
            Trusted by over 2000+ Students
          </p>
        </section>
      </main>
    </>
  );
}
