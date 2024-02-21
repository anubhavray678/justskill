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

import {
  CardMedia,
  CardHeader,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

import Image from "next/image";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import FirstFeature from "./FirstFeature";

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
      <section className=" dark:bg-[#0c0b22] !w-full">
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
                  activeclassName="active"
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
            <Image
              src="/hero.gif"
              alt=""
              fill
              className=" hidden dark:flex pt-8 rounded"
            />

            <div raised={true} className="dark:hidden">
              {/* <CardActionArea className=" hover:bg-[#f4f3f4]"> */}
              <CardMedia
                component="video"
                image={"/vid2.mp4"}
                className="dark:hidden w-full h-[90vh]"
                autoPlay
                loop={true}
              />
              {/* </CardActionArea> */}
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className=" text-center justify-center mt-10">
          <h1 className=" font-extrabold text-4xl pt-24 pb-10 md:text-6xl">
            What&apos;s Justskills about?
          </h1>
          <Element name="test1" className="element"></Element>
        </div>
      </section>
      <FirstFeature />
      <section className=" pb-16">
        <div className=" text-center justify-center mt-10">
          <h1 className=" font-extrabold text-4xl pt-24 pb-10 md:text-6xl">
            What&apos;s Justskills Study?
          </h1>

          <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl p-2">
            <div
              className="rounded-xl select-none justify-center bg-indigo-100 
        dark:bg-indigo-500 border  w-full h-full flex flex-col md:flex-row"
            >
              <div className=" py-10 px-8 text-white ">
                <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
                  Justskills Study
                </span>
                <p className="my-6 text-2xl font-semibold leading-10 text-indigo-500 dark:text-white md:text-3xl">
                  Increase Knowledge with{" "}
                  <span className="whitespace-nowrap py-2 text-cyan-300 text-sm sm:text-3xl">
                    Trending Tech materials
                  </span>
                  .
                </p>
                <p className="mb-8 text-indigo-500 dark:text-white">
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
                  className="font-semibold tracking-wide underline-offset-4 text-indigo-500 dark:text-white border-white border-2 p-2 rounded-lg hover:bg-indigo-400 "
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
