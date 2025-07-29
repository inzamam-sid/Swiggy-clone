


import { useState, useEffect } from "react";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
         fetchMenu();
     }, []);

     const fetchMenu = async () => {
                 const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                const json = await data.json();
                 console.log(json);
                 setResInfo(json.data);
             };

    // return resInfo === null ? (
    //             <Shimmer />
    //          ) : (

    return (
        <div className="menu">
            <h1>{resInfo?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info?.name}</h1>
            <h2>Menu</h2>
   

            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );

};


export default RestaurantMenu;
