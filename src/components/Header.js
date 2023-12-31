import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [active,setActive]=useState(true)

  const LoginHandler=()=>{
    setActive(!active)
  }
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login" onClick={LoginHandler}>{active?"Login":"Logout"}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header