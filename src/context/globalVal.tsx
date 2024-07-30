// GlobalValContextProvider.tsx
import React, { createContext, ReactNode, FC } from "react";
import UI from "@/constants/ui";
import { GlobalValContextType } from "./types";

export const globalValContext = createContext<GlobalValContextType | undefined>(undefined);

interface GlobalValContextProviderProps {
  children: ReactNode;
}

const GlobalValContextProvider: FC<GlobalValContextProviderProps> = ({ children }) => {
  return (
    <globalValContext.Provider value={{ UI }}>
      {children}
    </globalValContext.Provider>
  );
};

export default GlobalValContextProvider;