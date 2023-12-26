'use client';

import React from 'react'
import { TbSearch, TbMenu } from "react-icons/tb";
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useOpenMenuContext } from "../context/menu-context";


export default function SearchInput() {
  const { isOpen, setIsOpen } = useOpenMenuContext();

  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function handleSearch(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const term = inputRef.current?.value;
    if(term) {
      router.push(`/tags/${term}`);
    } 
    
    setIsOpen(!isOpen);
    inputRef.current!.value = "";
  }
  return (
    <form onSubmit={handleSearch}>
        <div className="absolute top-[10px] md:inset-y-0 md:start-0 md:flex items-center ps-3 pointer-events-none">
            <TbSearch size={20} />
            <span className="sr-only">Search icon</span>
        </div>
        
        <input type="text" ref={inputRef}  className="block w-[237px] p-2 ps-10 text-sm border border-zinc-800 rounded-lg bg-zinc-950/80 focus:outline-zinc-600" placeholder="Search..." />
    </form>
  )
}
