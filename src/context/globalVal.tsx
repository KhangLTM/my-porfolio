// GlobalValContextProvider.tsx
import { createContext, ReactNode, FC } from "react";
import UI from "@/constants/ui";
import { GlobalValContextType } from "@/types/ui";

export const globalValContext = createContext<GlobalValContextType>({ UI });

interface GlobalValContextProviderProps {
  children: ReactNode;
}

const GlobalValContextProvider: FC<GlobalValContextProviderProps> = ({
  children,
}) => {
  return (
    <globalValContext.Provider value={{ UI }}>
      {children}
    </globalValContext.Provider>
  );
};

export default GlobalValContextProvider;
