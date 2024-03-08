import React from 'react';
import {useState } from "react";
import Title from './Title';
import dog from "../assets/dog.jpg"
import {AiFillHeart , AiOutlineHeart,AiOutlineComment,} from "react-icons/ai"

export default function Likephoto() {
    const [liked, setLiked] =useState(false);
 const toggleLike =() =>{
    if(!liked)
    {
        setLiked(true);
    }
    else{
        setLiked(false);
    }
 }

    // let like=false;
  return (
    <div className='container'>
        <Title/>
        <h1> Like my App</h1>
        <div className='card ' onDoubleClick={toggleLike} style={{width:300 , height:"390px",border:"2px solid grey  ",backgroundColor:"grey", cursor:"pointer" } }>
           <div className='card-header fs-xl'  style={{backgroundColor:"grey",fontWeight:"700",color:"white"}}>
            
            <small> DoggyDog</small>  </div> 

        <img src={dog} alt="snoop D O double g" style={{height:"fit-content"}}/>
        
     

        <div className='card-footer d-flex' style={{justifyContent:"space-between"}}> 
      <AiOutlineComment />
      {" "}
      {liked ? <AiFillHeart className="text-danger runner" onClick={toggleLike}/> : <AiOutlineHeart  onClick={toggleLike}/>} 
        
        </div>
        </div>
        </div>
  ) 
}
