import { createContext, useReducer } from "react";

const CalcValueContext = createContext(null);

function CalcValueProvider({ children }) {
  const [calcValue, dispatch] = useReducer(calcAction, "");
  return (
    <CalcValueContext.Provider value={{ calcValue, dispatch }}>
      {children}
    </CalcValueContext.Provider>
  );
}

function calcAction(state, action) {
  switch (action.type) {
    case "num":
      return state + action.payload;

    case "equal":
      const result = handleEqual(state);
      if (isNaN(result)) return state;
      return result;

    case "del":
        return state.slice(0, -1);

    default:
      return state;
  }
}
function handleEqual(data) {
    try{
// extracting the numbers and the operator
  const operator = data.match(/[+*-/]/g)[0];
  const numbers = data.match(/\d+/g).map(Number);

  // calculating the result
  let result = eval(`${numbers[0]} ${operator} ${numbers[1]}`);
  return result;
    }
    catch{
        return data;
    }
  
}

export default CalcValueProvider;
export { CalcValueContext };
