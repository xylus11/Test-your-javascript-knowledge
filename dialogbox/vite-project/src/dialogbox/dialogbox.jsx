import React, { useState,useEffect } from "react";
import Button from "../componant/Button";
import { BsFillEmojiFrownFill, BsFillEmojiSmileFill } from "react-icons/bs";
import '../Bounce.css'

export default function Dialogbox() {
  const [subs, setSubs] = useState({
    title: "hello",
    desc: "would you like to subscribe ? ",
    state: null,
    justifyContent: "space-between",
  });
  const [icons, setIcons] = useState();
  let iconStyle = {

    fontSize : '80px',
    justifySelf :"center",
    color: subs.state ==="subscribed" ? "rgba(59,137,90,0.4)" : "rgba(25,118,160,0.4)"
  };

  useEffect(()=>{
   if(subs.state ==="unsubscribed" ){setIcons (<BsFillEmojiFrownFill  style ={iconStyle}/>),(document.body.style.background ="rgba(59,137,90,0.4) ");}
if(subs.state ==="subscribed")
 {setIcons (<BsFillEmojiSmileFill style ={iconStyle}/> ) ,(document.body.style.background="rgba(25,118,160,0.4)");
  }


  },[subs.state])
  const handleSubscribe = () => {
    setSubs({
      title: "Thank you",
      desc: "for your subscription",
      state: "subscribed",
      justifyContent: "flex-end",
    });
  };

  const handleUnsubscribe = () => {
    setSubs({
      title: "Sorry",
      desc: "to see you go.",
      state: "unsubscribed",
      justifyContent: "flex-end",
    });
  };

 const [bounce, setBounce ] =useState("");
 useEffect(()=>{
  setTimeout(()=>{
setBounce("")
  },950);

  return ()=> setBounce("bounce");
 },[subs.state])

  return (
    <div className={`card bg-light m-auto mt-4 p-1 ${bounce}`} style={{ width: 350 }}>
      <div className="card-body">
        <div
          className="d-grid"
          style={{
            gridTemplateColumns: "2fr 1fr",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <section>
            <h2 className="card-title "> {subs.title}</h2>
            <h3 className="card-text "> {subs.desc}</h3>
          </section>
          <div>{icons}</div>
        </div>
      </div>

      <div
        className="d-flex mb-2 px-1 text-end "
        style={{ width: "100%", justifyContent: `${subs.justifyContent}` }}
      >
        {subs.state === null && (
          <Button btnClass={"btn-light"} text={"cancel"} />
        )}
        {subs.state === "subscribed" ? null : (
          <Button btnClass={"btn-danger"} text={"Subscribe"} onClick={handleSubscribe}/>
        )}

        {subs.state === "subscribed" ? (
          <Button btnClass={"btn-danger btn-block"} text={"UnSubscribe"} onClick={handleUnsubscribe} />
        ) : null}
      </div>
    </div>
  );
}
