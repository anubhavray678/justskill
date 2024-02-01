import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export default function AccordTile({ title, question, link }) {
  return (
    <div>
      <Accordion type="single" collapsible className="border-2 rounded-lg p-5">
        <AccordionItem value="item-1" className="mb-5 border-2 rounded-lg p-3">
          <AccordionTrigger className="font-bold hover:no-underline hover:bg-secondary text-3xl md:text-4xl">
            Array
          </AccordionTrigger>
          <AccordionContent className="border-2 rounded-lg p-5 hover:bg-secondary flex justify-between border-none ">
            <p className="text-2xl">min-max</p>
            <Button className="md:text-2xl ">Solve</Button>
          </AccordionContent>
          <AccordionContent className="border-2 rounded-lg p-5 hover:bg-secondary flex justify-between border-none ">
            <p className="text-2xl">min-max</p>
            <Button className="md:text-2xl ">Solve</Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="mb-5 border-2 rounded-lg p-3">
          <AccordionTrigger className=" font-bold hover:no-underline hover:bg-secondary text-3xl md:text-4xl">
            Linked List
          </AccordionTrigger>
          <AccordionContent className="border-2 rounded-lg p-5 hover:bg-secondary flex justify-between border-none ">
            <p className="text-2xl">min-max</p>
            <Button className="md:text-2xl ">Solve</Button>
          </AccordionContent>
          <AccordionContent className="border-2 rounded-lg p-5 hover:bg-secondary flex justify-between border-none ">
            <p className=" text-xs md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, pariatur
            </p>
            <Button className="md:text-2xl ">Solve</Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
