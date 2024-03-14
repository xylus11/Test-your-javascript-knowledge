import React from "react";
import Title from "../Title"
import Formgroup from "../Formgroup";
export default function Contact({ pageTitle }) {
  return (
    <>
      <Title text={pageTitle} classes={"text-center title-main text-primary text-center"} />

      <form className="d-flex flex-column justify-center ">
        <Formgroup
          labelText="First Name"
          placeholder={"Enter your first name"}
        />
        <Formgroup labelText="Last Name" placeholder={"Enter your last name"} />
        <Formgroup labelText="Email" placeholder={"Enter your email"} />

        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    </>
  );
}
