import React, { useEffect, useState } from "react";
import Navitem from "../Navitem";
import { Navstyle } from "../Navstyle";
import Home from "../componant/pages/home"
import About from "../componant/pages/about"
import Contact from "../componant/pages/contact"

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export default function Resp() {
  const [showElement, setShowElement] = useState({
    navbarNav: true,
    hamburgerIcon: false,
    closeIcon: false,
    navOpened: false,
  });

  useEffect(() => {
    window.onresize = () => {
      let windowWidth = window.innerWidth;
      windowWidth > 600 &&
        setShowElement({
          hamburgerIcon: false,
          navbarNav: true,
        });
      windowWidth < 600 &&
        setShowElement({
          hamburgerIcon: true,
          navbarNav: false,
        });
    };
  }, []);


  const openNav =()=>{
    setShowElement({
      navbarNav: true,
      hamburgerIcon: false,
      closeIcon: true,
      navOpened: true,
    })
  }

  const closeNav =()=>{
    setShowElement({
      navbarNav: false,
      hamburgerIcon: true,
      closeIcon: false,
      navOpened: false,
     
      
  })};





  // Update adding page navigation

  const [pages, setPages] = useState("Home");

  const navigate = (e) => {
    document
      .querySelectorAll(".nav-link")
      .forEach((navLink) => navLink.classList.remove("active"));
    e.target.classList.add("active");

    let nevItem = e.target.innerText;
    switch (nevItem) {
      case "Home":
        setPages(<Home pageTitle={nevItem} />);
        break;
      case "About":
        setPages(<About pageTitle={nevItem} />);
        break;
      case "Contact":
        setPages(<Contact pageTitle={nevItem} />);
        break;
      default:
        break;
    }
  };


  return (
    <>
    <Navstyle className={ `navbar bg-primary text-light ${showElement.navOpened && "showNavbar"}`}>
      <div className="navbar-logo">
        <a href="#" className="navbar-brand">
          Ankit ahire
        </a>{" "}
        {showElement.hamburgerIcon && <AiOutlineMenu  onClick={openNav}/>}
        {showElement.closeIcon && <AiOutlineClose  onClick={closeNav} />}
      </div>
      <div className="navbar-collapse">
        {showElement.navbarNav ? (
          <ul className={` navbar-items  ${showElement.navOpened && "showNavbar"}`}>
            <Navitem text={"Home"} active="active" onClick={navigate} />
              <Navitem text={"About"} onClick={navigate} />
              <Navitem text={"Contact"} onClick={navigate} />
          </ul>
        ) : null}
      </div>
    </Navstyle>
   

<div className="container text-center px-2 outlet">{pages}</div>



</>


  );
}

