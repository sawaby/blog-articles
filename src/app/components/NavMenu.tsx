"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useOpenMenuContext, useTopicContext } from "../context/menu-context";

export default function NavMenu() {
  const { isOpen, setIsOpen } = useOpenMenuContext();
  //topic context is used to specify which topic are we viewing
  const { topic, setTopic } = useTopicContext();
  const menuItems = ["Python", "React", "NextJs"];
  const pathname = usePathname();

  function clickHandler(e:React.MouseEvent<HTMLLIElement>){
    setIsOpen(!isOpen);
    setTopic((e.target as HTMLLIElement).innerHTML); 
  }
  return (
    <div className="items-center justify-between  w-full md:flex md:w-auto md:order-1">
      <ul className="flex flex-col p-10 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
        { menuItems.map( (items, index) => (
            <li key={index} value={items} onClick={clickHandler} className="border-b border-zinc-800 w-48 text-center md:border-none md:w-full md:text-base">
              <Link
                href="/posts"
                className={`block py-4 px-3 text-slate-300 md:p-0 ${
                  pathname === "/posts" ? "active" : ""
                }`}
                
              >
                {items}
              </Link>
            </li>
        ))
        
        }
       
      </ul>
    </div>
  );
}
