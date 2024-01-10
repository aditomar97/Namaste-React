import RestaurantCard, { pureVegRestaurant } from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
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

  const onlineStatus = useOnlineStatus();

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
  if (onlineStatus === false) {
    return <h1>You are Offline , please check your internet Connection</h1>;
  }
  
  const PureVegRestaurant=pureVegRestaurant(RestaurantCard)

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="md:m-1 ">
      <div className=" md:flex ">
        <div className=" inline-block md:flex" >
          <input
            className="border m-1 p-2  border-black"
            type="text"
            onChange={SearchHandler}
          />
          <button
            onClick={SearchList}
            className=" md:m-2 p-2 border border-violet-500 rounded-xl font-semibold bg-violet-400 shadow-md shadow-slate-400"
          >
            Search Button
          </button>
        </div>
        <button
          className="m-1  md:m-2 p-2 border border-violet-500 rounded-xl font-semibold bg-violet-400 shadow-md shadow-slate-400"
          onClick={() => {
            TopRated();
          }}
        >
          Top Rated Restuarnts
      </button>
      </div>

      <div className="md:flex flex-wrap my-4 ">
        {filteredRestaurant.map((data) => {
          return (
            <Link key={data.info.id} to={`/restaurants/${data.info.id}/${data.info.avgRating}`}>
              {data.info.veg?<PureVegRestaurant resData={data}/>: <RestaurantCard resData={data}  />}
             
              
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
