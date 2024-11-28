import { IMG_CDN_URL } from "../config.jsx";
import UserContext from "../utils/context";
import { useContext } from "react";

const Swiggycard = ({ cloudinaryImageId, name, cuisines, avgRating, locality, user }) => {


    const { user1 } = useContext(UserContext);

    return (

        <div className="card">

            <img src={IMG_CDN_URL + cloudinaryImageId} />

            <div className="heading">

                
                <h4 className="card_link1">{name}</h4>
                <h5 className="card_link2">

                    <img className="star_icon" src ="https://cdn2.iconfinder.com/data/icons/greenline/512/star-512.png" alt ="star_icon">
                       
                    
                    </img> {avgRating}</h5>


                <h5 className="card_links">{cuisines.join(",")}</h5>
                <h5 className="card_links">{locality}</h5>
                {/* <h6>{user.email}</h6>
                <h6>{user1.email}</h6> */}
            </div>

        </div>

    )
}
export default Swiggycard; 