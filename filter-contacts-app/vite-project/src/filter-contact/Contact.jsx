import React from "react";

export default function Contact({ contact, width = 300, textColor , cardColor }) {
  return (
    <div
      key={contact.id}
      className={`card bg-light m-auto ${cardColor}`}
      style={{ width: width }}
      
    >
      <div className= 'card-header'>
        {contact.first_name}
      </div>
      <div className="card-body text-left">
        <h4 className={`card-text ${textColor}`}>
            {" "}
            <span className="fw-bold">
                Last Name:
            </span>
            {contact.last_name}
        </h4>
        <p className={`card-text ${textColor}`}>
            <span className="fw-bold"> Email : </span> {contact.email}
        </p>
        <p className={`card-text ${textColor}`}>
            <span className="fw-bold"> phone : </span> {contact.phone}
        </p>
        <p className={`card-text ${textColor}`}>
            <span className="fw-bold"> Email : </span> {contact.user_name}
        </p>
      </div>
    </div>
  );
}
