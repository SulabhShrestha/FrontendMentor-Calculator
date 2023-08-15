import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { CalcValueContext } from "../context/CalcValueProvider";

function Display() {
  const { currentTheme } = useContext(ThemeContext);
  const {calcValue} = useContext(CalcValueContext);

  const textColor =
    currentTheme == 1
      ? "text-white"
      : currentTheme == 2
      ? "text-dark"
      : "text-light-yellow";

    return (
      <div className="display bg-screen rounded-md my-4 text-3xl font-bold flex items-center justify-end px-2 overflow-x-scroll h-16">
        <p className={textColor}>{calcValue}</p>
      </div>
    );
}

export default Display;