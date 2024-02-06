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
      <div id="myDiv" className="pt-10 grid justify-around gap-32 lg:flex">
        <div class=" rounded-xl select-none flex-col justify-center bg-indigo-500 bg-gradient-to-br ">
          <div class="py-16 px-8 text-white ">
            <span class="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
              Justskills
            </span>
            <p class="my-6 text-3xl font-semibold leading-10">
              Increase reach with{" "}
              <span class="whitespace-nowrap py-2 text-cyan-300">
                drag and drop
              </span>
              .
            </p>
            <p class="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
              necessitatibus nostrum repellendus ab totam.
            </p>
            <a
              href="#"
              class="font-semibold tracking-wide text-white underline underline-offset-4"
            >
              Learn More
            </a>
          </div>
          <img className="p-10 rounded-lg object-cover" src="" />
        </div>

        <div class="rounded-xl select-none flex-col justify-center bg-indigo-500 bg-gradient-to-br ">
          <div class="py-16 px-8 text-white ">
            <span class="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
              Justskills
            </span>
            <p class="my-6 text-3xl font-semibold leading-10">
              Increase reach with{" "}
              <span class="whitespace-nowrap py-2 text-cyan-300">
                drag and drop
              </span>
              .
            </p>
            <p class="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
              necessitatibus nostrum repellendus ab totam.
            </p>
            <a
              href="#"
              class="font-semibold tracking-wide text-white underline underline-offset-4"
            >
              Learn More
            </a>
          </div>
          <img className="p-10 rounded-lg object-cover" src="" />
        </div>

        <div class="rounded-xl select-none flex-col justify-center bg-indigo-500 bg-gradient-to-br ">
          <div class="py-16 px-8 text-white ">
            <span class="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
              Justskills
            </span>
            <p class="my-6 text-3xl font-semibold leading-10">
              Increase reach with{" "}
              <span class="whitespace-nowrap py-2 text-cyan-300">
                drag and drop
              </span>
              .
            </p>
            <p class="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
              necessitatibus nostrum repellendus ab totam.
            </p>
            <a
              href="#"
              class="font-semibold tracking-wide text-white underline underline-offset-4"
            >
              Learn More
            </a>
          </div>
          <img className="p-10 rounded-lg object-cover" src="" />
        </div>
      </div>
      <Element name="test1" className="element"></Element>
    </section>
  );
}
