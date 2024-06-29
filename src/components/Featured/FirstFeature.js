import Image from "next/image";
import React from "react";

function FirstFeature() {
  return (
    <div className=" flex md:flex mt-20 flex-wrap lg:flex-nowrap justify-between">
      <section className=" pb-16 w-full">
        <div className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
          <div className={`flex items-center justify-center w-full lg:w-1/2 `}>
            <div>
              <img
                src="/read.png"
                width={521}
                height={521}
                alt="Benefits"
                className={"object-cover"}
              />
            </div>
          </div>

          <div
            className={`flex flex-wrap items-center w-full lg:w-1/2 
            }`}
          >
            <div>
              <div className="flex flex-col w-full mt-4">
                <div className=" text-center justify-center mt-10">
                  <div className=" rounded-xl p-2">
                    <div
                      className="rounded-xl select-none justify-center bg-indigo-100 
  dark:bg-indigo-500 border  w-full h-full"
                    >
                      <div className=" py-10 px-8 text-white ">
                        <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
                          Justskills Read
                        </span>
                        <p className="my-6 text-3xl font-semibold leading-10 text-indigo-500 dark:text-white">
                          Increase Knowledge <br /> with <br />
                          <span className="whitespace-nowrap py-2 text-black text-sm md:text-2xl">
                            High-Quality Articles
                          </span>
                          .
                        </p>
                        <p className="mb-4 text-gray-700 dark:text-white">
                          For all avid readers, here&apos;s a carefully curated
                          collection of articles designed to enhance your skills
                          in Data Structures and Algorithms (DSA).Additionally,
                          foundational concepts of programming languages are
                          included to cater to absolute beginners.
                        </p>
                        <a
                          href="/read"
                          target="blank"
                          className="font-semibold tracking-wide underline underline-offset-4 text-indigo-500 dark:text-white"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className=" pb-16 w-full md:w-[30%]">
        <div className=" text-center justify-center mt-10">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl p-2">
            <div
              className="rounded-xl select-none justify-center bg-indigo-100 
  dark:bg-indigo-500 border  w-full h-full"
            >
              <div className=" py-10 px-8 text-white ">
                <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
                  Justskills CodeGround
                </span>
                <p className="my-6 text-3xl font-semibold leading-10 text-indigo-500 dark:text-white">
                  Practice Coding <br /> with <br />
                  <span className="whitespace-nowrap py-2 text-cyan-300 text-sm md:text-2xl">
                    Dynamic-Code Compiler
                  </span>
                  .
                </p>
                <p className="mb-4 text-indigo-500 dark:text-white">
                  An online code editor that allows users to write, edit, and
                  run code directly within their web browsers without the need
                  for any specialized software or development environments. This
                  editors typically provide features such as syntax
                  highlighting, code autocompletion, and error checking to help
                  developers write code more efficiently and accurately.
                </p>
                <a
                  href="/codeground"
                  target="blank"
                  className="font-semibold tracking-wide underline underline-offset-4 text-indigo-500 dark:text-white"
                >
                  Learn More
                </a>
              </div>
              <div className="w-[100%]">
                <img className="rounded-lg object-cover" src="/compiler.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" pb-16 w-full md:w-[30%]">
        <div className=" text-center justify-center mt-10">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl p-2">
            <div
              className="rounded-xl select-none justify-center bg-indigo-100 
  dark:bg-indigo-500 border  w-full h-full"
            >
              <div className=" py-10 px-8 text-white ">
                <span className="rounded-full bg-white px-3 py-1 font-medium text-blue-600">
                  Justskills Interview
                </span>
                <p className="my-6 text-3xl font-semibold leading-10 text-indigo-500 dark:text-white">
                  Increase Knowledge <br />
                  with <br />
                  <span className="whitespace-nowrap py-2 text-cyan-300 text-sm md:text-2xl">
                    Quality DSA problems
                  </span>
                  .
                </p>
                <p className="mb-4 text-indigo-500 dark:text-white">
                  Here&apos;s an extensive compilation of DSA problems organized
                  by topic and pattern, ideal for those feeling trapped in
                  tutorial limbo. While it might not be a quick fix, it&apos;s a
                  solid step forward. Let&apos;s dive in and break free! <br />
                  Solve it.
                </p>

                <a
                  href="/dsa-questions"
                  target="blank"
                  className="font-semibold tracking-wide underline underline-offset-4 text-indigo-500 dark:text-white"
                >
                  Learn More
                </a>
              </div>
              <div className="w-[100%]">
                <img className="rounded-lg object-cover" src="/interview.png" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default FirstFeature;
