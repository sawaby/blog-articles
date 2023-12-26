import React from "react";
import SearchInput from "./SearchInput";
import NavMenu from "./NavMenu";

// type Props = {
//   setIsOpen: React.MouseEventHandler<HTMLLIElement>
// }
export default function SmallScreenNavbar() {
  return (
    <div className="h-screen absolute flex flex-col items-center top-16 w-full md:hidden bg-primary/95 duration-500 transition-all">
      <div className="flex">
       <SearchInput />
      </div>

      <div>
        <NavMenu />
      </div>
    </div>
  );
}
