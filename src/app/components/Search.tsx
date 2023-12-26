'use client';
import { TbSearch, TbMenu } from "react-icons/tb";
import SearchInput from "./SearchInput";
import SmallScreenNavbar from "./SmallScreenNavbar";
import { useOpenMenuContext } from "../context/menu-context";

export default function Search() {
    
    const { isOpen, setIsOpen } = useOpenMenuContext();

    function toggleMenu() {
        setIsOpen(!isOpen);
    } 
  return (
   
        <>
        
        <div className="flex md:order-2">
            <button onClick={toggleMenu} id="search" type="button" className="md:hidden rounded-lg text-sm p-2.5 me-1">
                <TbSearch size={20} />
                <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
                <SearchInput  />
            </div>
            <button onClick={toggleMenu} id="menu" type="button" className="md:hidden px-4 " >
                <span className="sr-only">Open main menu</span>
                <TbMenu size={30} />
            </button>
        </div>
        {isOpen && 
            
             <SmallScreenNavbar />
          
        }
        
        
        </>

  )
}
