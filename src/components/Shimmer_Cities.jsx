const Shimmer_Cities = () => {

    return (
        <>

            <div className="Shimmer_cities">
                {Array(27).fill("").map((e, index) => (<div key={index} className="Shimmer_City_Cards"></div>))}

            </div>
        </>
    )
}

export default Shimmer_Cities;