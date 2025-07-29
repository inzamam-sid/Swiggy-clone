
// import { CDN_URL } from "../../utils/constants";



// const RestaurentCard = (props) => {
//     const {resData} = props;
    
//     console.log("Image URL:", CDN_URL + resData.cloudinaryImageId);


//     const {
//         cloudinaryImageId, 
//         name, 
//         avgRatingString, 
        
//         costForTwo, 
//         deliveryTime
//     } = resData;

//     return (
//         <div className="res-card" style={{ backgroundColor: "rgb(231 227 227)" }}>
     



//             <img
//                 className="res-logo"
//                 alt="res-logo"
               
//                 src={CDN_URL + cloudinaryImageId}

//             />

//             <h3>{name}</h3>
//              <h4>{cuisines.join(", ")}</h4> 
//             <h4>{avgRatingString} stars</h4>
//             <h4>{costForTwo}</h4>
//             <h4>{deliveryTime} minutes</h4>
//         </div>
//     );
// };


// export default RestaurentCard;


import { CDN_URL } from "../../utils/constants";

const RestaurentCard = (props) => {
    const { resData } = props;

    // ✅ Check if resData exists before using it
    if (!resData) {
        return <h3>Loading...</h3>;
    }

    console.log("Image URL:", resData?.cloudinaryImageId ? CDN_URL + resData.cloudinaryImageId : "No Image");

    const {
        cloudinaryImageId, 
        name, 
        avgRatingString,
        cuisines = [], // ✅ Default to an empty array to prevent errors
        costForTwo, 
        sla,
    } = resData;

    return (
        <div className="res-card" style={{ backgroundColor: "rgb(231 227 227)" }}>
            <img
                className="res-logo"
                alt="res-logo"
                src={cloudinaryImageId ? CDN_URL + cloudinaryImageId : "placeholder.jpg"} // ✅ Provide fallback
            />

            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4> 
            <h4>{avgRatingString} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
        </div>
    );
};

export default RestaurentCard;
