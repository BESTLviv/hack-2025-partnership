"use client";
import { press_start } from "@/app/fonts";
import Image from "next/image";

import useSmoothScrollTo from "@/hooks/useSmoothScrollTo";

export default function Hero() {
  const handleScrollClick = useSmoothScrollTo();

  return (
      <section className="min-h-screen relative w-full flex flex-col pt-32 bg-black" id="top">
        {/* Text Section */}
        <div className="flex flex-col xl:flex-row items-start justify-start w-full px-20 py-10 lg:py-20 lg:px-40 text-start">
          <div className="flex flex-col gap-4 xl:gap-6 text-start">
            <h1
                className={`${press_start.className} text-hack-green text-xl lg:text-5xl`}
            >
              BEST::HACKathOn
            </h1>
            <p className={`${press_start.className} text-hack-green text-sm lg:text-lg`}>
              26-27 квітня
            </p>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex justify-center xl:justify-end mt-8 pr-20 lg:pr-40">
          <button
              onClick={() => handleScrollClick("#offers")}
              className={`${press_start.className} bg-green-500 text-black px-4 lg:px-6 py-2 lg:py-3 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
              style={{
                background: "linear-gradient(180deg, #28a745, #1c7c32)",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              }}
          >
            Стати партнером
          </button>
        </div>

        {/* Mascot and Stripe Section */}
        <div className="relative w-full mt-auto">
          {/* Slanted Stripe */}
          <div className="absolute bottom-0 left-0 w-full">
            <Image
                src="/strip_hero.svg"
                alt="Stripe Image"
                width={1300}
                height={200}
                objectFit="cover"
                priority={true}
            />
          </div>

          {/* Purple Glow */}
          <div
              className="absolute bottom-[4rem] left-1/2 transform -translate-x-1/2"
              style={{
                width: "700px",
                height: "700px",
                background: "radial-gradient(circle, rgba(75, 0, 130, 0.9) 0%, rgba(50, 0, 70, 0) 70%)",
                borderRadius: "50%",
                zIndex: "1",
              }}
          ></div>

          {/* Mascot */}
          <div className="absolute bottom-[8rem] left-1/2 transform -translate-x-1/2 z-10">
            <Image
                src="/maskot.svg"
                alt="Mascot"
                width={750}
                height={750}
                className="object-contain"
            />
          </div>
        </div>
      </section>
  );
}
