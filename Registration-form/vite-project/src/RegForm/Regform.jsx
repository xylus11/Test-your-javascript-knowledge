import React, { useRef, useEffect, useState } from "react";

import Title from "../componant/Title";
import Button from "../componant/Button";
import Alert from "../componant/Alert";

export default function Regform() {
  let inputField = useRef("null");
  let emailField = useRef("null");
  let pwdField = useRef("null");

  
  const [values, setValues] = useState({
    user_name: "",
    email: "",
    paswd: "",
  });
  
  const [submit , setSubmit] =useState(false);

  const [valid , setValid] = useState(false);


  



  useEffect(() => {
    inputField.current.focus();
  }, []);


  const handleNameChange = (e) => {
    setValues({ ...values, user_name: e.target.value });
  };
  const handleEmailChange = (e) => {
    setValues({ ...values,email:e.target.value });
  };
  const handlePasswordChange = (e) => {
    setValues({ ...values,paswd:e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if(!values.user_name)
    {
      inputField.current.focus();
    }
    else if(!values.email)
    {
      emailField.current.focus();

    }
    else if(!values.paswd)
    {
      pwdField.current.focus();

    }

    if(values.user_name && values.email && values.paswd)
    {
  setValid(true);
    }
    setSubmit(true);
  };


  return (

   
    <div className="m-auto">
   {  submit && valid ?
   

  
  (     <> <Alert 
   type={"success"}
   text={"Registration is successful"}
   delay={true}
   />
   <Title text={`welcome ${values.user_name}`}/></>) :
   
  
  
  



      <div className="container m-auto mt-4 p-2 shadow-sm border-5">
        <Title text={"Registration form"} />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your name"
              ref={inputField}
              value={values.user_name}
              onChange={handleNameChange}
            />

          {submit && !values.user_name ? (  <label className="text-danger fs-sm">Please Enter your name</label>) : null}
          </div>{" "}
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your Email"
              ref={emailField}
              value={values.email}
              onChange={handleEmailChange}
            />

           {submit && !values.email ?( <label className="text-danger fs-sm">Please Enter your Email</label>) : null}
          </div>{" "}
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter your Password"
              ref={pwdField}
              value={values.paswd}
              onChange={handlePasswordChange}
            />

           {submit && !values.paswd ? ( <label className="text-danger fs-sm">
              Please correct Password combination
            </label>) : null}
          </div>
          <Button btnClass={"btn-primary btn-lg btn-block"} text={"Register"} onClick={handleSubmit}/>
        </form>
      </div>
}
    </div>
  
  );
}



