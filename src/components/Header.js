import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [active, setActive] = useState(true);
  const onlineStatus = useOnlineStatus();

  const LoginHandler = () => {
    setActive(!active);
  };
  return (
    <div className=" md:flex  justify-between bg-pink-100  font-semibold text-green-950 shadow-sm shadow-slate-400">
      <div className=" m-auto  md:m-1 w-28">
        <img src={LOGO_URL} />
      </div>
      <div className=" md:flex text-center ">
        <ul className="md:flex">
          <li className="p-4 text-xl">
            {onlineStatus ? "Online 🟢" : "Offline 🔴"}
          </li>
          <li className=" p-4 text-xl">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="p-4 text-xl">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="p-4 text-xl">
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li className="p-4 text-xl">
            <NavLink to="/grocery">Grocery</NavLink>
          </li>
          <li className="p-4 text-xl ">Cart</li>
          <li className="p-4">
            {" "}
            <button
              className="border p-1 w-28 bg-orange-300 rounded-xl font-semibold shadow-lg shadow-gray-300"
              onClick={LoginHandler}
            >
              {active ? "Login" : "Logout"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
