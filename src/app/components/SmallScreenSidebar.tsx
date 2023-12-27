
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
    const id = document.getElementById("menu1");
    document.addEventListener("mousedown", (event) => {
      if(event.target instanceof Node){
        if(!id?.contains(event.target)){
          setIsOpen(false);
        }
      }
        
    })
    
    setIsOpen(!isOpen)
  }
   
  return (
    <div>
      {/* sticky top-0 */}
        <div id="menu1" className="flex flex-col text-slate-100 md:hidden">
          <div className={`${isOpen && "w-full backdrop-blur-sm backdrop-saturate-200 bg-primary/50"}`} >
            <button onClick={toggleNavbar} className="md:hidden hover:text-gray-500 cursor-pointer py-2 px-2">
            <AiOutlineMenuUnfold size={40} />
            
            </button>
           
          </div>
          {isOpen &&
          <div className="h-screen backdrop-blur-sm backdrop-saturate-200 bg-primary/50">
            {posts.map((post) => (
              <span key={post.id} onClick={toggleNavbar}>
                  <SideNav post={post} additionalStyle="p-4 text-lg" />
              </span>
              
            ))}
           </div>
          }
        </div>

    </div>
  )
}
