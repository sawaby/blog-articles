import React from 'react'
import { TbSearch, TbMenu } from "react-icons/tb";

export default function SearchInput() {
  return (
    <div>
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <TbSearch size={20} />
                    <span className="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar" className="block w-[237px] p-2 ps-10 text-sm border border-zinc-800 rounded-lg bg-zinc-950" placeholder="Search..." />
    </div>
  )
}
