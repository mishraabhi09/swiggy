import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { filterdata } from "../utils/helper.jsx";
import Swiggycard from "./justSwiggy.jsx";
import Shimmer_UI from "./Shimmer_ui.jsx";
import BestRestraunt from "./BestRestraunt.jsx";


// what/why are State??
// what/why are Hooks??

// Hooks are basically normal function which are used to create the local state variable in react with the help of hooks function like below ,one of the hook function is used that is useState().

// What/why are usestate ??

// Function of usestate is to create state variable 



const Body = ({ user }) => {

    // const searchtext = "kfc";

    // This is the way to create the local state variable in react with the helps of hook function(useState)-->> 

    // set -->> This function gives the functionality to search the text.

    const [searchInput, setSearchInput] = useState("Search for restaurants"); // => returns [variable_name,function to update the variable]

    // const [newRestraunt, setNewRestraunt] = useState(apidata);

    const [allRestraunt, setallRestraunt] = useState([]);

    const [filteredRestraunt, setfilteredRestraunt] = useState([]);

    // const restraunt = useRestraunt();


    // Never ever put the useState hook inside the if else condition and also in inside the for loop.

    // for example-->>

    // if(){
    //        const [newRestraunt, setNewRestraunt] = useState(apidata);  }

    // This is completely wrong way !!


    // empty dependency array -->> once after render
    // dep array [searchtext] -->> once after render + everytime my searchtext
    // dep array [newrestraunt] -->> once after render + everytime my restraunt called
    // if we dont pass anything in our useEffect function i.e it means if the dependency array is not there, then it will be called after render

    useEffect(() => {
        getrestraunt();
    }, []);




    async function getrestraunt() {

        try {

            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9753&lng=77.591&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");


            const json = await data.json();

            console.log(json);

            setallRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setfilteredRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }

        catch (error) {

            console.log("Fetching api data :", error);
        }
    }
    console.log("render")



    // conditinal rendering -->>

    // if newRestraunt is '0' then we will show -->> shimmeer ui loading
    // if newRestraunt is not zero then we will show -->> fetched api data



    //   Early return -- >>


    if (!allRestraunt) return null;


    return allRestraunt == 0 ? (<Shimmer_UI />) : (

        <>
            <div>

                <input type="text"
                    className="search-bar"
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e) =>
                        // (e).target.value -->> Gives whatever you write in input
                        setSearchInput(e.target.value)}

                />


                <button className="btn" onClick={() => {


                    // need to filter the data -->> 


                    const data = filterdata(searchInput, allRestraunt)

                    // Update the state -->> newRestraunt

                    console.log(data);


                    setfilteredRestraunt(data);

                }}>

                    Search

                </button>
            </div >



            <div className="Restraunt_list">


                {(Array.isArray(filteredRestraunt)) ? filteredRestraunt.map((restraunt) => {
                    return <Link className="restraunt_link " to={"/Restraunt_info/" + restraunt.info?.id} key={restraunt.info?.id} ><Swiggycard {...restraunt.info} user={user} /> </Link>
                }) : console.log("Filtered Restraunts are :", filteredRestraunt)};

                {console.log(Array.isArray(allRestraunt))}
                {console.log(Array.isArray(filteredRestraunt))}


                <BestRestraunt />



            </div >
        </>
    )
};

export default Body;
