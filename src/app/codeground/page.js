import Image from "next/image";
import codeground from "../../../public/codeground.png";
import htmlcssjs from "../../../public/htmlcssjs.png";
import cpp from "../../../public/cpp.png";
import python from "../../../public/python.png";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function CodeGround() {
  return (
    <>
      <div className=" bg-secondary p-10 ">
        <div className="flex justify-center">
          <div className="flex flex-col align-middle text-center justify-items-center">
            <Image src={codeground} width={200} alt="codeground" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col align-middle text-center justify-items-center">
            <h1>
              <span className="font-extrabold text-purple-500 text-2xl font-serif">
                Just
                <span className="text-yellow-500 font-extrabold">Skills</span>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span className="gap-5 text-2xl font-serif">CodeGround</span>
            </h1>
          </div>
        </div>
      </div>

      <div class="flex justify-center w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between ">
          <Card className="w-[250px] m-5">
            <CardContent>
              <Image src={htmlcssjs} width={"100%"} height={"100%"} alt="" />
            </CardContent>
            <p className="text-center">HTML CSS JS</p>
            <CardFooter></CardFooter>
          </Card>
          <Card className="w-[250px] m-5 p-5">
            <CardContent>
              <Image src={cpp} width={"80%"} height={"0%"} alt="" />
            </CardContent>
            <p className="text-center">C++</p>
            <CardFooter></CardFooter>
          </Card>
          <Card className="w-[250px] m-5 p-5">
            <CardContent>
              <Image src={python} width={"100%"} height={"100%"} alt="" />
              <p className="text-center">Python</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
