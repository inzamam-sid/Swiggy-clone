
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { MENU_API } from "../../utils/constants";
// import './RestaurantMenu.css';




// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);
//   const {resId} = useParams();
//   //console.log(params);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch(
//      MENU_API + resId 
//     );
//     const json = await data.json();
//     console.log(json);
//     setResInfo(json.data);
//   };

//   if (!resInfo) {
//     return <h2>Loading...</h2>; // or your <Shimmer /> component
//   }

//   const restaurantData = resInfo?.cards?.find(
//     (card) => card.card?.card?.info
//   )?.card?.card?.info;

//   const restaurantName = restaurantData?.name || "Restaurant";
//   const cuisines =
//     restaurantData?.cuisines?.join(", ") || "Cuisine Info Unavailable";
//   const costForTwoMessage = restaurantData?.costForTwoMessage || "";


//   // const {info} = resInfo?.cards?.[2]?.card?.card?.info;

//   // Menu Items
//   // const itemCards =
//   //   resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
//   //     ?.map((c) => c.card?.card?.itemCards || [])
//   //     .flat() .slice(0, 9) || [];

//   const groupedCard = resInfo?.cards?.find(
//   (c) => c.groupedCard
// )?.groupedCard;

// // Get item cards safely
// const itemCards =
//   groupedCard?.cardGroupMap?.REGULAR?.cards
//     ?.map((c) => c.card?.card?.itemCards || [])
//     .flat()
//     .slice(0, 11) || [];


//   return (
//     <div className="menu">
//       <h1>{restaurantName}</h1>
//       {/* <p>{cuisines}</p>
//       <p>{costForTwoMessage}</p> */}
//       <p className="cuisines">{cuisines}</p>
//       <p className="price-for-two">{costForTwoMessage}</p>
//       <h2>Menu</h2>


//       <ul>
//   {itemCards.map((item) => (
//     <li key={item.card.info.id}>
//       <span className="item-name">{item.card.info.name}</span>
//       <span className="price">
//         ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
//       </span>
//     </li>
//   ))}
// </ul>
      

     

      
//     </div>
//   );
// };

// export default RestaurantMenu;










//import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import "./RestaurantMenu.css";

const RestaurantMenu  = () => {

  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (!resInfo) {
    return <h2>Loading...</h2>; // Or <Shimmer /> if you have one
  }

  const restaurantData = resInfo?.cards?.find(
    (card) => card.card?.card?.info
  )?.card?.card?.info;

  const restaurantName = restaurantData?.name || "Restaurant";
  const cuisines =
    restaurantData?.cuisines?.join(", ") || "Cuisine Info Unavailable";
  const costForTwoMessage = restaurantData?.costForTwoMessage || "";

  const groupedCard = resInfo?.cards?.find((c) => c.groupedCard)?.groupedCard;

  const itemCards =
    groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.map((c) => c.card?.card?.itemCards || [])
      .flat()
      .slice(0, 11) || [];

  return (
    <div className="menu">
      <h1>{restaurantName}</h1>
      <p className="cuisines">{cuisines}</p>
      <p className="price-for-two">{costForTwoMessage}</p>
      <h2>Recommended</h2>

      <div className="menu-container">
        {itemCards.map((item) => {
          const info = item.card.info;
          return (
            <div className="menu-item" key={info.id}>
              {/* Left side */}
              <div className="menu-item-left">
                <div className="veg-icon"></div>
                {info.isBestseller && (
                  <div className="bestseller">★ Bestseller</div>
                )}
                <div className="item-name">{info.name}</div>
                <div className="item-price">
                  ₹{info.price / 100 || info.defaultPrice / 100}
                </div>
                {info.ratings?.aggregatedRating?.rating && (
                  <div className="item-rating">
                    ⭐ {info.ratings.aggregatedRating.rating} (
                    {info.ratings.aggregatedRating.ratingCountV2})
                  </div>
                )}
                {info.description && (
                  <div className="item-description">{info.description}</div>
                )}
              </div>

              {/* Right side */}
              <div className="menu-item-right">
                {info.imageId && (
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`}
                    alt={info.name}
                    className="menu-item-img"
                  />
                )}
                <button className="add-btn">ADD</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;









































