// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import LogoutButton from "@/components/buttons/LogoutButton";
// "use client";
import logo from "../assets/logo/logo.png";
import just from "../assets/logo/justskill.png";
import { getServerSession } from "next-auth";
import Link from "next/link";
import LogoutButton from "./button/LogoutButton";
import Image from "next/image";
import MenuBar from "./button/MenuBar";
import ModeSwitch from "./button/ModeSwitch";
import Typography from "@mui/material/Typography";
import Dropdown from "./Dropdown";
import PracticeDropDown from "./PracticeDropDown";

import { ToggleButton } from "./button/ToggleButton";

export default function Header() {
  // const session = await getServerSession(authOptions);
  return (
    <header className="border-b py-3">
      <div className="max-w-6xl flex justify-between mx-auto px-6 ">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="" className="Applogo" />
            <span className="font-extrabold text-purple-500 text-2xl font-serif">
              Just<span className="text-yellow-500 font-extrabold">Skills</span>
            </span>
          </Link>

          <div className="hidden lg:block">
            <nav className="flex items-center gap-8 text-slate-500 text-lg">
              <Typography className="hover:text-purple-500">Courses</Typography>
              <Dropdown />
              <Link href={"/about"} className="hover:text-purple-500">
                About
              </Link>
              {/* <Link href={"/pricing"} className="hover:text-purple-500">
                Practice
              </Link> */}
              <Link href={"/contact"} className="hover:text-purple-500">
                Contact
              </Link>
              <PracticeDropDown />
              <Link
                href={"https://study.justskills.in/"}
                className="font-bold hover:text-purple-500"
              >
                Study
              </Link>
            </nav>
          </div>
        </div>

        <div className="visible lg:invisible flex ">
          <div className="mt-.5">
            {/* <ModeSwitch /> */}
            <ToggleButton />
            <MenuBar />
          </div>
        </div>
        <div className="hidden lg:block">
          <nav className="flex items-center gap-4 text-lg text-slate-500">
            {/* <Link href={"/account"}>Hello, </Link> */}
            {/* <LogoutButton /> */}

            <Link href={"/login"} className="mt-2 hover:text-purple-500">
              Sign In
            </Link>
            {/* <Link href={"/login"}>Create Account</Link> */}
          </nav>
        </div>
        <div className="hidden lg:flex mt-1">
          {/* <ModeSwitch /> */}
          <ToggleButton />
        </div>
      </div>
    </header>
  );
}
