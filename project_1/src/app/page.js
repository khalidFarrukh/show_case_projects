"use client"
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { useAppContext } from "@/components/appContext";

export default function Home() {
  const { width } = useAppContext(); // custom Hook
  const bannerImageSrc = width > 480 ? "/banner_1_desktop.png" : "/banner_1_mobile.png";
  const bannerBtnLeftPos = width > 480 ? "12%" : Math.floor((width - 255) / 2).toString() + "px";
  console.log(bannerBtnLeftPos)

  return (
    <div className={`
      flex 
      flex-col 
      items-center 
      m-[0_auto]
      `}
    >
      <header className={`
      w-[100%] 
      bg-[var(--background)]
      z-[1] 
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
            max-w-[1520px]
            w-[100%]
            relative
            bg-amber-300
          `}
        >
          <Image
            src={bannerImageSrc}
            alt="banner image"
            width={1486}
            height={846}
            className=
            {`
              w-[100%]
            `}
            priority
          />
          <a className={`
            cursor-pointer 
            absolute 
            w-[255px] 
            h-[45px] 
            rounded-[10px] 
            bg-[#38CB89] 
            text-black 
            text-[calc(50/14)px] 
            flex 
            items-center 
            justify-center 
            ${width > 480 ? "top-[68%]" : "top-[88%]"} 
            `}
            style={{ left: bannerBtnLeftPos }}
          >
            Shop Now
          </a>
        </section>
        <section className=
          {`
            max-w-[1520px]
            w-[100%]
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
        <section className=
          {`
            max-w-[1520px]
            ${width >= 320 ? "w-[100%]"
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
