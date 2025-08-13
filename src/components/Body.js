import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
//import { constants } from "buffer";
//import resList from "../../utils/mockData";
// //import resList from "../../utils/mockData";


const Body = () => {
    // Local State Variable - super powerfull variable
    const [listOfRestaurants, setListOfRestraunts] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");
    // Whenever state variables update, react triggers a reconcilation cycle(re-render the component).
    console.log("Body Rendered");

    useEffect(() => {
        fetchData();
    }, []);
        const fetchData = async () => {
            const data = await fetch(
                    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );

            const json = await data.json();

                // Collect restaurants from multiple cards
            let restaurants = [];

            json?.data?.cards?.forEach((card) => {
                const resList =
                card?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
                restaurants = [...restaurants, ...resList];
            });

                // Now restaurants array will have more than 20 items
                setListOfRestraunts(restaurants);
                setFilteredRestaurant(restaurants);
                };



               const onlineStatus = useOnlineStatus();
               if(onlineStatus === false) return (
                <h1>Look like you're ofline!! check your internet connection</h1>
               );
    
    //// Conditional rendering           
    // if(listOfRestaurants.length === 0){
    //     return ;
    // } 
    return listOfRestaurants.length === 0 ? <Shimmer/>:  (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}onChange={(e) => {setSearchText(e.target.value);}}/>
                    
                    <button onClick={()=> {
                        {/* Filter the restraunt cards and update the UI */}
                        console.log('SearchText for restaurant',searchText);
                    //    const filteredRestaurant = listOfRestaurants.filter((res)=>res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.toLowerCase().includes(searchText.toLowerCase()));
                            const filteredRestaurant = listOfRestaurants.filter((res) =>
                            res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                                );
                        setFilteredRestaurant(filteredRestaurant);

                       
                    }}>
                        Search</button>
                </div>
                <button
                className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res?.info?.avgRating && res.info.avgRating > 4
                    );
                    
                     setListOfRestraunts(filteredList);
                }}
               >
                Top Rated Restaurents
                </button>
            </div>
           

 
  <div className="res-container">

        {/* {listOfRestaurants.map((res, index) => (
    <RestaurentCard 
        key={index} 
        resData = {res.restaurants[0].info} // 
    />
))} */}


{/* {listOfRestaurants?.length > 0 ? (
    listOfRestaurants.map((res, index) => ( */}
    {filteredRestaurant?.length > 0 ? (
    filteredRestaurant.map((res, index) => (

        <Link key={res?.info?.id} to={"/restaurants/" + res?.info?.id}>
  <RestaurentCard resData={res?.info} />
</Link>
    ))
) 
: 
(
     <h3>Loading Restaurants...</h3>
      // Show fallback UI
)
}


    
 </div>


        </div>
    );

 


}

export default Body;

