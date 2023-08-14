

import './App.css';
import Calculator from './components/Calculator';
import ThemeProvider, { ThemeContext } from './context/ThemeProvider';

function App() {

  return (
    <ThemeProvider>
        <Calculator />
    </ThemeProvider>
  );
}

export default App;
