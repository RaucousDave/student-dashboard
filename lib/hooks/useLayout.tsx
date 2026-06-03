"use client";

import { createContext, type ReactNode, useContext, useState } from "react";

type LayoutContextValue = {
  collapsed: boolean;
  toggleSidebar: () => void;
};

const LayoutContext = createContext<LayoutContextValue | null>(null);

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <LayoutContext.Provider value={{ collapsed, toggleSidebar }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }

  return context;
}
