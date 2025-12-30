import { useState } from "react";
import { themeContext } from "../contexts/themeContext";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeColor, setThemeColor] = useState("salmon");

  return (
    <themeContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
