"use client";

import { TypingAnimation } from "@/components/ui/atoms/typing-animation";
import { RequestForm } from "@/features/request";
import logo from "@/public/images/Logo.svg";
import road from "@/public/images/road.avif";
import Image from "next/image";
import { motion } from "motion/react";

const LOGO_ANIMATION_DURATION = 0.8;
const FORM_ANIMATION_DELAY = LOGO_ANIMATION_DURATION + 3.25;
const TYPING_ANIMATION_DELAY = (LOGO_ANIMATION_DURATION + 0.5) * 1000; // Convert to milliseconds

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center my-5 sm:my-[clamp(40px,7vh,90px)]">
        <motion.div
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: LOGO_ANIMATION_DURATION,
            ease: "easeOut",
          }}
        >
          <Image src={logo} alt="logo" priority fetchPriority="high" />
        </motion.div>

        <motion.h2
          className="text-xl font-bold text-white -mt-[20px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: LOGO_ANIMATION_DURATION,
            duration: 0.5,
            ease: "easeIn",
          }}
        >
          <TypingAnimation delay={TYPING_ANIMATION_DELAY}>
            خیابان های شهر منتظرتن!
          </TypingAnimation>
        </motion.h2>
      </div>

      {/* Form */}
      <motion.div
        className="bg-white rounded-t-4xl mt-auto w-full sm:w-lg relative overflow-hidden pb-[100px]"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 18,
          delay: FORM_ANIMATION_DELAY,
        }}
      >
        <div className="p-6 pt-6 relative z-10">
          <RequestForm />
        </div>
        <Image
          src={road}
          alt="road"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute -bottom-14  left-0"
          style={{ width: "100%", height: "auto" }}
        />
      </motion.div>
    </div>
  );
}
