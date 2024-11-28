import { Link } from "react-router-dom"

const Title = () => {
    return (
        <>

            <div className="title">
                <Link to="./title" >
                    {/* <img className="title_img" src="https://banner2.cleanpng.com/20180406/bbw/avgfyf0pz.webp" alt="Image is not here" /> */}
                    <img className="title_img" src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" alt="Image is not here" />
                </Link>
            </div>
        </>
    )
}

export default Title;