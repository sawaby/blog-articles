'use client';
import React, { createContext, useContext, useState } from "react";

type OpenMenuContextProviderProps = {
    children: React.ReactNode;
}

type MenuContext = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type TopContext = {
  topic: string,
  setTopic: React.Dispatch<React.SetStateAction<string>>;
}
// menu context
const OpenMenuContext = createContext<MenuContext | null >(null);

// topic context
const TopicContext = createContext<TopContext | null >(null);

// menu context provider
export default function OpenMenuContextProvider({ children }: OpenMenuContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OpenMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </OpenMenuContext.Provider>
  );
}
// menu context custom hook
export function useOpenMenuContext(){
    const context = useContext(OpenMenuContext);
    if (!context){
        throw new Error(

            "useOpenMenuContext must be used within a OpenMenuContextProvider"
        );

    }
    return context;
}


// topic context provider
export function TopicContextProvider({ children }: OpenMenuContextProviderProps) {
  const [topic, setTopic] = useState("");

  return (
    <TopicContext.Provider value={{ topic, setTopic }}>
      {children}
    </TopicContext.Provider>
  );
}

// menu context custom hook
export function useTopicContext(){
  const context = useContext(TopicContext);
  if (!context){
      throw new Error(

          "useTopicContext must be used within a TopicContextProvider"
      );

  }
  return context;
}
