import React from 'react'

export default function Formgroup({labelText ,placeholder}) {
  return (
    <div className='container'>

       
        <label >{labelText}
        <input type ="text"    placeholder={placeholder}/>
        
         </label>
        
        
    </div>
  )
}
