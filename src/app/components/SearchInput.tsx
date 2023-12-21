import React from 'react'
import { TbSearch, TbMenu } from "react-icons/tb";
import TagPostList from '../tags/[tag]/page';
import { useRef } from 'react';

export default function SearchInput() {
  const inputRef = useRef("");

  function handleSearch(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    
    console.log(inputRef.current.value);
    // <TagPostList tag={term}/>
  }
  return (
    <form onSubmit={handleSearch}>
        <div className="absolute top-[10px] md:inset-y-0 md:start-0 md:flex items-center ps-3 pointer-events-none">
            <TbSearch size={20} />
            <span className="sr-only">Search icon</span>
        </div>
        {/* onChange={(e) => {handleSearch(e.target.value);}} */}
        <input type="text" ref={inputRef} className="block w-[237px] p-2 ps-10 text-sm border border-zinc-800 rounded-lg bg-zinc-950/80 focus:outline-zinc-600" placeholder="Search..." />
    </form>
  )
}
