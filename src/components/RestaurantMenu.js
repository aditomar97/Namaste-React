import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

function RestaurantMenu() {

  const { resId, avrRating } = useParams();
  const [showIndex,setShowIndex]=useState(null)
  const [showItems,setShowItems]=useState(true)
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo.cards[0]?.card?.card?.info;
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);
  const { itemCards, categories } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const Categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c) => {
      return (
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

     
  console.log("categorise", Categories);
  return (
    <div className="text-center">
      <h2 className="font-bold my-6 text-2xl">{name}</h2>
      <p className="font-bold text-lg">
        {cuisines.join(",")}-{costForTwoMessage}
      </p>
      {Categories.map((category,index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          setShowIndex={()=>setShowIndex(index)}
          showItems={index===showIndex && showItems}
       setShowItems={setShowItems}
        />
      ))}
    </div>
  );
}

export default RestaurantMenu;
