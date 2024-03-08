import React from 'react'

export default function Button({icon ,text , btnClass ,onClick}) {
  return <button className={`btn ${btnClass} mx-2`} onClick={onClick}>{icon}{text} </button>;
    
  
}
