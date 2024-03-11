import React from 'react'


export default function Sliderhey({setValue ,handleSlider}) {
  return (
    <div className="container d-flex flex-column" style={{gap:100}}>

    <input type="range" min="0" max={100} value={setValue } onInput={handleSlider}/>
    <div style={{
      position:"absolute",
      top:"250px",
      width:`${setValue * 3 }px`,
      height:`${setValue * 3 }px`,
    backgroundColor:"red",
    borderRadius:"50%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
    }}>
        <span >
          {setValue }
        </span>
    </div>
</div>
  )
}
