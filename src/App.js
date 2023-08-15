

import './App.css';
import Calculator from './components/Calculator';
import CalcValueProvider from './context/CalcValueProvider';
import ThemeProvider, { ThemeContext } from './context/ThemeProvider';

function App() {

  return (
    <ThemeProvider>
      <CalcValueProvider>
        <Calculator />
      </CalcValueProvider>
    </ThemeProvider>
  );
}

export default App;
