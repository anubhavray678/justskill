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

export default function FeaturedSection() {
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
  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <>
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
        <div className=" text-center justify-center mt-10">
          <h1 className=" font-extrabold text-4xl pt-24 pb-10 md:text-6xl">
            What&apos;s Justskills about?
          </h1>
          <Element name="test1" className="element"></Element>

          <div id="myDiv" className="pt-10 grid justify-around gap-24 lg:flex">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl p-2">
              <div
                class="rounded-xl select-none flex-col justify-center bg-indigo-100 
        dark:bg-indigo-500 border  w-full h-full"
              >
                <div class=" py-10 px-8 text-white ">
                  <span class="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
                    Justskills Read
                  </span>
                  <p class="my-6 text-3xl font-semibold leading-10 text-indigo-500 dark:text-white">
                    Increase Knowledge with{" "}
                    <span class="whitespace-nowrap py-2 text-cyan-300">
                      High-Quality Articles
                    </span>
                    .
                  </p>
                  <p class="mb-4 text-indigo-500 dark:text-white">
                    For all avid readers, here&apos;s a carefully curated
                    collection of articles designed to enhance your skills in
                    Data Structures and Algorithms (DSA).Additionally,
                    foundational concepts of programming languages are included
                    to cater to absolute beginners.
                  </p>
                  <a
                    href="/read"
                    target="blank"
                    class="font-semibold tracking-wide underline underline-offset-4 text-indigo-500 dark:text-white"
                  >
                    Learn More
                  </a>
                </div>
                <img className="rounded-lg object-cover" src="/read.png" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl p-2">
              <div
                class="rounded-xl select-none flex-col justify-center bg-indigo-100 
        dark:bg-indigo-500 border  w-full h-full"
              >
                <div class=" py-10 px-8 text-white ">
                  <span class="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
                    Justskills CodeGround
                  </span>
                  <p class="my-6 text-3xl font-semibold leading-10 text-indigo-500 dark:text-white">
                    Practice Coding with{" "}
                    <span class="whitespace-nowrap py-2 text-cyan-300">
                      Dynamic-Code Compiler
                    </span>
                    .
                  </p>
                  <p class="mb-4 text-indigo-500 dark:text-white">
                    An online code editor that allows users to write, edit, and
                    run code directly within their web browsers without the need
                    for any specialized software or development environments.
                    This editors typically provide features such as syntax
                    highlighting, code autocompletion, and error checking to
                    help developers write code more efficiently and accurately.
                  </p>
                  <a
                    href="/codeground"
                    target="blank"
                    class="font-semibold tracking-wide underline underline-offset-4 text-indigo-500 dark:text-white"
                  >
                    Learn More
                  </a>
                </div>
                <img className="rounded-lg object-cover" src="/compiler.png" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl p-2">
              <div
                class="rounded-xl select-none flex-col justify-center bg-indigo-100 
        dark:bg-indigo-500 border  w-full h-full"
              >
                <div class=" py-10 px-8 text-white ">
                  <span class="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
                    Justskills Interview
                  </span>
                  <p class="my-6 text-3xl font-semibold leading-10 text-indigo-500 dark:text-white">
                    Increase Knowledge with{" "}
                    <span class="whitespace-nowrap py-2 text-cyan-300">
                      Quality DSA problems
                    </span>
                    .
                  </p>
                  <p class="mb-4 text-indigo-500 dark:text-white">
                    Here&apos;s an extensive compilation of DSA problems
                    organized by topic and pattern, ideal for those feeling
                    trapped in tutorial limbo. While it might not be a quick
                    fix, it&apos;s a solid step forward. Let&apos;s dive in and
                    break free! <br />
                    Solve it.
                  </p>

                  <a
                    href="/dsa-questions"
                    target="blank"
                    class="font-semibold tracking-wide underline underline-offset-4 text-indigo-500 dark:text-white"
                  >
                    Learn More
                  </a>
                </div>
                <img className="rounded-lg object-cover" src="/interview.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" pb-16">
        <div className=" text-center justify-center mt-10">
          <h1 className=" font-extrabold text-4xl pt-24 pb-10 md:text-6xl">
            What&apos;s Justskills Study?
          </h1>

          <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl p-2">
            <div
              class="rounded-xl select-none justify-center bg-indigo-100 
        dark:bg-indigo-500 border  w-full h-full flex flex-col md:flex-row"
            >
              <div class=" py-10 px-8 text-white ">
                <span class="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
                  Justskills Study
                </span>
                <p class="my-6 text-2xl font-semibold leading-10 text-indigo-500 dark:text-white md:text-3xl">
                  Increase Knowledge with{" "}
                  <span class="whitespace-nowrap py-2 text-cyan-300">
                    Trending Tech materials
                  </span>
                  .
                </p>
                <p class="mb-8 text-indigo-500 dark:text-white">
                  For all avid readers, here&apos;s a carefully curated
                  collection of articles designed to enhance your skills in Data
                  Structures and Algorithms (DSA).Additionally, foundational
                  concepts of programming languages are included to cater to
                  absolute beginners.
                  <br />{" "}
                  <span className=" font-sans font-bold ">
                    Read on trending topics in technology, coding, web
                    development, app development, interviews etc.
                  </span>
                </p>
                <a
                  href="https://study.justskills.in/"
                  target="blank"
                  class="font-semibold tracking-wide underline-offset-4 text-indigo-500 dark:text-white border-white border-2 p-2 rounded-lg hover:bg-indigo-400 "
                >
                  Learn More
                </a>
              </div>
              <div className="w-[100%]">
                <img
                  className="rounded-lg object-cover h-full "
                  src="/study.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
