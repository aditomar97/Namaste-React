import RestaurantCard from "./RestaurantCard";
import { reslist } from "../utils/mockDATA";
import { useState } from "react";
  
const Body = () => {
    const [rest,setRest]=useState(reslist)
    const TopRated=()=>{
    const top= rest.filter((data)=>{
          return data.info.avgRating>4
        })
        setRest(top)
       
    }
    return (
      <div className="Body">
        <div className="filter">
        <button className="filter-btn" onClick={TopRated}>Top Rated Restuarnts</button>
        </div>
        
        <div className="res-container">
        {rest.map((data)=>{
           return  <RestaurantCard resData={data} key={data.info.id}/>
          })}
        </div>
      </div>
    );
  };

  export default Body