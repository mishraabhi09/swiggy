import { IMG_CDN_URL } from "../config";

const InstaMart_card = ({ imageId, displayName, nodeId, nodeType }) => {

    return (
        <>

            <div className="insta_section">


                <img className="insta_image" src={IMG_CDN_URL + imageId} />
                <h6 className="insta_displayname">{displayName}</h6>



            </div>

        </>
    )
}

export default InstaMart_card;