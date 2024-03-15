import React from 'react'
import Button from "../componant/Button"

export default function Task({data, setDate, setType, onClick , type}) {
  return (
    <div className='d-flex' style={{justifyContent:"space-between",
    borderBottom:"1px solid #666",
    marginBottom:"2rem"
    

}}>

    <input type="datetime-local" value={data} onChange={setDate} />
    <input type="text" value={type} onChange={setType} placeholder='specify the task'/>
    <Button text="Add" onClick={onClick}/>
</div>
  )
}
