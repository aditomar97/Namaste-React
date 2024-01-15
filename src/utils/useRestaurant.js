import { useEffect, useState } from "react";

const useRestaurant = (string) => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(string);
    const res = await data.json();
    console.log(
        res?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants
      );
    setlistOfRestaurants(
        res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredRestaurant(
        res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
  };

  return {listOfRestaurants,filteredRestaurant,setFilteredRestaurant,setlistOfRestaurants}
};

export default useRestaurant