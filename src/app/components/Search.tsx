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
                <SearchInput  />
            </div>
            <button onClick={toggleMenu} type="button" className="md:hidden px-4 " >
                <span className="sr-only">Open main menu</span>
                <TbMenu size={30} />
            </button>
        </div>
        {isOpen && 
            
             <SmallScreenNavbar setIsOpen={toggleMenu} />
          
        }
        
        
        </>

  )
}
