import Link from "next/link";
import NavMenu from "./components/NavMenu";
import Search from "./components/Search";



export default function Header() {
  return (
    <header className="bg-primary border-b border-b-secondary mb-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center">
                <span className="self-center text-2xl font-semibold text-white">Coding Goal</span>
            </Link>
            <NavMenu />
            <Search />
        </div>
    </header>
    
  )
}
