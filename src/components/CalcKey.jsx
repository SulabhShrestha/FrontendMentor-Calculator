import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

function CalcKey({title, className}) {
  const { currentTheme } = useContext(ThemeContext);

  let textColor =
    currentTheme == 1 || currentTheme == 2 ? "text-dark" : "text-light-yellow";

    // for reset and del btn
  textColor = title.includes("RESET") || title.includes("DEL") || title.includes("=") ? "text-white" : textColor;

  // specific for equal button when
  textColor =
    title.includes("=") && currentTheme == 3 ? "text-dark" : textColor;

  return (
    <div className={className}>
      <p className={`${textColor}`}>{title}</p>
    </div>
  );
}

export default CalcKey;