import React from 'react'
import Title from './Title'

export default function RandomiCOlor() {
  const handleClick =(e)=>{
    // console.log(e.target);
let body = document.querySelector('body');
body.style.backgroundColor=getRandom();
e.target.style.backgroundColor=  getRandom();  
  }
  function getRandom()
  {
    let num = "1234567890ABCDEF"
    let col = "#";
    for(let i =0;i<6;i++)
    {
        col += num[Math.floor(Math.random() * 16)]
    }
    return col;
  }
  return ( 
    <div className="container m-auto text-center">
        
        <Title />

        <button className='btn btn-danger' onClick={handleClick}>click me</button>
        <button className='btn btn-success'  onClick={handleClick}>click me</button>
        <button className='btn btn-warning'  onClick={handleClick}>click me</button>
        <button className='btn btn-danger'  onClick={handleClick}>click me</button>
   </div>
  )
}
