import { usestate, useEffect } from "react";


export const InstaMart_items = () => {

    const [Marts_items, setMartsItems] = usestate();



    






    useEffect(() => {
        getMartItems();
    }, []);


    return (
        <>
            <div className="instaMart_item">
                <h1>This is linked to instamart items page.</h1>
            </div>
        </>
    )
};

