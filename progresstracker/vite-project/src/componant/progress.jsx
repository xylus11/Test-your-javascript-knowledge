

export const Progress =({bgColor,completed})=> {

    const containerStyle ={

        heigth:25,
        backgroundColor:"#e0e0de",
        borderRadius:50,
        margin:50,
        width:"100%",

    }
    const fillerStyle ={



        backgroundColor:bgColor,
        height:"100%",
        width:`${completed}%`,
        borderRadius: "inherit",
        textAlign: "right",
        transition:"width 1s ease-in-out",

    }
    const labelStyles ={
  padding:50,
  margin:10,
  color:"#fff",
  fontWeight:"bold"


    }

  return (
    <div style={containerStyle}> 

        <div  style={fillerStyle}>

        <span  style={labelStyles}> {`${completed} %`}</span>
        </div>
       
    </div>
  )
}
