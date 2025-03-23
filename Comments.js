import React from "react";
import ReactDOM from "react-dom/client";
// import "./src/components/title"
// import Abhinav from "./src/components/title";

//  Default import-->>

import Headercomponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"







// console.log(burger);


// const heading = React.createElement("h1", {

//     id: "title",

// }, "Hello Everyone!!")

// jsx -->> javascript XML 

// jsx => React.createElement => Object => HTML(DOM)

// JSX is converted to react by a js library or a piece of javascript code that we called as BABEL

// Now we write our jsx -->>

// This whole thing is React element -->>> 


// const heading = (
//     <div>
//         <h1>Hello I am inside JSX</h1>
//         <h2>This is the second line in jsx</h2>
//     </div>
// );


// This is a functinoal component-->>

// const Title = () => (

//     <h1 id="tilte" key="102">Food Villa!!</h1>

// );

// const Name = Abhinav;






// Config Driven UI(Live Data) -- It is the method by which we got the data from the backend through the APIs calls 


// const config = [{
//     type: "corousel",
//     cards: [
//         {
//             offerName: "50% off"
//         },
//         {
//             offerName: "No Delivery Charge"
//         },

//     ],
// },
// {
//     type: "restaurants",
//     cards: [
//         {
//             name: "Burger king",
//             image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d3najev2rpzakxfvp318",
//             cusines: ["Burger", "American"],
//             Ratings: "4.2"
//         },
//         {
//             name: "KFC",
//             image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d3najev2rpzakxfvp318",
//             cusines: ["Chicken", "American"],
//             Ratings: "4.5"

//         }
//     ]
// }
// ];


// const restlist = [
//     {
//         "info": {
//             "id": "43836",
//             "name": "McDonald's",
//             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fe11ced6-89a3-4080-8610-3c743a3bb3f0_43836.jpg",
//             "locality": "MG Road",
//             "areaName": "Ashok Nagar",
//             "costForTwo": "₹400 for two",
//             "cuisines": [
//                 "Burgers",
//                 "Beverages",
//                 "Cafe",
//                 "Desserts"
//             ],
//             "avgRating": 4.1,
//             "parentId": "630",
//             "avgRatingString": "4.1",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 29,
//                 "lastMileTravel": 2.5,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "25-30 mins",
//                 "lastMileTravelString": "2.5 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2024-06-18 02:45:00",
//                 "opened": true
//             },
//             "badges": {
//                 "imageBadges": [
//                     {
//                         "imageId": "Rxawards/_CATEGORY-Burger.png",
//                         "description": "Delivery!"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "Delivery!",
//                                     "imageId": "Rxawards/_CATEGORY-Burger.png"
//                                 }
//                             }
//                         ]
//                     },
//                     "textBased": {

//                     },
//                     "textExtendedBadges": {

//                     }
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "40% OFF",
//                 "subHeader": "UPTO ₹80"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {

//                     },
//                     "video": {

//                     }
//                 }
//             },
//             "reviewsSummary": {

