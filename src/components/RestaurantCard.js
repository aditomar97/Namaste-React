import { useState } from "react";
import { CDN_URL } from "../utils/constants";




const RestaurantCard = ({ resData }) => {
const {name,cuisines,costForTwo,avgRating,sla,cloudinaryImageId,id} =resData?.info



    return (
      <div className=" md:w-56 m-3  border border-slate rounded-lg p-5  bg-slate-100 hover:bg-slate-300">
        <img
          className="md:w-60"
          src={CDN_URL+cloudinaryImageId}
        />
        <h1 className="md:font-semibold">{name}</h1>
        <h4>{cuisines.join(" ,")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{typeof avgRating === "undefined"?"NEW":`${avgRating} Star Rating`} </h4>
        <h4>{sla?.slaString}  </h4>
      </div>
    );
  };

  export default RestaurantCard