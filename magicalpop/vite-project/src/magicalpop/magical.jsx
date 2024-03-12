import React, { useState, useEffect } from 'react'
import Pop from '../componant/Pop.componant'
import Button from '../componant/Button'
import Title from  "../componant/Title"
export default function Magical( ) {
    const [trigger , setTrigger ] =useState(false);
    const [timetrigger , setTimeTrigger ] =useState(false);
    const triggerPopup =( ) =>{
        console.log("trigger pop") 
        setTrigger(true);
    };
    useEffect(() => {
        setTimeout(() => {
          setTimeTrigger(true);
        }, 3000);
         
      }, []);
  return (
    <div className='text-center'>
        <Title text ={"click for popup or wait 3 seconds"}/>
        <Button btnClass={"btn-primary"} text={"click"} onClick={triggerPopup}/> 

     <Pop type={"alert-info"}
      title={"triggered popup"}
      text={"This popup was triggered by a button"}
      triggered={setTrigger}
      trigger={trigger}
      
      
      
      />{" "}
         <Pop type={"alert-danger"}
      title={"time triggered popup"}
      text={"This popup was triggered by a time "}
      triggered={setTimeTrigger}
      trigger={timetrigger}
      
      
      
      />

    </div>
  )
}
