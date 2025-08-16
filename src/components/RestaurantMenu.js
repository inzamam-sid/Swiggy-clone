//import { useState, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import "./RestaurantMenu.css";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu  = () => {

  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const dummy = "Dummy data";

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

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
      console.log("Restaurant Menu",groupedCard?.cardGroupMap?.REGULAR?.cards);
      const categories = groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
      //console.log(categories);



    return (
      <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{restaurantName}</h1>
      <p className="font-bold text-lg">{cuisines} - {costForTwoMessage}</p>
     {/* categories accordions */}
     {categories.map((category, index) => (
      // This is the constrol component
      <RestaurantCategory
        key={category?.card?.card?.title} 
        data={category?.card?.card}
        showItems={index === showIndex ? true : false}
        setShowIndex={() => setShowIndex(index)}
        dummy = {dummy}
      />
    ))}

      </div>
    );


  // return (
  //   <div className="menu">
  //     <h1>{restaurantName}</h1>
  //     <p className="cuisines">{cuisines}</p>
  //     <p className="price-for-two">{costForTwoMessage}</p>
  //     <h2>Recommended</h2>

  //     <div className="menu-container">
  //       {itemCards.map((item) => {
  //         const info = item.card.info;
  //         return (
  //           <div className="menu-item" key={info.id}>
  //             {/* Left side */}
  //             <div className="menu-item-left">
  //               <div className="veg-icon"></div>
  //               {info.isBestseller && (
  //                 <div className="bestseller">★ Bestseller</div>
  //               )}
  //               <div className="item-name">{info.name}</div>
  //               <div className="item-price">
  //                 ₹{info.price / 100 || info.defaultPrice / 100}
  //               </div>
  //               {info.ratings?.aggregatedRating?.rating && (
  //                 <div className="item-rating">
  //                   ⭐ {info.ratings.aggregatedRating.rating} (
  //                   {info.ratings.aggregatedRating.ratingCountV2})
  //                 </div>
  //               )}
  //               {info.description && (
  //                 <div className="item-description">{info.description}</div>
  //               )}
  //             </div>

  //             {/* Right side */}
  //             <div className="menu-item-right">
  //               {info.imageId && (
  //                 <img
  //                   src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`}
  //                   alt={info.name}
  //                   className="menu-item-img"
  //                 />
  //               )}
  //               <button className="add-btn">ADD</button>
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
};

export default RestaurantMenu;









































