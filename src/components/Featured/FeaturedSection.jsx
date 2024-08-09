"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ClipLoader } from "react-spinners";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import Image from "next/image";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import FirstFeature from "./FirstFeature";

export default function FeaturedSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

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

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <>
      <section className="dark:bg-[#0c0b22] !w-full">
        <div className="w-full justify-items-center md:flex justify-center md:justify-between">
          <div className="w-[100%] md:w-[30%] relative z-50 justify-evenly flex flex-col">
            <div>
              <h1 className="font-extrabold text-6xl sm:text-8xl text-primar text-purple-400">
                Creative,
              </h1>
              <h1 className="font-extrabold text-6xl sm:text-8xl text-primar text-purple-500">
                Thoughts,
              </h1>
              <h1 className="font-extrabold text-6xl sm:text-8xl text-primar text-purple-600">
                Age,
              </h1>
            </div>
            <div className="">
              <div className="">
                <Link
                  to="createAccount"
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
          <div className="w-[100%] relative h-[60vh] gap-10 md:w-[60%] md:h-[90vh] flex justify-center items-center">
            {!videoLoaded && (
              <ClipLoader
                color={"#9575CDv"}
                loading={!videoLoaded}
                size={150}
              />
            )}
            <Image
              src="/hero.gif"
              alt=""
              fill
              className={`hidden dark:flex pt-8 rounded ${
                videoLoaded ? "block" : "hidden"
              }`}
            />
            <div raised={true} className="dark:hidden">
              <video
                className={`dark:hidden w-full h-[50vh] md:h-[90vh] ${
                  videoLoaded ? "block" : "hidden"
                }`}
                width="320"
                height="240"
                muted
                controls={false}
                preload="auto"
                autoPlay={true}
                loop={true}
                onLoadedData={handleVideoLoaded}
              >
                <source src="/vid2.mp4" type="video/mp4" />
                <track
                  src="/path/to/captions.vtt"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="text-center justify-center mt-10">
          <h1 className="font-extrabold text-4xl pt-24 pb-10 md:text-6xl">
            What&apos;s Justskills about?
          </h1>
          <Element name="test1" className="element"></Element>
        </div>
      </section>
      <FirstFeature />
    </>
  );
}
