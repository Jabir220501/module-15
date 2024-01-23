import React, { useEffect, useState } from 'react'
import "./Navbar.css"

function Navbar() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix logo"
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        />
      </div>
    </nav>
  );
}

export default Navbar;
