import { useState } from "react";
import ItemList from "./ItemList";

function RestaurantCategory({ data,showItems,setShowIndex, setShowItems }) {

    const handleClick=()=>{
        setShowIndex()
        setShowItems(!showItems)
    }
console.log(data)
  return (
    <div>
      <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        <span>🔽</span>
        </div>
       {showItems && <ItemList key={data.title} items={data.itemCards}/>}
      </div>
    
    </div>
  );
}

export default RestaurantCategory;
