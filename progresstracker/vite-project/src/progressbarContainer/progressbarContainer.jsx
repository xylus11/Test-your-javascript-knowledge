import React,{useRef, useEffect,useState} from "react";
import Title from "../componant/Title";
import { Progress } from "../componant/progress";

export default function progressbarContainer() {

  const [completed, setCompleted] =useState(52);
  const [status, setStatus] =useState({
ui:23,
ux:53,
data:75
  });
  

  const projectData =[

    {bgColor:"#7633f9", completed:status.ui},
    
    {bgColor:"#28a745", completed:status.ux},
    
    {bgColor:"#dc3545", completed:status.data}
  ]
  const inputStyle = {
    width: 50,
    border: "none",
    outline: "none",
    textAlign: "center",
    borderBottom: "1px solid lightgray",
  };
  const uiInput = useRef (null);
  useEffect(( )=>{
    uiInput.current.focus();

    setInterval(()=>
    setCompleted(Math.floor(Math.random()*100)+1),2000)

  },[])

  return (
    <div className="container container-sm mx-auto text-center ">
      {<Title text={"progress tracker"} />}
      <h2>Project Status</h2>
      <ul>
        <li>
          {" "}
          UI Status :
          <input
            type="number"
            style={inputStyle}
            value={status.ui}
           
            ref={uiInput}
            onChange={(e) => 
             setStatus({...status, ui: e.target.value})
            }
          />
        </li>
        <li> {" "}
        UX Status :
          <input
            type="number"
            style={inputStyle}
            value={status.ux}
            onChange={(e) => 
              setStatus({...status, ux: e.target.value})
             }
          /></li>
        <li> {" "}
          Data Status :
          <input
            type="number"
            style={inputStyle}
            value={status.data}
            onChange={(e) => 
              setStatus({...status, data: e.target.value})
             }
          /></li>
      </ul>

      {
        projectData.map((data,index)=>(
          <Progress key={index} bgColor={data.bgColor} completed={ data.completed}/>

        ))
      }
                <Progress  bgColor={completed> 50 ? "#7633f9" : "#dc3545"} completed={completed }/>

    </div>
  );
}
