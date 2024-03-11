import React, { useEffect, useState,useRef } from 'react';
import { BsSearch } from "react-icons/bs";

export default function Hiddensearchbar() {

  const [uiPros, setUiPros] = useState({
    bg: "grey",
    transitions: 'all .3s ease',
    shadow: '',
    opacity: '0',
    showICon: true,
    showsearchBar:false,



  });
  const inputEl = useRef(null);

  useEffect(() => {
    body.background = uiPros.bg;
    body.boxShadow = uiPros.shadow;
    body.transition = uiPros.transitions;
    uiPros.showsearchBar &&    inputEl.current.focus(); 
  }, [uiPros.shadow] ,[uiPros.showsearchBar ]);

  const showsearch = () => {
    setUiPros({
      opacity: 1,
      showICon: false,
      showsearchBar:true ,
    })
 
    
  }
  const handleSearcyhFocus = () => {
    setUiPros({
      shadow: "inset 0 -60vh 30vw 200px rgba(0,0,0,0.8)",
      borderBottomColor: "green"
    })
  }

  let body = document.body.style;



  let bsSearchStyle = {

   color:"white",
    cursor: "pointer",
    position: "absolute",
    right: 20,
    fontSize: "30px",
    margin: "3px",
    

  };
  let inputStyle = {
    border: "none",
    backgroundColor: "transparent",
    padding: "10px",
    width: "90%",
    outline: "none",
    fontSize: "20px",
    position: "relative",
    transition: "all .3s ease",
    boxShadow: " 0px 30px 30px -15px rgba(0,0,0,0.75)",
    opacity: uiPros.opacity,
    color:"white",



  }
  const handleSearcyhBlur = (e) => {
    setUiPros({
      shadow: "none",
      showICon: true,
      borderBottomColor: "green",
      opacity: 0
    })
  }
  



  return (
    <div className='container ' style ={{ height:"100vh"}}>   
      {uiPros.showICon ? <BsSearch style={bsSearchStyle} onClick={showsearch} /> : <input 
    type='text' 
    placeholder='search' 
    style={inputStyle} 
    onFocus={handleSearcyhFocus}
    onBlur={handleSearcyhBlur}
    ref={inputEl}


     />}






    </div>
  )
}
