"use client";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../../public/a2.json";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import styles from "./home.module.css";
export default function Home() {
  return (
    <main>
      <section className="flex flex-col w-full justify-center items-center">
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Creative Thoughts Agency.</h1>
            <p className={styles.desc}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              blanditiis adipisci minima reiciendis a autem assumenda dolore.
            </p>
            <div className={styles.buttons}>
              <Button className={styles.button}>Learn More</Button>
              <Button className={styles.button}>Contact</Button>
            </div>
            {/* <div className={styles.brands}>
              <Image
                src="/brands.png"
                alt=""
                fill
                className={styles.brandImg}
              />
            </div> */}
          </div>
          <div className={styles.imgContainer}>
            <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
          </div>
        </div>
      </section>
    </main>
  );
}
