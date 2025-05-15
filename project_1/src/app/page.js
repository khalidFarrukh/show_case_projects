"use client"
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import { useAppContext } from "@/components/appContext";
import ProductCard from "@/components/productCard";

export default function Home() {
  const {
    width,
    isTab
  } = useAppContext(); // custom Hook
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
      z-[100] 
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
        `}
      >
        <div
          className=
          {`
            w-[100%]
            h-[60px]
          `}
        ></div>
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
            font-inter font-medium text-[18px]
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
            
            bg-amber-950 
            flex 
            flex-col 
            items-center
            
          `}
        >
          <text className=
            {`
              ${!isTab ? "my-[50px_50px]" : "my-[25px_25px]"}
              
              max-w-[1200px]
              w-[96%]
              
              -bg-amber-700
              text-[var(--foreground)] 
              font-poppins
              font-medium
              ${!isTab ? "text-[40px]" : "text-[32px]"}
            `}
          >Featured</text>

          {/* product container */}
          <div
            className=
            {` 
              relative
              max-w-[1200px]
              w-[96%]
              ${!isTab ?
                `
                my-[0_50px]
                h-[495px]
                ` :
                `
                my-[0_25px]
                h-[460px]
                `
              }
              
              bg-[-blue]
              overflow-x-auto
              overflow-y-hidden
              whitespace-nowrap
              scrollbar-hide
              
            `}
          >
            <ProductCard rating={3}/>
          </div>
        </section>
        <section className=
          {`
            max-w-[1520px]
            w-[100%]
            h-[1022px]
            bg-amber-500 
            relative 
            flex 
            flex-col 
            items-center
         `}
        >
          <text className=
            {`
              my-[4%_4%]
              max-w-[1200px]
              w-[96%] mx-[2%]
              relative 
              bg-amber-700 
              text-center
              
              font-medium
              ${!isTab ? "text-[40px]" : "text-[32px]"}
              
            `}
          >Shop by Categories</text>
          <div className=
            {`
              max-w-[1200px]
              w-[96%] mx-[2%]
              h-[800px]
              bg-[blue]
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
