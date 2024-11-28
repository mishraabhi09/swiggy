const Shimmer_UI = () => {
    return (
        <>
        <div className = "Restraunt_list">
            {Array(20).fill("").map((e , index)=>(<div key = {index} className = "shimmer-card"></div>))}
        </div>
        </>
    )
};

export default Shimmer_UI;