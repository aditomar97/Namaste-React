import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {NavLink} from 'react-router-dom'
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [active,setActive]=useState(true)
 const onlineStatus=useOnlineStatus()

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
             <li className="status">{onlineStatus ? "Online" :"Offline"}
              <div className={onlineStatus ?"online":"offline"}></div>
             </li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/grocery">Grocery</NavLink></li>
            <li>Cart</li>
            <button className="login" onClick={LoginHandler}>{active?"Login":"Logout"}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header