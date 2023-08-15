import { createContext, useState } from "react";

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(1);
  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
export { ThemeContext };