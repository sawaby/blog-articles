"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
  setIsOpen:  React.MouseEventHandler<HTMLLIElement> | undefined
} 


export default function NavMenu({setIsOpen}: Props) {
  const menuItems = ["Python", "React", "NextJs"];
  const pathname = usePathname();
  return (
    <div className="items-center justify-between  w-full md:flex md:w-auto md:order-1">
      <ul className="flex flex-col p-10 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
        { menuItems.map( (items, index) => (
            <li key={index} onClick={setIsOpen} className="border-b border-zinc-800 w-48 text-center md:border-none md:w-full md:text-base">
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
        {/* <li onClick={setIsOpen}>
          <Link
            href="/posts"
            className={`block py-4 px-3 text-slate-300 md:p-0 ${
              pathname === "/posts" ? "active" : ""
            }`}
          >
            Python
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={`block py-4 px-3 text-slate-300 md:p-0 ${
              pathname === "/" ? "active" : ""
            }`}
          >
            React
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={`block py-4 px-3 text-slate-300 md:p-0 ${
              pathname === "/" ? "active" : ""
            }`}
          >
            NextJS
          </Link>
        </li> */}
      </ul>
    </div>
  );
}
