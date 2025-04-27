"use client"
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useAppContext } from "./appContext";

export default function Navbar() {

  const {
    width,
    isMenuOpen,
    setIsMenuOpen,
    isSearchOpen,
    setIsSearchOpen } = useAppContext();
  const NavContainer = ({ children }) =>
    <div name="navbar_container" className={`
      w-[100%] 
      z-10 
      bg-[white] 
      fixed 
      flex 
      justify-center
      `}
    >
      <div className={`
        ${width > 1520 ? "w-[1486px]"
          : width > 1320 ? "w-[1286px]"
            : width > 1120 ? "w-[1086px]"
              : width > 1020 ? "w-[1000px]"
                : width > 100 ? "w-[100%]"
                  : ""
        }

        bg-[red]
        z-11
        relative
        flex
        h-[70px]
        items-center
        `}
      >
        {children}
      </div>
    </div >

  if (width === undefined) return (
    <NavContainer></NavContainer>
  );

  const isTab = width > 0 && width < 1005;

  const menuToggle = () => {
    setIsSearchOpen(false)
    setIsMenuOpen(prev => !prev)
  }
  const searchToggle = () => {
    setIsMenuOpen(false)
    setIsSearchOpen(prev => !prev)
  }

  const HomeLink = ({ className }) => <a className={className}>Home</a>;
  const ShopLink = ({ className }) => <a className={className}>Shop</a>
  const ProductsLink = ({ className }) => <a className={className}>Products</a>
  const ContactUsLink = ({ className }) => <a className={className}>Contact Us</a>


  return (
    <>
      <NavContainer>
        {/* menu button */}
        {
          isTab &&
          <button
            className={`
                cursor-pointer 
                m-[0_3%_0_6%] 
                flex 
                relative 
                bg-blue-500
                `}
            onClick={menuToggle}
          >
            <Image
              src="/menu_icon.svg"
              alt="Menu icon image"
              width={200}
              height={80}
              className={`
                  w-[100%] 
                  h-[30px] 
                  min-w-[35px] 
                  p-[0_5px] 
                  bg-amber-300
                  `}
              id="menuBtn"

              priority
            />
          </button>
        }

        <a className={`
            cursor-pointer 
            ml-[5px] 
            mx-auto 
            flex 
            relative 
            bg-[blue]
            `}>
          <Image
            src="/logo.svg"
            alt="logo image"
            width={200}
            height={80}
            className={`
                w-[135px] 
                h-[35px] 
                min-w-[100px]
                `}
            priority
          />
        </a>
        {
          !isTab &&
          <div className={`
            w-[440px]
            h-[35px]
            mx-auto
            text-[20px]
            flex
            bg-[blue]
            `}>
            <HomeLink className={`
                cursor-pointer
                m-[0_auto]
                `} />
            <ShopLink className={`
                cursor-pointer
                m-[0_auto]
                `} />
            <ProductsLink className={`
                cursor-pointer
                m-[0_auto]
                `} />
            <ContactUsLink className={`
                cursor-pointer
                m-[0_auto]
                `} />
          </div>
        }


        <div className={`
            h-[35px] 
            relative 
            mx-auto 
            flex 
            bg-[blue] 
            ${isTab ? "mr-[6%]" : "mr-[5px]"}
            `}
        >
          <button
            className={`
              cursor-pointer 
              m-[0_10px]
              `}
            onClick={searchToggle}
          >
            <Image
              src="/search_icon.svg"
              alt="search button"
              width={200}
              height={80}
              className={`
                w-[35px]
                h-[100%]
                `}
              priority
            />
          </button>
          {
            (width > 452) &&
            <button className={`
              cursor-pointer 
              m-[0_10px]
              `}
            >
              <Image
                src="/account_icon.svg"
                alt="account button"
                width={200}
                height={80}
                className={`
                  w-[35px]
                  h-[100%]
                  `}
                priority
              />
            </button>
          }
          <button className={`
              cursor-pointer 
              m-[0_10px]
              `}
          >
            <Image
              src="/cart_icon.svg"
              alt="cart button"
              width={200}
              height={80}
              className={`
                  w-[35px]
                  h-[100%]
                  inline
                  `}
              priority
            />
            <span className={`
              bg-[red] 
              text-white 
              text-xs 
              ml-[-5px] 
              px-2 
              h-5 
              min-w-[20px] 
              inline-flex 
              items-center 
              justify-center 
              rounded-full
              `}
            >
              1
            </span>
          </button>
        </div>
      </NavContainer>
      {
        isTab &&
        <>
          <div className={`
            w-[100%] 
            z-2 
            fixed 
            flex 
            flex-col 
            text-2xl 
            transition-all 
            duration-250 
            ease-in-out
            ${isMenuOpen ? "top-[80px]" : "top-[-185px]"}
            `}
          >
            <div className={`
              relative 
              w-[88%] 
              bg-amber-300 
              mx-auto
              `}
            >
              <HomeLink className={`
                h-[50px] 
                pl-[10px] 
                flex 
                items-center 
                cursor-pointer 
                bg-amber-600 
                hover:bg-amber-300
                `}
              />
              <hr />
              <ShopLink className={`
                h-[50px] 
                pl-[10px] 
                flex 
                items-center 
                cursor-pointer 
                bg-amber-600 
                hover:bg-amber-300
                `}
              />
              <hr />
              <ProductsLink className={`
                h-[50px] 
                pl-[10px] 
                flex 
                items-center 
                cursor-pointer 
                bg-amber-600 
                hover:bg-amber-300
                `}
              />
              <hr />
              <ContactUsLink className={`
                h-[50px] 
                pl-[10px] 
                flex 
                items-center 
                cursor-pointer 
                bg-amber-600 
                hover:bg-amber-300
                `}
              />
              {
                (width > 0 && width < 452) &&
                <>
                  <hr />
                  <a className={`
                    h-[50px] 
                    pl-[10px] 
                    flex 
                    items-center 
                    cursor-pointer 
                    bg-amber-600 
                    hover:bg-amber-300
                  `}
                  >Profile</a>
                </>
              }
            </div>
          </div>
          {
            isMenuOpen &&
            <div
              className={`
              w-[100vw] 
              h-[100vh] 
              z-[1] 
              fixed
              `}
              onClick={menuToggle}
            >
            </div>
          }
        </>
      }{
        isTab &&

        <div className={`
          w-[100%] 
          z-2 
          fixed 
          flex 
          flex-col 
          transition-all 
          duration-250 
          ease-in-out
          ${isSearchOpen ? "top-[80px]" : "top-[-10px]"}
          `}
        >
          <div className={`
            relative 
            w-[80%] 
            h-[35px] 
            bg-amber-400 
            mx-auto 
            rounded-[50px] 
            flex 
            flex-row 
            items-center 
            justify-center
            `}
          >
            <input className={`
              w-[100%] 
              outline-0 
              px-[17px]
              `}
            />
            <Image
              src="/search_icon.svg"
              alt="search button"
              width={200}
              height={80}
              className={`
                w-[35px]
                h-[100%]
                pr-[15px]
                `}
              priority
            />
          </div>

        </div>
      }
    </>
  );
}