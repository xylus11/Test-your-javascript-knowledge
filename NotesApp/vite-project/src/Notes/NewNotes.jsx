import React,{useState,useEffect} from  "react";
import { NoStyles, Icons, DeleteIcon } from "./Notestyle";
import { MdOutlineNoteAlt, MdDeleteForever } from "react-icons/md";

export default function NewNotes({notes ,onClick,text ,cardbg}) {

  const [newCardbg , setnewCardbg] =useState();


  useEffect(( ) => {
    !newCardbg && setnewCardbg(cardbg);
  }, [newCardbg]);


  
  return (
    <NoStyles className={`card ${newCardbg}`}>
      <div className="card-header text-center">
      <Icons> <MdOutlineNoteAlt />
      <DeleteIcon>
        <MdDeleteForever onClick={()=>onClick(notes.id)}/>
        </DeleteIcon>
        </Icons> 
      </div>
      <div className="card-body">

        <textarea style={{border:"none" ,outline:"none"}}>{text}</textarea>

      </div>
    </NoStyles>
  );
}
