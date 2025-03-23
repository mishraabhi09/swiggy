import { useState, useContext } from "react";
// import Logo from "../assets/img/foodvilla.jpeg";
import { Link } from "react-router-dom";
import Title from "./title.jsx";
import UserContext from "../utils/context.jsx";
import { useSelector } from "react-redux";




// Single page Application -->> SPA
// -->> client side routing
// -->> Server side routing

// const Title = () => (
//     <Link to="/title">
//         <img scr="https://png.pngitem.com/pimgs/s/60-608742_vizi-e-delizie-catering-empoli-logo-for-catering.png" alt="Image" />
//     </Link>
//);


const Headercomponent = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);



    // we are taking "user1" in curly braces becoz we import it and it is coming in the object form so we are destructuring it.
    const { user1 } = useContext(UserContext);


    const cartItems = useSelector(store => store.cart.items);

    console.log(cartItems);


    return (



        <div className="Header">



            {/* When one component is used inside other component then it is called as component composition */}
            {/* We write heading inside our curly braces because its working like a normal variable in react */}
            {/* {heading} */}
            {/* {We can write any piece of js code inside this curly braces and it will work} */}
            {/* for example */}
            {/* {console.log("Hello I am inside jsx and we write anything in the curly braces")} */}
            {/* <h1>This is Inside heading 1st</h1>
            <h2>Hello I am the second line of functional component</h2> */}




            <Title />


            <div className="navbar" >
                <ul>
                    <Link className="navbar_links" to="/Home">

                        <li>Home</li>


                    </Link>


                    <Link className="navbar_links" to="/about"><li>About</li></Link>
                    <Link className="navbar_links" to="/Contact"><li>Contact</li></Link>
                    <Link className="navbar_links" to="/Instamart"><li>InstaMart</li></Link>
                    <Link className="navbar_links" to="/Cities"><li>Cities</li></Link>
                    <Link className="navbar_links" to="/Cart"><li>Cart - {cartItems.length}</li></Link>
                </ul>
            </div>

            {/* {user1.name} */}

            {isLoggedIn ?
                (<button
                    className="btn" onClick={() => setIsLoggedIn(false)}>Sign In</button>)
                :
                (<button
                    className="btn" onClick={() => setIsLoggedIn(true)}>Sign Out</button>)}



        </div>


    )
};


export default Headercomponent;

