import Link from "next/link";
import NavMenu from "./NavMenu";
import Search from "./Search";


export default function Header() {
  return (
    <header className="sticky top-0 z-10 md:mb-10">
      <div className="bg-primary/50 backdrop-blur-sm backdrop-saturate-200 border-b border-b-secondary">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-4 md:px-0">
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
