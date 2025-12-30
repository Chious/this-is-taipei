import { createContext } from "react";

export const themeContext = createContext<{
  themeColor?: string;
  setThemeColor: (color: string) => void;
}>({ themeColor: "salmon", setThemeColor: () => {} });


