import { Children, createContext, useState, useContext } from 'react'
import CounterWithCustomHook from './components/CounterWithCustomHook/CounterWithCustomHook'
import './App.css'

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((previewTheme) => (previewTheme === "light" ? "dark" : "light"));
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme}}> 
        {children}  
      </ThemeContext.Provider>
    </>
  )
}

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button onClick={toggleTheme} style={{ 
      backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white"
    }}>
      Toogle Theme
    </button>
  )
}

function App() {

  return (
    <>
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>
      
      <CounterWithCustomHook />
    </>
  )
}

export default App
