import React from 'react'

export default function Button({btnClass,text, onClick}) {
  return (
    <div className={`btn ${btnClass}`} onClick={onClick}>{text}</div>
    
  )
}
