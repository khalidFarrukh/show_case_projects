"use client"
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import useBodySize from "@/components/useBodySize";

export default function Home() {
  const { width } = useBodySize(); // custom Hook

  return (
    <div className="flex flex-col items-center bg-green-900 m-[0_auto]">
      <Navbar />
      <main className="w-[100%] flex flex-col items-center relative top-[70px]">
        <section className="banner_section relative bg-amber-300 ">
          <Image
            src="/banner_1_desktop.png"
            alt="banner image"
            width={1486}
            height={846}
            className={`
            ${width > 1520 ? "w-[1486px]"
                : width > 1320 ? "w-[1286px]"
                  : width > 1120 ? "w-[1086px]"
                    : width > 1020 ? "w-[1000px]"
                      : width > 100 ? "w-[100%]"
                        : ""
              }
            `}
            priority
          />
          <a className={`cursor-pointer absolute w-[16%] h-[5%] rounded-[10px] bg-[#38CB89] text-black text-[calc(50/14)px] flex items-center justify-center ${"top-[68%]"} ${"left-[12%]"} `}>
            Shop Now
          </a>
        </section>
        <section className="
         featured_section 
         relative 
         sg_15xx:w-[1486px] 
         sg_13xx:w-[1286px] 
         sg_11xx:w-[1086px] 
         sg_10xx:w-[1000px] 
         sg_1xx:w-[100%] 
         h-[647px] 
         bg-amber-950 
         flex 
         flex-col 
         items-center
         ">
          <h1 className="w-[77%] bg-amber-700 relative top-[48px]">Featured</h1>
          <div className="featured_products_container">
            {/*
           product scroll will come here
           */}
          </div>
        </section>
        <section className="
         featured_section 
         relative 
         sg_15xx:w-[1486px] 
         sg_13xx:w-[1286px] 
         sg_11xx:w-[1086px] 
         sg_10xx:w-[1000px] 
         sg_1xx:w-[100%]
         h-[1022px]
         bg-amber-500 
         flex 
         flex-col 
         items-center
         ">
          <h1 className="bg-amber-700 relative top-[48px]">Shop by Categories</h1>
          <div className="products_categories_container">
            {/*
           product category grid will come here
           */}
          </div>
        </section>


      </main>
    </div>
  );
}
