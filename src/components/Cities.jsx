// import { useState, useEffect } from "react";
// import Shimmer_Cities from "./Shimmer_Cities";


// const Cities = ({ text }) => {

//     const [cities, setCities] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [pageSize] = useState(10);


//     useEffect(() => {
//         getCities();
//     }, [currentPage]);

//     async function getCities() {


//         try {

//             const citiesData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

//             const json = await citiesData.json();

//             const fetchedCities = json?.data?.cards[10]?.card?.card?.cities || [];

//             setCities(fetchedCities);

//             console.log(json?.data?.cards[10]?.card?.card?.cities);


//         }

//         catch (error) {

//             console.log("data is not there:", error);

//         }

//     }



//     return (
//         <>



//             <div className="city_section">
//                 {(cities.length === 0) ? (<Shimmer_Cities />) : (cities.map((city, index) => <Cities key={index} {...city} />))}
//             </div>

//             {/* <p className="cities_text">{text}</p> */}



//         </>
//     )
// }

// export default Cities;


import React, { useState, useEffect } from "react";
import Shimmer_Cities from "./Shimmer_Cities";
import { Link } from "react-router-dom";


const Cities = ({ text, link }) => {

    const [cities, setCities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);

    const pageSize = 28; // Number of cities per page

    useEffect(() => {
        fetchCities();
    }, [currentPage]);

    useEffect(() => {
        fetchTotalPages(); // Fetch total pages only once, outside the pagination updates
    }, []);

    const fetchTotalPages = async () => {
        try {
            const response = await fetch(
                `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
            );
            const json = await response.json();
            const totalCities = json?.data?.cards[10]?.card?.card?.cities?.length || 0;
            setTotalPages(Math.ceil(totalCities / pageSize)); // Calculate total pages once
        } catch (error) {
            console.error("Error fetching total pages:", error);
        }
    };

    const fetchCities = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&page=${currentPage}&pageSize=${pageSize}` 
            );
            const json = await response.json();
            const fetchedCities = json?.data?.cards[10]?.card?.card?.cities || [];
            setCities(fetchedCities.slice((currentPage - 1) * pageSize, currentPage * pageSize)); // Display current page data
        } catch (error) {
            console.error("Error fetching cities:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>


            <span className="exploreSwiggy">🍕🍔Explore in All Cities</span>


            <div className="city_section">

                {loading ? (
                    <Shimmer_Cities />
                ) : cities.length ? (
                    cities.map((city, index) => <Link className="city_link " to={`https://www.swiggy.com/city/${city.text}`}><div className="city_names" key={index}>{city.text}</div></Link>)
                ) : (
                    <p>No cities found.</p>
                )}
            </div>


            <div className="pagination_controls">

                <button className="button" onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                {/* <span>
                    Page {currentPage} of {totalPages}
                </span> */}
                <button className="button" onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>

            </div>

        </div >
    );
};

export default Cities;



