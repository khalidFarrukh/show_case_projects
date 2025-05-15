"use client"
import Image from "next/image";
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useAppContext } from "./appContext";

export default function ProductCard({ rating }) {

  const {
    width,
    isTab,
    isMenuOpen,
    setIsMenuOpen,
    isSearchOpen,
    setIsSearchOpen,
    menuBtnRef,
    menuRef,
    searchBtnRef,
    searchRef

  } = useAppContext();


  return (
    <div
      className=
      {`
        relative
        w-[285px]
        h-[100%]
        mx-[0_2%]
        inline-flex
        justify-center
      `}
    >
      <a
        href="https://www.youtube.com"
        target="_blank"
        className=
        {`
          z-[2]
          absolute
          w-[85%]
          h-[10%]
          top-[63%]
          bg-[black]
          rounded-[20px]
          flex
          items-center
          justify-center
          
        `}
      >
        Add to Cart
      </a>
      <a
        href="http://localhost:3000/"
        target="_blank"
        className=
        {`
          absolute
          z-[1]
          w-[100%]
          h-[100%]
        `}
      >
        <article
          aria-label="Product: item_1"
          className=
          {`
            w-[100%]
            h-[100%]
            bg-[-red]
            flex
            flex-col
          `}
        >

          <text
            className=
            {
              `
              z-[2]
              relative
              h-[0]
              top-[16px]
              left-[16px]
              text-black
              font-inter font-bold text-[16px]
              `
            }
          >
            {
              `
              HOT
              `
            }
          </text>
          <div
            className=
            {`
              z-[1]
              relative
              w-[100%]
              bg-[white]
              overflow-hidden
              my-auto
            `}
          >
            <Image
              src="/item_1.png"
              alt="article 1"
              width={262}
              height={349}
              className=
              {`
                z-[1]
                relative
                w-[100%]
                transition-all 
                duration-250 
                ease-in-out
                scale-[1]
                hover:scale-[1.1]
                my-auto
              `}
            />
          </div>


          <div
            aria-label={`Rating: ${rating} out of 5`}
            className=
            {
              `
              z-[1]
              relative
              flex
              my-auto
              `
            }
          >
            {
              // [1, 2, 3, 4, 5].map((value) => {
              //   let source = "";
              //   if (value <= rating) {
              //     source = "/star_filled.png";
              //   }
              //   else {
              //     source = "/star_disabled.png";
              //   }
              //   return (
              //     <Image
              //       key={value}
              //       src={source}
              //       alt="rating star"
              //       width={16}
              //       height={16}
              //       className=
              //       {`
              //         relative
              //         inline
              //         dark:invert
              //       `}
              //     />
              //   )
              // })
              [1, 2, 3, 4, 5].map((value) => (
                value <= rating ? (
                  <FaStar key={value} className="text-[var(--foreground)] w-4 h-4" />
                ) : (
                  <FaRegStar key={value} className="text-[var(--foreground)] w-4 h-4" />
                )
              ))

            }
          </div>
          <text
            className=
            {
              `
              relative
              bg-[-blue]
              whitespace-normal
              break-words
              font-inter font-semibold text-[16px]
              my-auto
              `
            }
          >
            {
              "Shark - Men's cabretta white golf glove"
            }
          </text>
          <text
            className=
            {
              `
              relative
              bg-[-green]
              font-inter font-semibold text-[14px]
              my-auto
              `
            }
          >
            {
              "$19.00"
            }
          </text>
        </article>
      </a>
    </div>
  );
}