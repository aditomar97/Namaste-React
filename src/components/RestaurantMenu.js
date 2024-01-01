import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const result = await fetch(MENU_URL + resId);
    const data = await result.json();
    console.log(data.data.cards[0].card.card.info)
    setResInfo(data.data);
  };

  
if(resInfo===null)return <Shimmer/>
const {name,cuisines,costForTwoMessage} =resInfo.cards[0]?.card?.card?.info
console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card)
const {itemCards,categories} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
     {cuisines.join(",") }-{costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {(itemCards || categories[0].itemCards).map((item)=>{
        return <li key={item.card.info.id}>{item.card.info.name}-Rs {item.card.info.price/100 || item.card.info.defaultPrice/100
        } </li>
        })}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
