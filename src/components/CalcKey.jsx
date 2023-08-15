import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { CalcValueContext } from "../context/CalcValueProvider";

function CalcKey({title, className}) {
  const { currentTheme } = useContext(ThemeContext);
  const {dispatch: calcKeyDispatch} = useContext(CalcValueContext);

  let textColor =
    currentTheme == 1 || currentTheme == 2 ? "text-dark" : "text-light-yellow";

    // for reset and del btn
  textColor = title.includes("RESET") || title.includes("DEL") || title.includes("=") ? "text-white" : textColor;

  // specific for equal button when
  textColor =
    title.includes("=") && currentTheme == 3 ? "text-dark" : textColor;


  function handleClick(){
    if(title.includes("DEL")){
      calcKeyDispatch({type: "del"});
    }else if(title.includes("=")){
      calcKeyDispatch({type: "equal"});
    }else{
      calcKeyDispatch({type: "num", payload: title});
    }
  }


  return (
    <div className={className} onClick={ handleClick}>
      <p className={`${textColor}`}>{title}</p>
    </div>
  );
}

export default CalcKey;