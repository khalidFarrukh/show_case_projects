"use client"
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { useAppContext } from "@/components/appContext";

export default function Home() {
  const { width } = useAppContext(); // custom Hook

  return (
    <div className={`
      flex 
      flex-col 
      items-center 
      bg-[green] 
      m-[0_auto]
      `}
    >
      <header className={`
      w-[100%] 
      z-[1] 
      bg-[white] 
      fixed 
      flex 
      justify-center
      `}
      >
        <Navbar />
      </header>
      <main className={`
        w-[100%] 
        flex 
        flex-col 
        items-center 
        relative 
        top-[70px]
        `}
      >
        <section className=
          {`
           
            relative 
            bg-amber-300
            `}
        >
          <Image
            src="/banner_1_desktop.png"
            alt="banner image"
            width={1486}
            height={846}
            className=
            {`
              max-w-[1400px]
              ${width >= 320 ? "w-[100%]"
                : ""
              }
            `}
            priority
          />
          <a className={`
            cursor-pointer 
            absolute 
            w-[16%] 
            h-[5%] 
            rounded-[10px] 
            bg-[#38CB89] 
            text-black 
            text-[calc(50/14)px] 
            flex 
            items-center 
            justify-center 
            ${"top-[68%]"} 
            ${"left-[12%]"}
            `}
          >
            Shop Now
          </a>
        </section>
        <section className={`
        ${width > 1520 ? "w-[1486px]"
            : width > 1320 ? "w-[1286px]"
              : width > 1120 ? "w-[1086px]"
                : width > 1020 ? "w-[1000px]"
                  : width > 100 ? "w-[100%]"
                    : ""
          }
        relative
        h-[647px] 
        bg-amber-950 
        flex 
        flex-col 
        items-center
        `}
        >
          <h1 className={`
            w-[77%] 
            relative 
            bg-amber-700 
            top-[48px]
            `}
          >Featured</h1>
          <div className={`
            
            `}>
            {/*
           product scroll will come here
           */}
          </div>
        </section>
        <section className={`
         ${width > 1520 ? "w-[1486px]"
            : width > 1320 ? "w-[1286px]"
              : width > 1120 ? "w-[1086px]"
                : width > 1020 ? "w-[1000px]"
                  : width > 100 ? "w-[100%]"
                    : ""
          }
         h-[1022px]
         bg-amber-500 
         relative 
         flex 
         flex-col 
         items-center
         `}
        >
          <h1 className={`
            bg-amber-700 
            relative 
            top-[48px]
            `}
          >Shop by Categories</h1>
          <div className={`
            
            `}>
            {/*
           product category grid will come here
           */}
          </div>
        </section>

      </main>
    </div>
  );
}
