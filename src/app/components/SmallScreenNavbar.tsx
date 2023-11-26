import React from "react";
import SearchInput from "./SearchInput";
import NavMenu from "./NavMenu";

export default function SmallScreenNavbar() {
  return (
    <div className="h-screen sticky flex justify-center top-16 w-full md:hidden bg-zinc-400 z-101">
      <div className="pt-11">
        <input type="text" className=" w-[237px] p-2 ps-10 text-sm border border-zinc-300 rounded-lg bg-zinc-200" />
      </div>

      <div>
        <NavMenu />
      </div>
    </div>
  );
}
