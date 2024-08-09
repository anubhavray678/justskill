import logo from "../assets/logo/logo.png";
import Link from "next/link";
import Image from "next/image";
import MenuBar from "./button/MenuBar";
import Typography from "@mui/material/Typography";
import PracticeDropDown from "./PracticeDropDown";

import { ToggleButton } from "./button/ToggleButton";

export default function Header() {
  return (
    <header className="border-b py-3 fixed w-full z-[9999] dark:bg-black bg-white">
      <div className="max-w-6xl flex justify-between mx-auto px-6 ">
        <div className="flex items-center gap-10 justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="" className="Applogo" />
            <span className="font-extrabold text-purple-500 text-2xl font-serif">
              Just<span className="text-yellow-500 font-extrabold">Skills</span>
            </span>
          </Link>

          <div className="hidden lg:block">
            <nav className="flex items-center gap-8 text-slate-500 text-lg">
              <Link href={"/courses"} className="hover:text-purple-500">
                <Typography className="hover:text-purple-500 cursor-pointer">
                  Courses
                </Typography>{" "}
              </Link>
              <Link href={"/read"} className="hover:text-purple-500">
                <Typography className="hover:text-purple-500 cursor-pointer">
                  Read
                </Typography>{" "}
              </Link>
              <Link href={"/about"} className="hover:text-purple-500">
                About
              </Link>

              <Link href={"/contact"} className="hover:text-purple-500">
                Contact
              </Link>
              {/* <PracticeDropDown /> */}
            </nav>
          </div>
        </div>

        <div className="visible lg:invisible flex ">
          <div className="mt-.5">
            <MenuBar />
          </div>
        </div>
        <div className="hidden lg:block place-content-center">
          <nav className="flex items-center gap-4 text-lg text-slate-500">
            <Link
              href={"https://study.justskills.in/"}
              className="font-bold hover:text-white border rounded-md p-2 hover:bg-violet-400 border-violet-400"
              target="blank"
            >
              Study Articles
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
