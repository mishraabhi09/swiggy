import { useState, useEffect } from "react";





const BestRestraunt = () => {


    const [bestRestraunt, setBestRestraunt] = useState([]);

    async function getBestRestraunt() {

        try {
            const BestRestrauntData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9753&lng=77.591&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

            const fetchedBestRestrauntData = BestRestrauntData?.data?.cards[6]?.card?.card?.brands

            const response = await fetchedBestRestrauntData.json();

            console.log(response);
        }

        catch (error) {
            console.log("Brands are not found:", error);
        }


    }



    return (
        <>

            <div className="bestRestrauntMainPage">

            </div>



        </>
    )
}

export default BestRestraunt;