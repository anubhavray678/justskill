"use client";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../../public/a1.json";
// import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <section>
        <div className="flex flex-col w-full justify-center items-center h-2/5">
          <Lottie
            animationData={animationData}
            className="flex justify-center items-center"
            loop={true}
          />
        </div>
      </section>
      {/* <Button>Button</Button> */}
    </main>
  );
}
