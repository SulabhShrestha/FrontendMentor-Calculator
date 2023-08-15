import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

function CalcHeader() {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

  const textColor =
    currentTheme == 1
      ? "text-white"
      : currentTheme == 2
      ? "text-dark"
      : "text-light-yellow";
  return (
    <div className={`header flex justify-between items-center ${textColor}`}>
      <h1 className="font-semibold text-inherit">Calculator</h1>

      <div className="theme-changer relative flex items-center gap-2">
        <label htmlFor="theme" className="text-xs ">
          THEME
        </label>
        <input
          type="range"
          id="theme"
          name="theme"
          list="markers"
          min={1}
          max={3}
          className="appearance-none h-5 w-12 bg-screen rounded-full outline-none py-2 cursor-pointer"
          value={currentTheme}
          onChange={(e) => setCurrentTheme(e.target.value)}
        />

        <datalist
          id="markers"
          className="w-12 flex justify-between absolute right-0 -top-4 text-xs"
        >
          <option value="1" label="1"></option>
          <option value="2" label="2"></option>
          <option value="3" label="3"></option>
        </datalist>
      </div>
    </div>
  );
}

export default CalcHeader;
