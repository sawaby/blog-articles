
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
        <div className="sticky top-0 w-full z-10  backdrop-blur-sm backdrop-saturate-200 bg-primary/50 md:hidden">
          <div className="border-b border-b-secondary">
            <button onClick={toggleNavbar} className="md:hidden hover:text-gray-500 cursor-pointer p-3">
            <AiOutlineMenuUnfold size={40} />

            </button>
           
          </div>
          {isOpen &&
          <>
            {posts.map((post) => (
              <SideNav key={post.id} post={post} additionalStyle="w-full z-10 p-4 text-lg" />
            ))}
           </>
          }
        </div>

    </div>
  )
}
