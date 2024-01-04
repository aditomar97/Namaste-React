
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function RestaurantMenu() {
  const { resId } = useParams();
  const  resInfo  = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo.cards[0]?.card?.card?.info;
  console.log(
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  );
  const { itemCards, categories } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
     <h1>{name}</h1>
      <p>
        {cuisines.join(",")}-{costForTwoMessage}
      </p>
      <h1 className=" font-semibold">Menu</h1>
      <ul>
        {(itemCards || categories[0].itemCards).map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name}-Rs{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
