import React from 'react'
import Title from './Title'
import Button from './Button'
import { useContext } from 'react'
import { ThemeContext } from '../context/theme-context'

export default function Darkmode() {
    const {theme,changeTheme} = useContext(ThemeContext);

  return (
    <div className="container  p-1"  >      
        <Title text={`My blog  with ${theme} theme`}/>
        <span style={{  position : "absolute ", top:"10px" ,right:"20px" }}> <Button text={theme ==="dark" ? "light" : "dark"} classN={theme ==="dark" ? "light" : "dark"} onClick={changeTheme}     /> </span>
        <p>Dragon Ball Creator passed away today . RIP </p>





    </div>
  )
}
 