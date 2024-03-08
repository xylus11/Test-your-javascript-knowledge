import React,{useState ,useEffect} from 'react';
import Button from '../componant/Button'
export default function Alert({type ,text, delay =false}) {
    const [showAlert, setAlert] =useState(true);
    const closeAlert=(e)=>{
    e.target.parentElement.parentElement.classList.add("fade-Alert");
  setTimeout(()=>{
setAlert(false);

},500)
    };


    useEffect(()=>{
        delay && setTimeout(()=>{
            setAlert(false);
            console.log("count ");
        },300)
    })
 
  return (
     showAlert && <div className={`alert alert-${type}   d-flex justify-content-between `}>
    
        <div className='text-success'>
        {text}
        </div>
        <span className='mr-1'>
            <Button onClick={closeAlert}/>
        </span>
     </div>
  )
}
