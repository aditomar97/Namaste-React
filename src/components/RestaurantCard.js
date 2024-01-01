import { useState } from "react";
import { CDN_URL } from "../utils/constants";




const RestaurantCard = ({ resData }) => {
const {name,cuisines,costForTwo,avgRating,sla,cloudinaryImageId,id} =resData?.info



    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={CDN_URL+cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{costForTwo}</h4>
        <h4>{typeof avgRating === "undefined"?"NEW":`${avgRating} Star Rating`} </h4>
        <h4>{sla?.slaString}  </h4>
      </div>
    );
  };

  export default RestaurantCard