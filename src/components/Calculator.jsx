import ThemeProvider, { ThemeContext } from "../context/ThemeProvider";
import CalcHeader from "./CalcHeader";
import Display from "./Display";
import Keypad from "./Keypad";
import { useContext } from "react";

function Calculator() {
    const { currentTheme } = useContext(ThemeContext);
  return (
    <main className="App h-[100vh]" data-theme={`theme${currentTheme}`}>
      <div className="calc-btn bg-main h-full flex flex-col items-center justify-center">
        <div className="w-sm">
          <CalcHeader />
          <Display />
          <Keypad />
        </div>
      </div>
    </main>
  );
}

export default Calculator;
