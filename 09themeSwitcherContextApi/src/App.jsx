import "./App.css";
import { useEffect, useState } from "react";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";
import { ThemeProvider } from "./context/theme"; 

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const switchToDark = ()=>{
    setThemeMode("dark");
    console.log(themeMode);
    
  }

  const switchToLight = ()=>{
    setThemeMode("light");
    console.log(themeMode);
  }

  useEffect(()=>{
    const hteaml = document.querySelector('html')
    hteaml.classList.remove('light', 'dark') 
    hteaml.classList.add(themeMode)
    // document.querySelector('html').classList.add(themeMode) 
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,switchToDark, switchToLight}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
        <ThemeButton/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
