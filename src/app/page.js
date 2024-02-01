"use client";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../../public/a2.json";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Home() {
  return (
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
                <Button className="mt-10 w-[50%]">Explore</Button>
              </div>
            </div>
          </div>
          <div className=" w-[100%] relative h-[60vh] gap-10 md:w-[60%] md:h-[90vh]">
            <Image src="/hero.gif" alt="" fill className=" pt-8 rounded" />
          </div>
        </div>
      </section>
    </main>
  );
}
