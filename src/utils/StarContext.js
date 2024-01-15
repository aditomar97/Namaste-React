import { Children, createContext, useEffect, useState } from "react";
import { SWIGGY_URL } from "./constants";
import useRestaurant from "./useRestaurant";


 export const StarContext=createContext()
 
 function StarProvider({children}){
    const [starRating,setStarRating]=useState()
     
   
     return (
        <StarContext.Provider value={{starRating,setStarRating}}>
            {children}
        </StarContext.Provider>
     )

 }
 export default StarProvider