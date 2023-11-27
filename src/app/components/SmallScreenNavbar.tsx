import React from "react";
import SearchInput from "./SearchInput";
import NavMenu from "./NavMenu";

export default function SmallScreenNavbar() {
  return (
    <div className="h-screen absolute flex flex-col items-center top-16 w-full md:hidden bg-primary/95">
      <div className="flex">
       <SearchInput />
      </div>

      <div>
        <NavMenu />
      </div>
    </div>
  );
}
