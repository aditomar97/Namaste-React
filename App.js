import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard=({resname})=>{
    return(
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/e0vvulfbahjxjz6k4uwi"/>
            <h3>{resname}</h3>
            <h4>Biryani,North Indina,Asian</h4>
            <h4>4.4 Star Ratings</h4>
            <h4>38 minutes</h4>
        </div>
    )
}
const Body = () => {
  return (
    <div className="Body">
      <div className="Search">Search</div>
      <div className="res-container">
       <RestaurantCard resname="Meghana Foods"/>
       <RestaurantCard resname="KFC"/>
      
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
