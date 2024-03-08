import Darkmode from './componant/Darkmode';
import React, {useState,useEffect} from 'react';
import { ThemeContext, themes } from './context/theme-context';
import './App.css'

function App() {
 const [theme, setTheme] =useState(themes.light);


 function changeTheme()
 {
theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)

 }
 useEffect(()=>{
 let docBody = document.body;
 switch(theme){
  case themes.light:
    docBody.classList.remove("bg-dark")
    docBody.classList.remove("text-light")
    docBody.classList.add("bg-light")
    docBody.classList.add("text-dark")
    break;
    case themes.dark:
      docBody.classList.remove("bg-light")
      docBody.classList.remove("text-dark")
      docBody.classList.add("bg-dark")
      docBody.classList.add("text-light")
      break;
  

 }

 },[theme])

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      <Darkmode />
    </ThemeContext.Provider>
  )
}
 
export default App
