import React from "react";
import ReactDOM from "react-dom"
import { useState, useEffect } from "react";

const useRestraunt = (resId) => {


    const [restraunt, setRestraunt] = useState(null);
    const [allMenu, setAllMenu] = useState([]);



    useEffect(() => {
        getRestraunt();
    }, [resId]);  // Add resId as a dependency to the useEffect

    async function getRestraunt() {
        try {
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9634&lng=77.5855&restaurantId=${resId}`);
            const response = await data.json();
            console.log(response?.data);

            // Adjust the paths based on the response structure-->>

            const restaurantInfo = response?.data?.cards?.find(card => card.card?.card?.info)?.card?.card?.info;
            console.log(restaurantInfo)
            const menuCards = response?.data?.cards?.find(card => card?.groupedCard?.cardGroupMap?.REGULAR)?.groupedCard?.cardGroupMap?.REGULAR?.cards;

            setRestraunt(restaurantInfo || {});
            setAllMenu(menuCards?.flatMap(card => card.card?.card?.itemCards) || []);
        }
        catch (error) {
            console.error("Failed to fetch restaurant data", error);
        }



        return restraunt,allMenu;





    }
}

export default useRestraunt;