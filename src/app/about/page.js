"use client";
import Lottie from "lottie-react";
import animationData from "../../../public/a2.json";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <main>
      <section class="min-h-screen bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <div class="lg:flex lg:items-center lg:-mx-10">
            <div class="lg:w-1/2 lg:mx-10">
              <h1 class="text-2xl mb-5 font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
                About
              </h1>
              <Typography>
                The aim of <span className="font-bold">JustSkills </span>is to
                make very high quality, easy-to-understand, not-so-boring text
                based courses (that revolve around Computer Science) available
                for learners for free. That &apos;s it.
              </Typography>
            </div>

            <div class="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
              {/* <img
                class="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"
                src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              /> */}
              <Lottie
                animationData={animationData}
                className="flex justify-center items-center "
                loop={true}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
