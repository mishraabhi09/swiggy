import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import { addItem } from "../utils/cartslice.jsx";
import { useDispatch } from "react-redux";
import Shimmer_UI from "./Shimmer_ui";



const Restraunt_info = () => {

    const params = useParams();
    const { resId } = params;
    console.log(resId);

    const [restraunt, setRestraunt] = useState(null);
    const [allMenu, setAllMenu] = useState([]);

    const dispatch = useDispatch();



    // const handleAddItem = () =>{  
    //    dispatch(action(which action you want to dispatch)("data"))
    //
    //
    // }


    // const handleAddItem = () => {
    //     dispatch(addItem("Grapes"));
    // }

    const addFoodItem = (item) => {

        dispatch(addItem(item));

    }



    // const handleRemoveItem = () => {
    //     dispatch(removeItem());
    // }



    // const handleClearCart = () => {
    //     dispatch(clearCart());
    // }



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
            console.log(menuCards);
        }
        catch (error) {
            console.error("Failed to fetch restaurant data", error);
        }
    }

    return !restraunt ? (
        <Shimmer_UI />
    ) : (
        <>
            <div className="Restrauntinfo">


                {/* <h1>The Id of Restraunt is: {resId}</h1> */}
                {/* <h2 className="">{restraunt.id}</h2> */}

                <div className="img_name">

                    <h2 className="res_name">{restraunt.name}</h2>

                    {/* <h5>{restraunt.slugString}</h5> */}

                    <img className="res_img" src={IMG_CDN_URL + restraunt.cloudinaryImageId} alt="Image" />



                </div>



                <div className="info_part">

                    <h5 className="res_cuisines">{restraunt.cuisines?.join(",")}</h5>

                    <h5 className="res_rating">

                        <img className="star_icon" src="https://cdn2.iconfinder.com/data/icons/greenline/512/star-512.png" alt="star_icon">
                        </img>

                        {restraunt.avgRating}


                    </h5>

                    <h5 className="res_locality">{restraunt.city}</h5>

                    <h5 className="res_locality"> Outlet : {restraunt.locality}</h5>

                    <h6 className="res_locality">{restraunt.costForTwoMessage}</h6>

                    <h6 className="res_locality">{restraunt.sla.deliveryTime} mins</h6>



                </div>


            </div>




            {/* <div>
                <button className="btn" onClick={() => handleRemoveItem()}>Remove</button>
            </div>


            <div>
                <button className="btn" onClick={() => handleClearCart()}>Clear Cart</button>
            </div> */}



            <div className="Menu">

                <h1 className="recommendation">Recommended</h1>

                <ul>
                    {allMenu.map((item, index) => (

                        <li className="menu_items"


                            key={index}>

                            <div className="menu_names">{item?.card?.info?.name}</div>



                            <div className="">


                                <img className="menu_img" src={IMG_CDN_URL + item?.card?.info?.imageId}></img>

                                <button className="add_food_button" onClick={() => addFoodItem(item?.card?.info.name)}>Add</button>


                            </div>



                        </li>



                    ))}
                </ul>
            </div >
        </>
    );

}

export default Restraunt_info;
