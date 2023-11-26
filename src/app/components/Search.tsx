'use client'
import { useState } from "react";
import { TbSearch, TbMenu } from "react-icons/tb";
import SearchInput from "./SearchInput";
import NavMenu from "./NavMenu";
import SmallScreenNavbar from "./SmallScreenNavbar";

export default function Search() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen)
        console.log(isOpen)
    } 
  return (
   
        <>
        
        <div className="flex md:order-2">
            <button onClick={toggleMenu} type="button" className="md:hidden rounded-lg text-sm p-2.5 me-1">
                <TbSearch size={20} />
                <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
                {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <TbSearch size={20} />
                    <span className="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar" className="block w-[237px] p-2 ps-10 text-sm border border-zinc-800 rounded-lg bg-zinc-950" placeholder="Search..." /> */}
                <SearchInput />
            </div>
            <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm bg-transparent rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-search" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <TbMenu size={30} />
            </button>
        </div>
        {isOpen && 
            <SmallScreenNavbar />
        }
         {/* <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                </div>
                <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-700" placeholder="Search..." />
            </div>
        </div> */}
        </>

  )
}
