import React, {useState} from 'react'
import NewNotes from './NewNotes'
import Button from "../componant/Button"
import {v4 as uuidv4} from "uuid"

export default function Notes() {
    const [notes, setNotes] =useState([])

    const addNote = (note) => {
        const newNote = [...notes,note]


         newNote.filter((note)=>{!note.id &&( note.id = uuidv4())})
                 setNotes(newNote);
    };

    const deleteNote = (id) => {
        setNotes(notes.filter((note) => ( note.id !== id)))}


        const cards =[
        "card-info",
        "card-danger",
        "card-primary",
        "card-success",
        "card-warning"


        ];


        const randomize = ()=>{
          const rand = Math.floor(Math.random() * cards.length)
          return cards[rand]
        }

      

  return (
    <div className='container' >
        
        <Button btnClass={"success"} text={ "+ New Note"} style ={{ gap:25 ,flexWrap:"wrap"}} onClick={addNote}/>

        <div className="container container-sm d-flex" style ={{ gap:25 ,flexWrap:"wrap"}}>
     {notes.map((note)=>(<NewNotes  key={note.id} notes={note}  onClick={deleteNote}  cardbg ={randomize}/>)) }
        </div>
        
        
        
        </div>
  )
}
