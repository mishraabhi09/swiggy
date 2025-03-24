import { useState, useEffect } from "react";
// import BestRestrauntData from "./BestRestraunData";
import Shimmer_Cities from "./Shimmer_Cities";
import { Link } from "react-router-dom";



const BestRestraunt = ({ text }) => {


    const [bestRestraunt, setBestRestraunt] = useState([]);

    const [city, setCity] = useState([]);


    async function getBestRestraunt() {

        try {
            const BestRestrauntData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9753&lng=77.591&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

            const json = await BestRestrauntData.json();

            const fetchedBestRestrauntData = json?.data?.cards[6]?.card?.card?.brands;

            const fetchedCity = json?.data?.cards[10]?.card?.card?.cities || [];

            setCity(fetchedCity);

            console.log(fetchedCity);

            setBestRestraunt(fetchedBestRestrauntData);



        }

        catch (error) {
            console.log("Brands are not found:", error);
        }


    }

    useEffect(() => {
        getBestRestraunt();
    }, [])



    return (
        <>

            <div className="bestRestrauntMainPage">

                <span className="bestRestraunt_main_text">Best Restaurant Near Me</span>

                {(bestRestraunt == 0) ? (<Shimmer_Cities />) : < div className="bestRestraunt_page">
                    {bestRestraunt?.map((bestRestraunt, index, text) => (


                        <div className="bestRestraunt_text"> < Link className="main_text" to={`https://www.swiggy.com/city/${bestRestraunt.text.split(" ")[3]}/best-restaurants`}>
                            {bestRestraunt.text} </Link> </div> // Correctly pass props to the BestRestrauntData
                    ))}

                </div>}
            </div >



        </>
    )
}

export default BestRestraunt;

