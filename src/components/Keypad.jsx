import CalcKey from "./CalcKey";


function Keypad() {
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
    "border-b-[3px] border-key-shadow rounded-md cursor-pointer";
  return (
    <div className="calculator grid grid-cols-4 grid-rows-4 gap-2 bg-keypad p-4 rounded-md text-2xl font-bold ">
      {keys.map((key) => (
        <CalcKey
          title={key}
          key={key}
          className={`
              ${defaultBtnTheme}                    
              ${key.includes("RESET") || key.includes("=") ? "col-span-2" : ""}
              ${
                key.includes("=")
                  ? "bg-equal-key-background"
                  : key.includes("DEL") || key.includes("RESET")
                  ? "bg-func-key-background text-sm py-2 px-4"
                  : "bg-key "
              }
              
            `}
        />
      ))}
    </div>
  );
}

export default Keypad;
