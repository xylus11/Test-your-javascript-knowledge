import React,{useState, useEffect} from 'react'
import Title from './Title'

import Button from './Button'
import {FaChild , FaCaretSquareUp ,FaClipboard} from "react-icons/fa"
export default function Testi() {
    
const [testimonial, setTestimonial] = useState("")
const [items,setItems] =useState("");
useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${testimonial}`)
    .then((res)=> res.json())
    .then((json)=> setItems(json));
},[testimonial])
    const handleClick=()=>{
console.log("clicked")
    };
  return (
    <div>

<h1> Testimonials</h1>
<Button icon ={<FaChild/>} text="post" btnClass="btn-danger" onClick={()=>setTestimonial("Posts")}/>
<Button icon ={<FaCaretSquareUp/>} text="users" btnClass="btn-success" onClick={()=>setTestimonial("Comments")}/>
<Button icon ={<FaClipboard/>}text="names" btnClass="btn-primary" onClick={()=>setTestimonial("Users")}/>
<Title  classN={"subtitle text-primary"} text={!testimonial ? "select from above": testimonial}/>
{!items ? null : items.map((item)=>{
    return(
        <div className="card card-primary mb-2" key={item.id}>
            {item.name && <h2 className='card-header'>{item.name}</h2>}
            <div className='card-body'>
                <h4> {item.title}</h4>
                <p>{item.body}</p>
                </div>
                {item.email && <small className='card-header'>{item.email}</small>}
        </div>
    )
})}
    </div>
  )
}
