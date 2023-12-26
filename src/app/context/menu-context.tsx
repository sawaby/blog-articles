'use client';
import React, { createContext, useContext, useState } from "react";

type OpenMenuContextProviderProps = {
    children: React.ReactNode;
}

type MenuContext = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const OpenMenuContext = createContext<MenuContext | null >(null);

export default function OpenMenuContextProvider({ children }: OpenMenuContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OpenMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </OpenMenuContext.Provider>
  );
}

export function useOpenMenuContext(){
    const context = useContext(OpenMenuContext);
    if (!context){
        throw new Error(

            "useOpenMenuContext must be used within a OpenMenuContextProvider"
        );

    }
    return context;
}

