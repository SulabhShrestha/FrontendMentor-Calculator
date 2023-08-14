
import Display from "./Display";
import Keypad from "./Keypad";

function Calculator() {
  

  return (
    <div className="calc-btn bg-main h-full flex flex-col items-center justify-center">
      <div className="w-sm">
        <Display />
        <Keypad />
      </div>
      
    </div>
  );
}

export default Calculator;
