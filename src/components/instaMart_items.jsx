import React, { useState, useEffect } from "react";
import InstaMart_card from "./instaMart_card";
import Shimmer_ui_insta from "./Shimmer_insta.jsx";



export const InstaMart_items = () => {


    // State to manage search input-->>

    const [searchInput, setSearchInput] = useState("");



    // State to manage mart items-->>

    const [MartItems, setMartsItems] = useState([]); // Initialize with an empty array



    // State to manage filtered mart items-->>

    const [filteredMartItems, setFilteredMartItems] = useState([]);



    // Function to fetch mart items from API-->>

    async function getMartItems() {

        try {
            const data = await fetch("https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP");
            const response = await data.json();
            console.log(response?.data);

            // Set the mart items state-->>

            const items = response?.data?.widgets[1]?.data || [];
            setMartsItems(items);
            setFilteredMartItems(items);

            console.log(items);
        }

        catch (error) {
            console.log("Mart data is not coming", error);
        }
    }



    // Here we define a Filter function which search mart items based on search input-->>

    function filterMartData(search, items) {
        return items.filter(item =>
            item.displayName.toLowerCase().includes(search.toLowerCase())
        );
    }

    // useEffect to fetch mart items on component mount-->>

    useEffect(() => {
        getMartItems();
    }, []);



    return (
        <div className="instaMart_item">
            <input
                type="text"
                className="input_instaMart"
                placeholder="Search your item"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="btn" onClick={() => {

                // Need to filter the data-->>

                const data = filterMartData(searchInput, MartItems);
                console.log(data);
                setFilteredMartItems(data);

            }}>
                Search
            </button>


            {(MartItems==0) ? (<Shimmer_ui_insta/>) : < div className="instaMart_body">
                {filteredMartItems?.map((MartItem) => (
                    <InstaMart_card key={MartItem?.nodeId} {...MartItem} /> // Correctly pass props to the InstaMart_card
                ))}
            </div>}
            
        </div >
    );
};

