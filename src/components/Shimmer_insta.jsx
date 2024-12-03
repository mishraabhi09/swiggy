const Shimmer_ui_insta = () => {
    
    return (
        <>

            <div className ="instaMart_body">
                {Array(20).fill("").map((e, index) => (<div key={index} className="insta_card"></div>))}

            </div>
        </>
    )
}

export default Shimmer_ui_insta;