import Link from "next/link";
import NavMenu from "./NavMenu";
import Search from "./Search";


export default function Header() {
  return (
    <header className="sticky top-0  mb-10">
      <div className="bg-primary border-b border-b-secondary">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center">
                <span className="self-center text-2xl md:font-semibold text-white">Coding Goal</span>
            </Link>
            <NavMenu />
            <Search />
        </div>
      </div>
       
        
    </header>
    
  )
}
