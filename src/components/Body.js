import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link} from "react-router-dom";
import { SWIGGY_URL } from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [search, setSearch] = useState("");

  const {
    listOfRestaurants,
    setlistOfRestaurants,
    filteredRestaurant,
    setFilteredRestaurant,
  } = useRestaurant(SWIGGY_URL);
 
  const onlineStatus=useOnlineStatus()

  const SearchHandler = (e) => {
    setSearch(e.target.value);
  };
  const SearchList = () => {
    const filteredList = listOfRestaurants.filter((el) => {
      return el.info.name.toLowerCase().includes(search.toLocaleLowerCase());
    });
    setFilteredRestaurant(filteredList);
  };
  const TopRated = () => {
    console.log("top Rated");
    const top = listOfRestaurants.filter((data) => {
      return data.info.avgRating > 4;
    });
    setFilteredRestaurant(top);
  };
 if(onlineStatus===false){
  return(
    <h1>You are Offline , please check your internet Connection</h1>
  )
 }

  return listOfRestaurants.length === 0 ? (
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
        <button
          className="filter-btn"
          onClick={() => {
            TopRated();
          }}
        >
          Top Rated Restuarnts
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((data) => {
          return (
            <Link key={data.info.id} to={`/restaurants/${data.info.id}`}>
              {" "}
              <RestaurantCard resData={data} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
