import { useState } from "react";
const User = ({name}) =>{
    const [count] = useState(0);
    const [count1] = useState(1);
    return(
            <div className="user-card">
               <h2>Count: {count}</h2>
                <h2>Count: {count1}</h2>
                <h2>Name: {name}</h2>
                <h3>Location: Lucknow</h3>
                <h4>Contact: @siddiqui319</h4>
            </div>
        )
    
}
export default User;