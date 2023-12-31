import RestaurantCard from "./RestaurantCard";
import { reslist } from "../utils/mockDATA";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.2041357&lng=77.9053182&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    // console.log(
    //   res?.data?.cards[3]?.card.card.gridElements.infoWithStyle.restaurants
    // );
    setlistOfRestaurants(
      res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };


  const SearchHandler = (e) => {
    setSearch(e.target.value);
  };
  const SearchList = () => {
    console.log("Hi")
    const filteredList = listOfRestaurants.filter((el) => {
      return el.info.name.toLowerCase().includes(search.toLocaleLowerCase());
    });
    setFilteredRestaurant(filteredList);
    
  };
  const TopRated = () => {
    console.log("top Rated")
    const top = listOfRestaurants.filter((data) => {
      return data.info.avgRating > 4;
    });
    setFilteredRestaurant(top);
  };

  // if (filteredRestaurant.length === 0 ) {
  //   return (
  //     <div>
  //       <div className="filter">
  //         <div className="search">
  //           <input type="text" onChange={SearchHandler} />
  //           <button onClick={SearchList} className="search-btn">
  //             Search Button
  //           </button>
  //         </div>
  //       </div>
  //       <h1>No Restaurant with this name</h1>
  //     </div>
  //   );
  // }

  return listOfRestaurants.length === 0  ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter">
        <div className="search">
          <input type="text" onChange={SearchHandler} />
          <button onClick={SearchList} className="search-btn">
            Search Button
          </button>
        </div>
        <button className="filter-btn" onClick={()=>{TopRated()}}>
          Top Rated Restuarnts
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((data) => {
          return <RestaurantCard resData={data} key={data.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
