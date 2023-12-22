import React from "react";
import SearchInput from "./SearchInput";
import NavMenu from "./NavMenu";

type Props = {
  setIsOpen: React.MouseEventHandler<HTMLLIElement>
}
export default function SmallScreenNavbar({setIsOpen}: Props) {
  return (
    <div className="h-screen absolute flex flex-col items-center top-16 w-full md:hidden bg-primary/95 duration-500 transition-all">
      <div className="flex">
       <SearchInput setIsOpen={setIsOpen}/>
      </div>

      <div>
        <NavMenu setIsOpen={setIsOpen}/>
      </div>
    </div>
  );
}
