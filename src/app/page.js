"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import Image from "next/image";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import HeadTag from "./Head";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <>
      <Head>
        <title>JustSkills | Improve then prove.</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="JustSkills" />
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
        <section className="">
          <div className=" w-full justify-items-center md:flex justify-center md:justify-between">
            <div className="w-[100%] md:w-[30%] relative z-50 justify-evenly flex flex-col">
              <div>
                <h1 className=" font-extrabold text-6xl sm:text-8xl text-primary">
                  Creative,
                </h1>
                <h1 className=" font-extrabold text-6xl sm:text-8xl text-primary">
                  Thoughts,
                </h1>
                <h1 className=" font-extrabold text-6xl sm:text-8xl text-primary">
                  Age,
                </h1>
              </div>
              <div className="">
                <p className="font-bold text-2xl sm:text-4xl text-primary pt-10">
                  Improve then prove
                </p>
                <div className="">
                  <Link
                    activeClass="active"
                    to="test1"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onSetActive={handleSetActive}
                  >
                    <Button className="mt-10 w-[50%] gap-2 p-6">
                      Explore
                      <KeyboardDoubleArrowDownIcon />
                    </Button>{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className=" w-[100%] relative h-[60vh] gap-10 md:w-[60%] md:h-[90vh]">
              <Image src="/hero.gif" alt="" fill className=" pt-8 rounded" />
            </div>
          </div>
          <div id="myDiv" className=" h-[200px]">
            <Element name="test1" className="element"></Element>
          </div>
        </section>
      </main>
    </>
  );
}
