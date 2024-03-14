import React from 'react'

export default function Navitem({active = "",text,onClick}) {
  return (
    <li className='nav-item'>
    <a href="#" className={`nav-link ${active}`}  onClick={onClick}>
      {text}
    </a> { " "}
    </li>
  )
}
