import React from 'react'
import Button from "./Button"

export default function Pop({type, title ,text,triggered,trigger }) {

    const popContainer = {
        position:"absolute",
        top:"0",
        height: "100vh",
        width: '100vw',
        background:"rgba(0,0,0,0.1)",
        zIndex:"-1"

    }
    const popStyle ={ 
        position:"relative",
        margin:"40vh auto",
        zIndex: '1',
    }
      
  return trigger && (
    <div style={popContainer}>

    <div className={`${type}`} style={popStyle}>
    <div className='alert-close'>
        <div className='d-flex flex-column text-left'>
          <h4 className="mb-1 ">{title && title} </h4>
          <p>{text && text}</p>
       
        </div>
        <Button btnClass={"btn-close"} text ={"x"} onClick={()=>triggered(false)} />
        </div>
    </div>

    </div>
  )
}
