// basically we use something called lazy loading and it comes from the react library as a named import ..


import { React, useState } from "react";
import { InstaMart_items } from "./instaMart_items.jsx"


const Section = ({ description, isVisible, setIsVisible }) => {



    return (
        <>



            <div className="InstaMart_section">

                {isVisible

                    ?

                    <button
                        className="instamart_button"
                        onClick={() => setIsVisible()}>Hide</button>

                    :

                    <button
                        className="instamart_button"
                        onClick={() => setIsVisible()}>Show</button>}



                {isVisible && <p>{description}</p>}



            </div>

        </>
    );
};


export const InstaMart = () => {

    const [visibleSection, setIsVisibleSection] = useState("about")

    return (
        <>
            <div>

                <Section className="Instamart"



                    description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}

                    isVisible={visibleSection == "about"}
                    setIsVisible={() => setIsVisibleSection("about")}
                />




                <Section className="Instamart"

                    description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}
                    isVisible={visibleSection == "team"}
                    setIsVisible={() => setIsVisibleSection("team")}
                />


                <Section className="Instamart"

                    description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}

                    isVisible={visibleSection == "career"}
                    setIsVisible={() => setIsVisibleSection("career")}
                />

                {/* Instamart cart data is coming from this component */}


                <InstaMart_items />

            </div >
        </>
    )
}

{/* This is prop drilling -->> we pass title , description and footer as a prop in section component */ }







export default InstaMart;