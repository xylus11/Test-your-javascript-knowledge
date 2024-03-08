import React from 'react'

export default function Button({text ,classN, onClick}) {
  return (
    <div className= {`btn btn-${classN}`} onClick={onClick}>{text}</div>
  )
}
