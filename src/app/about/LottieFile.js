"use client";

import Lottie from "lottie-react";
import animationData from "../../../public/a2.json";

export default function LotieFile() {
  return (
    <Lottie
      animationData={animationData}
      className="flex justify-center items-center "
      loop={true}
    />
  );
}
