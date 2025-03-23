const Footer = () => {


    const handlePlayStoreButton = () => {

        window.open("https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader");

    }

    const handleAppStoreButton = () => {

        window.open("https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage");

    }

    const handlelinkedinbutton = () => {
        window.open("https://www.linkedin.com/company/swiggy-in/");
    }

    const handleinstabutton = () => {
        window.open("https://www.instagram.com/swiggyindia/?hl=en");
    }

    const handlefacebookbutton = () => {
        window.open("https://www.facebook.com/swiggy.in/");
    }

    const handlePininterestbutton = () => {
        window.open("https://in.pinterest.com/swiggyindia/");
    }

    const handletwitterbutton = () => {
        window.open("https://x.com/Swiggy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor");
    }




    // const handleNextPage = () => {
    //     setCurrentPage((prevpage) => prevpage + 1);
    // }

    // const handlePreviousPage = () => {
    //     setCurrentPage((prevpage) => Math.max(prevpage - 1, 1));
    // }


    return (

        <div className="footer">

            <div className="footer_text">

                For better experience,download the Swiggy app now

                <img className="footer1_img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="Playstore" onClick={handlePlayStoreButton} />

                <img className="footer2_img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="appstore" onClick={handleAppStoreButton} />


            </div>

            <div className="footer_body">

                <div className="box1 box ">

                    <img className="title_img swiggy_logo" src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" alt="#swiggylogo" />

                    <p className="swiggy_text">Swiggy</p>

                    <p className="swiggy_limited">@2025 Swiggy limited</p>

                </div>

                <div className="box2 box ">

                    <p>company</p>
                    <p>About</p>
                    <p>Swiggy Corporate</p>
                    <p>Carees</p>
                    <p>Team</p>
                    <p>Swiggy One</p>
                    <p>Swiggy Dineout</p>
                    <p>Swiggy Genie</p>
                    <p>Swiggy InstaMart</p>

                </div>


                <div className="box3 box ">

                    <p>Available in: </p>
                    <p>Bangalore</p>
                    <p>Gurgaon</p>
                    <p>Hyderabad</p>
                    <p>Delhi</p>
                    <p>Mumbai</p>
                    <p>Pune</p>
                    <p>...</p>

                </div>


                <div className="box4 box ">


                    <div className="lifeatSwiggy">

                        <p >Life at Swiggy</p>
                        <p className="part4">Explore with Swiggy</p>
                        <p className="part4">Swiggy News</p>
                        <p className="part4">Snackables</p>

                    </div>



                    <div className="social_links">

                        <p className="social_lnk_heading">Social Links</p>

                        <img className="social_icons" src="https://media-assets.swiggy.com/h_32/portal/m/seo/icon-linkedin.png" alt="linked_in" onClick={handlelinkedinbutton} />


                        <img className="social_icons" src="https://media-assets.swiggy.com/h_32/portal/m/seo/icon-instagram.png" alt="insta" onClick={handleinstabutton} />


                        <img className="social_icons" src="https://media-assets.swiggy.com/h_32/portal/m/seo/icon-facebook.png" alt="facebook" onClick={handlefacebookbutton} />


                        <img className="social_icons" src="https://media-assets.swiggy.com/h_32/portal/m/seo/icon-pinterest.png" alt="pininterest" onClick={handlePininterestbutton} />


                        <img className="social_icons" src="https://media-assets.swiggy.com/h_32/portal/m/seo/icon-twitter.png" alt="twitter" onClick={handletwitterbutton} />

                    </div>





                    {/* <div className="pagination_control">

                        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                            Previous
                        </button>

                        <button onClick={handleNextPage}>

                            Next
                        </button>

                    </div> */}




                </div>

            </div>

        </div>

    )
};



export default Footer;



