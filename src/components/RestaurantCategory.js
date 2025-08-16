
import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {

    const handleClick = () =>{
        // setShowItems(!showItems);
        setShowIndex();

    };
    return(
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer"  
                onClick={handleClick}>
                <span className="font-bold text-lg">{data?.title} ({data?.categories[1]?.itemCards?.length})</span>
                <span>⬇️</span>
                 </div>
                 { showItems && 
                 <ItemList
                        items={
                            data?.itemCards ||
                            data?.categories?.flatMap(category => category?.itemCards) ||
                            []
                        }
                        dummy={dummy}
                />}
               
            </div>
            {/* Accordion Body */}
            
        </div>
    );
}
export default RestaurantCategory;