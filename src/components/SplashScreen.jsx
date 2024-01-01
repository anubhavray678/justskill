// "use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import anime from "animejs";
import logo from "../assets/logo/logo.png";

const SplashScreen = ({ finishLoading }) => {
  const [ismounted, setismounted] = useState(false);
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(true),
    });

    loader
      //   .add({
      //     targets: "#logo",
      //     delay: 0,
      //     scale: 1,
      //     duration: 500,
      //     easing: "easeInOutExpo",
      //   })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutQuad",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1,
        duration: 500,
        easing: "easeInOutQuad",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutQuad",
      })
      .add({
        targets: "#logo",
        delay: 100,
        scale: 1,
        duration: 500,
        easing: "easeInOutQuad",
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setismounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  });

  return (
    <div
      className="flex h-screen items-center justify-center gap-7 background pb-10"
      ismounted={ismounted}
    >
      <Image
        id="logo"
        src={logo}
        alt=""
        className="ApplogoSplash"
        height={80}
        width={80}
      />
      <span
        id="logo"
        className="font-extrabold text-purple-500 text-4xl font-serif "
      >
        Just
        <span className="text-yellow-500 font-extrabold ">Skills</span>
      </span>
    </div>
  );
};

export default SplashScreen;
