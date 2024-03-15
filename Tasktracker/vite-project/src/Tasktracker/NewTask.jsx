import React from 'react'
import { NewTaskStyle } from './TableStyle'
import Button from '../componant/Button'

export default function NewTask({type,date , onTaskClick, onDelete}) {
  return (
    <NewTaskStyle>
    <div className='container d-flex' >
        <div>
        <h3>
            {type}
        </h3>
        <small className='text-danger'>{date}</small>
        </div>
        <div  style={{marginLeft:"100px"}}>
            <Button btnClass={"success"} text={"completed"} onClick={onTaskClick}/>
            <Button btnClass={"danger"} text={"delete"} onClick={onDelete}/>

        </div>
         


    </div></NewTaskStyle>
  )
}

