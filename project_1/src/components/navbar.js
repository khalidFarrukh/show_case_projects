"use client"
import Image from "next/image";
import { useAppContext } from "./appContext";

export default function Navbar() {

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
  const NavBarContent = ({ children }) =>

    <nav className=
      {`
        max-w-[1200px]
        w-[96%]
        h-[60px]
        bg-[var(--background)]
        z-[2]
        relative
        flex
        items-center
      `}
    >
      {children}
    </nav>
  if (width === undefined) return (
    <NavBarContent></NavBarContent>
  );

  const menuToggle = () => {
    setIsMenuOpen(prev => !prev)
  }
  const searchToggle = () => {
    setIsSearchOpen(prev => !prev)
  }

  const HomeLink = ({ className }) => <a className={className}>Home</a>;
  const ShopLink = ({ className }) => <a className={className}>Shop</a>
  const ProductsLink = ({ className }) => <a className={className}>Products</a>
  const ContactUsLink = ({ className }) => <a className={className}>Contact Us</a>


  return (
    <>
      <NavBarContent>
        <a className=
          {`
            cursor-pointer 
            mx-[0_auto] 
            flex 
            relative 
          `}
        >
          <Image
            src="/logo.svg"
            alt="logo image"
            width={218}
            height={56}
            className=
            {`
              ${!isTab ?
                `
                w-[109px] 
                h-[28px] 
                `
                :
                `
                w-[105px] 
                h-[24px] 
                `
              }
              
              dark:invert
            `}
            priority
          />
        </a>

        {
          (width >= 860) &&
          <div
            className=
            {`
            z-[1]
            w-[60%] 
            h-[30px] 
            bg-[var(--background)]
            text-[var(--foreground)]
            relative 
            mx-auto 
            rounded-[50px]
            border-[2px]
            flex 
            flex-row 
            items-center 
            
          `}
          >
            <input className={`
              w-[93%]
              mr-[1%]
              bg-[red]
              outline-0 
              px-[15px_0]
              `}
            />
            <Image
              src="/search_icon.svg"
              alt="search icon"
              width={48}
              height={48}
              className=
              {`
                absolute
                right-[6px]
                w-[24px]
                h-[24px]
                dark:invert
              `}
              priority
            />
          </div>
        }

        <div className={`
            h-[28px] 
            mx-[auto_0] 
            flex 
  
            `}
        >
          {
            (width < 860) &&
            <button
              ref={searchBtnRef}
              className={`
                  cursor-pointer 
                  m-[0_10px]
                  `}
              onClick={searchToggle}
            >
              <Image
                src="/search_icon.svg"
                alt="search button"
                width={48}
                height={48}
                className=
                {`
                    w-[24px]
                    h-[24px]
                    dark:invert
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
              src="/account_icon.svg"
              alt="account button"
              width={48}
              height={48}
              className=
              {`
                    w-[24px]
                    h-[24px]
                    dark:invert
                  `}
              priority
            />
          </button>
          <button className={`
              cursor-pointer 
              m-[0_0_0_10px]
              `}
          >
            <Image
              src="/cart_icon.svg"
              alt="cart button"
              width={48}
              height={48}
              className=
              {`
                w-[24px]
                h-[24px]
                dark:invert
                inline
              `}
              priority
            />
            <span className=
              {`
                bg-[var(--foreground)]
                text-[var(--background)]
                text-xs 
                font-extrabold
                ml-[-2px] 
                px-1
                py-0.5 
                min-w-[20px] 
                inline-flex 
                items-center 
                justify-center 
                rounded-full
              `}
            >
              {
                2
              }
            </span>
          </button>
        </div>
      </NavBarContent>
      {
        isTab &&
        <>
          <div

            className={` 
            fixed 
            text-2xl 
            transition-all 
            duration-250 
            ease-in-out
            ${isMenuOpen ? "top-[80px]" : "top-[-185px]"}
  
            `}
          >
            <div
              ref={menuRef}
              className={`
              w-[88vw] 
              relative 
              
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
            </div>
          </div>
        </>
      }{
        isTab &&
        <div
          className=
          {`
            max-w-[1200px]
            ${width >= 320 ? "w-[96%] mx-[2%]"
              : ""
            }
            z-[1]
            fixed 
            flex 
            flex-col 
            transition-all 
            duration-250 
            ease-in-out
            ${isSearchOpen ? "top-[80px]" : "top-[-10px]"}
          `}
        >
          <div
            ref={searchRef}
            className=
            {`
              
              w-[80%] 
              h-[35px] 
              bg-[var(--background)]
              text-[var(--foreground)]
              relative 
              mx-auto 
              rounded-[50px]
              border-[2px]
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
              className=
              {`
                w-[35px]
                h-[100%]
                pr-[15px]
                dark:invert
              `}
              priority
            />
          </div>

        </div>
      }
    </>
  );
}