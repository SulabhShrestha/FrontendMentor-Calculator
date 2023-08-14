import CalcKey from "./CalcKey";

function Calculator() {
  const keys = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "*",
    "RESET",
    "=",
  ];

  const defaultBtnTheme =
    "calc-btn flex items-center justify-center border-b-[3px] border-key-shadow rounded-md  text-dark";

  return (
    <div className="bg-main text-white h-full text-2xl font-bold flex justify-center items-center">
      <div className="calculator max-w-sm grid grid-cols-4 grid-rows-4 gap-2 bg-keypad p-4 rounded-md">
        {keys.map((key) => (
          <CalcKey
            title={key}
            key={key}
            className={`
              ${defaultBtnTheme} 
              ${
                key.includes("DEL") || key.includes("RESET")
                  ? "bg-func-key-background text-white text-sm py-2 px-4"
                  : "bg-key"
              }
                    
              ${key.includes("RESET") || key.includes("=") ? "col-span-2" : ""}

              ${key.includes("=") ? "bg-equal-key-background text-white" : ""}
            `}
          />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
