"use client";

import { createContext, useContext, useState, PropsWithChildren } from "react";

type SidebarState = {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): void;
};

const SidebarContext = createContext<SidebarState | null>(null);

const useSidebar = (): SidebarState => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("Please use SidebarProvider in parent component");
  }

  return context;
};

export const SidebarProvider = (props: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {props.children}
    </SidebarContext.Provider>
  );
};

export default useSidebar;
