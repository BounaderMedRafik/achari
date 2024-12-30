"use client";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className=" min-h-[100vh] w-full flex items-center wrapper border-x border-foreground/10  justify-center flex-col pb-[10%]">
      <div className="flex items-center justify-center flex-col relative  ">
        <motion.div
          initial={{
            y: 40,
          }}
          animate={{
            y: 0,
            transition: {
              duration: 2,
              ease: [0.25, 1, 0.5, 1],
            },
          }}
          className=" rounded-full border border-foreground/25  size-64 absolute top-0 left-0 z-10  opacity-45 select-none pointer-events-none"
        />
        <motion.div
          initial={{
            y: 40,
          }}
          animate={{
            y: 0,
            transition: {
              delay: 1,
              duration: 2,
              ease: [0.65, 0, 0.35, 1],
            },
          }}
          className=" rounded-full border border-foreground/25  size-44 absolute -bottom-14 right-0 z-10  opacity-45 select-none pointer-events-none"
        />
        <motion.div
          initial={{
            x: 69,
          }}
          animate={{
            x: 0,
            transition: {
              duration: 2,
              ease: [0.65, 0, 0.35, 1],
            },
          }}
          className="  border border-foreground/25  size-44 absolute -top-14 right-0 z-10  opacity-45 select-none pointer-events-none"
        />
        <motion.div
          initial={{
            y: 30,
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              duration: 0.4,
              ease: [0.25, 1, 0.5, 1],
            },
          }}
          className=" text-6xl font-urdu text-center relative z-20"
        >
          أشعاري ألعربية
        </motion.div>
        <motion.div
          initial={{
            y: 30,
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              delay: 0.2,
              duration: 0.4,
              ease: [0.25, 1, 0.5, 1],
            },
          }}
          className=" mt-16 max-w-xl text-center text-sm relative z-20"
        >
          Achari is an open-source project that helps foreign Arabic learners
          explore the beauty of Arabic literature. Whether you&apos;re a
          beginner or intermediate learner, Achari provides translations,
          explanations, and cultural insights to enhance your understanding.
        </motion.div>
        <motion.div
          initial={{
            y: 30,
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              delay: 0.3,
              duration: 0.4,
              ease: [0.25, 1, 0.5, 1],
            },
          }}
          className=" mt-3  text-sm relative z-20"
        >
          Made With <span className=" px-1 text-red-500">❤︎</span> By{" "}
          <a
            className=" opacity-75 hover:opacity-100 transition-all italic"
            href=""
          >
            Mohamed Rafik
          </a>
        </motion.div>

        <motion.div
          initial={{
            y: 30,
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              delay: 0.4,
              duration: 0.4,
              ease: [0.25, 1, 0.5, 1],
            },
          }}
          className=" mt-7 flex items-center gap-1"
        >
          <Link
            href={"/chat"}
            className={buttonVariants({
              variant: "secondary",
              size: "sm",
              className: "",
            })}
          >
            <div className="flex items-center gap-2">
              <div>Github Repo</div>
              <div>
                <Github className=" fill-foreground" size={12} />
              </div>
            </div>
          </Link>
          <Link
            href={"/chat"}
            className={buttonVariants({
              variant: "default",
              size: "sm",
              className: "",
            })}
          >
            <div className="flex items-center gap-2">
              <div>Check Now</div>
              <div>
                <ArrowRight size={12} />
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
