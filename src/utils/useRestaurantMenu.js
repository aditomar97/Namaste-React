import { useEffect, useState } from "react"
import { MENU_URL } from "./constants"

const useRestaurantMenu=(resId)=>{
  const [resInfo,setResInfo]=useState(null)

    useEffect(()=>{
      fetchData()  
    },[])

const fetchData= async()=>{
const result = await fetch(MENU_URL+resId)
const data= await result.json()
setResInfo(data.data)
}
return resInfo
}

export default useRestaurantMenu