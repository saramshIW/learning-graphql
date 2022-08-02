import React, { ReactNode } from "react";

type GlobalContextType = {
  userInput: string;
  setUserInput: (a: string) => any | void;
};
export const GlobalContext = React.createContext<GlobalContextType | null>(
  null
);

const GlobalContextWrapper = ({ children }: { children?: ReactNode }) => {
  const [userInput, setUserInput] = React.useState<string>("");

  return (
    <GlobalContext.Provider value={{ userInput, setUserInput }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextWrapper;
