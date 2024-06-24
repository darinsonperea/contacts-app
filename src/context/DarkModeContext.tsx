import { createContext, useContext, useEffect, useState } from "react";
import { ThemeContextType } from "../utils/types";

const DarkModeContext = createContext<ThemeContextType | null>(null);

function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("isDarkMode");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      return;
    }

    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ toggleDarkMode, isDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (!context) throw new Error("The provider was used outside the children");

  return context;
}

export default DarkModeProvider;
