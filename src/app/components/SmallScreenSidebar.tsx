
'use client'
import { useEffect, useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import CallingPostsMeta from "./callingPostsMeta";


export default function SmallScreenSidebar() {

 
    const [isOpen, setIsOpen] = useState(false);

   
  return (
    <div>
        <div className="sticky top-0 w-full z-10  backdrop-blur-sm backdrop-saturate-200 bg-primary/50 md:hidden">
          <div className="border-b border-b-secondary">
            <button  className="md:hidden hover:text-gray-500 cursor-pointer p-3">
            <AiOutlineMenuUnfold size={40} />

            </button>
           
          </div>
          {isOpen &&
           <div> 
           
             </div>
           
        }
        </div>

    </div>
  )
}
