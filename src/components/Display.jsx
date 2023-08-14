import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

function Display() {
  const { currentTheme } = useContext(ThemeContext);

  const textColor =
    currentTheme == 1
      ? "text-white"
      : currentTheme == 2
      ? "text-dark"
      : "text-light-yellow";

    return (
      <div className="display bg-screen rounded-md my-4 text-3xl font-bold py-3 px-2">
        <p className={`text-right ${textColor}`}>231,000</p>
      </div>
    );
}

export default Display;