import React from 'react'
import { TbSearch, TbMenu } from "react-icons/tb";
import TagPostList from '../tags/[tag]/page';


export default async function SearchInput() {
  
  function handleSearch(term: string ) {
    // <TagPostList tag={term}/>
  }
  return (
    <form>
        <div className="absolute top-[10px] md:inset-y-0 md:start-0 md:flex items-center ps-3 pointer-events-none">
            <TbSearch size={20} />
            <span className="sr-only">Search icon</span>
        </div>
        <input type="text" onChange={(e) => {handleSearch(e.target.value);}} className="block w-[237px] p-2 ps-10 text-sm border border-zinc-800 rounded-lg bg-zinc-950/80 focus:outline-zinc-600" placeholder="Search..." />
    </form>
  )
}