//             },
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {

//             }
//         },
//         "analytics": {

//         },
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "77949",
//             "name": "Burger King",
//             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_77949.JPG",
//             "locality": "Gandhi Bazar",
//             "areaName": "Basavanagudi",
//             "costForTwo": "₹350 for two",
//             "cuisines": [
//                 "Burgers",
//                 "American"
//             ],
//             "avgRating": 4.1,
//             "parentId": "166",
//             "avgRatingString": "4.1",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 24,
//                 "lastMileTravel": 3,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "20-25 mins",
//                 "lastMileTravelString": "3.0 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2024-06-17 23:59:00",
//                 "opened": true
//             },
//             "badges": {
//                 "imageBadges": [
//                     {
//                         "imageId": "Rxawards/_CATEGORY-Burger.png",
//                         "description": "Delivery!"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "Delivery!",
//                                     "imageId": "Rxawards/_CATEGORY-Burger.png"
//                                 }
//                             }
//                         ]
//                     },
//                     "textBased": {

//                     },
//                     "textExtendedBadges": {

//                     }
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "50% OFF",
//                 "subHeader": "UPTO ₹100"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {

//                     },
//                     "video": {

//                     }
//                 }
//             },
//             "reviewsSummary": {

//             },
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {

//             }
//         },
//         "analytics": {

//         },
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/burger-king-gandhi-bazar-basavanagudi-bangalore-77949",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "432976",
//             "name": "KFC",
//             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/9869efb0-ef0e-41eb-bffa-9d6e03eef55e_432976.JPG",
//             "locality": "Double Road",
//             "areaName": "Shanti Nagar",
//             "costForTwo": "₹400 for two",
//             "cuisines": [
//                 "Burgers",
//                 "Fast Food",
//                 "Rolls & Wraps"
//             ],
//             "avgRating": 4.2,
//             "parentId": "547",
//             "avgRatingString": "4.2",
//             "totalRatingsString": "1K+",
//             "sla": {
//                 "deliveryTime": 28,
//                 "lastMileTravel": 1.5,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "25-30 mins",
//                 "lastMileTravelString": "1.5 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2024-06-17 23:00:00",
//                 "opened": true
//             },
//             "badges": {

//             },
//             "isOpen": true,
//             "aggregatedDiscountInfoV2": {

//             },
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {

//                     },
//                     "textBased": {

//                     },
//                     "textExtendedBadges": {

//                     }
//                 }
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {

//                     },
//                     "video": {

//                     }
//                 }
//             },
//             "reviewsSummary": {

//             },
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {

//             }
//         },
//         "analytics": {

//         },
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/kfc-double-road-shanti-nagar-bangalore-432976",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "23846",
//             "name": "Domino's Pizza",
//             "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
//             "locality": "Rehinus Street",
//             "areaName": "Richmond Town",
//             "costForTwo": "₹400 for two",
//             "cuisines": [
//                 "Pizzas",
//                 "Italian",
//                 "Pastas",
//                 "Desserts"
//             ],
//             "avgRating": 4.3,
//             "parentId": "2456",
//             "avgRatingString": "4.3",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 25,
//                 "lastMileTravel": 2.4,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "20-25 mins",
//                 "lastMileTravelString": "2.4 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2024-06-18 02:59:00",
//                 "opened": true
//             },
//             "badges": {
//                 "imageBadges": [
//                     {
//                         "imageId": "Rxawards/_CATEGORY-Pizza.png",
//                         "description": "Delivery!"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "Delivery!",
//                                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                                 }
//                             }
//                         ]
//                     },
//                     "textBased": {

//                     },
//                     "textExtendedBadges": {

//                     }
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "₹150 OFF",
//                 "subHeader": "ABOVE ₹299",
//                 "discountTag": "FLAT DEAL"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {

//                     },
//                     "video": {

//                     }
//                 }
//             },
//             "reviewsSummary": {

//             },
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {

//             }
//         },
//         "analytics": {

//         },
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/dominos-pizza-rehinus-street-richmond-town-bangalore-23846",
//             "type": "WEBLINK"
//         }
//     },
//     {
//         "info": {
//             "id": "697144",
//             "name": "Baskin Robbins - Ice Cream Desserts",
//             "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
//             "locality": "GARUDA MALL",
//             "areaName": "MAGARATH ROAD",
//             "costForTwo": "₹250 for two",
//             "cuisines": [
//                 "Desserts",
//                 "Ice Cream"
//             ],
//             "avgRating": 4.5,
//             "veg": true,
//             "parentId": "5588",
//             "avgRatingString": "4.5",
//             "totalRatingsString": "100+",
//             "sla": {
//                 "deliveryTime": 31,
//                 "lastMileTravel": 3.8,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "30-35 mins",
//                 "lastMileTravelString": "3.8 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2024-06-17 23:00:00",
//                 "opened": true
//             },
//             "badges": {
//                 "textExtendedBadges": [
//                     {
//                         "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
//                         "shortDescription": "Perfect cake delivery",
//                         "fontColor": "#7E808C"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {

//                     },
//                     "textBased": {

//                     },
//                     "textExtendedBadges": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "",
//                                     "fontColor": "#7E808C",
//                                     "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
//                                     "shortDescription": "Perfect cake delivery"
//                                 }
//                             }
//                         ]
//                     }
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "50% OFF",
//                 "subHeader": "UPTO ₹100"
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {

//                     },
//                     "video": {

//                     }
//                 }
//             },
//             "reviewsSummary": {

//             },
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {

//             }
//         },
//         "analytics": {

//         },
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-garuda-mall-magarath-road-bangalore-697144",
//             "type": "WEBLINK"
//         }
//     },];


// props -->> It is the properties or basically the parameters which is going to be passed inside a functional components.

// const RestrauntCard = (props) => {

//     return (
//         console.log(props),
//         <div className="card">

//             <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.Items.info.cloudinaryImageId} />
//             <h2>{props.Items.info.name}</h2>
//             <h3>{props.Items.info.cuisines}</h3>
//             <h4>{props.Items.info.avgRating}</h4>

//         </div >

//     )
// };




// JSX only have one parent, means to say that there is only 'div' inside which all the things are kept, but there is a problem,that 'div' is appearing in the console also after the main div of root ,for that reason we are using React.Fragment with the opening and closing tags so that our 'div' can't be appear there. 

// const JSX = (
//     <React.Fragment>
//         <h1>Hey I am insdie react.fragment</h1>
//     </React.Fragment>
// );


// We also use <> .. </> inside for writing jsx it work same as the React.Fragment


// const JSX1 = (
//     <>
//         <h1>Hey I am inside react.fragment</h1>
//     </>
// );


// Now how we give inline css in react-->>



// const styleobj = {
//     color:"red",
// }

// const jsx2 = (
//     // Inline css -- we write our styling with the help of js obj.
//     <div style = {styleobj}>
//         Hello!!
//     </div>
// )



const AppLayout = () => {
    return (
        /*
                -Header
                  -- logo 
                  -- navbar components(right side)
                  -- cart
                -Body 
                -- Search bar
                 -- RestrauntList
                 -- Restraunt Card
                    -- prices
                    -- Images
                    -- ratings
                    -- Cuisines
                -Footer
                 - Links
                 - Refrencess  
                 - copyright
        */
        <React.Fragment>
            <Headercomponent />
            <Body />
            <Footer />
        </React.Fragment>


    )
};


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// root.render(<Headercomponent />);
root.render(<AppLayout />);

// root.render(JSX);
// root.render(JSX1)
// root.render(jsx2);




//  Restarunt_info.jsx file initial data which is written by me.



// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Shimmer_UI from "./Shimmer_ui";
// import { IMG_CDN_URL } from "../config";

// const Restraunt_info = () => {
//     const params = useParams();
//     const { resId } = params;
//     console.log(resId);

//     const [restraunt, setRestraunt] = useState({});
//     const [allMenu, setAllMenu] = useState([]);

//     useEffect(() => {
//         getRestraunt();
//     }, []);

//     async function getRestraunt() {
//         const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9634&lng=77.5855&restaurantId=${resId}`);
//         const response = await data.json();
//         console.log(response?.data);
//         console.log(response?.data?.cards?.[2]?.card?.card?.info);

//         setRestraunt(response?.data?.cards?.[2]?.card?.card?.info);
//         setAllMenu(response?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[15]?.card?.card?.itemCards ?? []);
//     }

//     return !restraunt ? (
//         <Shimmer_UI />
//     ) : (
//         <>
//             <div className="Restrauntinfo">
//                 <h1>The Id of Restraunt is: {resId}</h1>
//                 <h2>{restraunt.name}</h2>
//                 <h2>{restraunt.id}</h2>
//                 <img src={IMG_CDN_URL + restraunt.cloudinaryImageId} alt="Image" />
//             </div>

//             <div>
//                 <h1>North Indian Menu Items</h1>
//                 <ul>
//                     {allMenu.map((item, index) => (
//                         <li key={index}>{item?.card?.info?.name}</li>
//                     ))}
//                 </ul>
//                 {console.log(allMenu)}
//             </div>
//         </>
//     );
// };

// export default Restraunt_info;
