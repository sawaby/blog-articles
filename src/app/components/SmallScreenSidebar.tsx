
'use client'
import { useEffect, useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import SideNav from "./SideNav";

type Props = {
  posts: Meta[],
}


export default function SmallScreenSidebar({posts}: Props) {

  if (!posts) {return <p>post not Available</p>}

  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    setIsOpen(!isOpen)
  }
   
  return (
    <div>
        <div className="sticky top-0 w-full z-1  backdrop-blur-sm backdrop-saturate-200 bg-primary text-slate-100 md:hidden">
          <div className={`${!isOpen && "border-b border-b-secondary"}`} >
            <button onClick={toggleNavbar} className="md:hidden hover:text-gray-500 cursor-pointer py-2 px-2">
            <AiOutlineMenuUnfold size={40} />
            
            </button>
           
          </div>
          {isOpen &&
          <div className="h-screen">
            {posts.map((post) => (
              <span key={post.id} onClick={toggleNavbar}>
                  <SideNav post={post} additionalStyle="z-1 p-4 text-lg" />
              </span>
              
            ))}
           </div>
          }
        </div>

    </div>
  )
}
