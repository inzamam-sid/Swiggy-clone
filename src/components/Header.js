import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";





const Header = () => {
    //let btnName = "Login"; 

    const [btnNameReact, setBtnNameReact ] = useState("Login");
    console.log("Header render");
    const onlineStatus = useOnlineStatus();

    // If no dependency array => useEffect is called on every render
    // If dependency array is empty = [] => useEffect is called on initial render(just one)
    // If dependency array is [btnNameReact] = > called everything btnNameReact is updated
    useEffect(() => {
        console.log("useEffect called");
    }, [btnNameReact]);

    const { loggedInUser } = useContext(UserContext);
    //console.log(loggedInUser);

    // Subscribing to store using a Selector
    const cartItems = useSelector((store) => store.Cart.items);
    console.log(cartItems);


    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-56" 
                src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4 font-bold">Online Status: {onlineStatus? "🟢" : "🔴"}</li>
                    <li className="px-4 font-bold">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 ">
                        <Link to="/about">About US</Link>
                    </li>
                    <li className="px-4 ">
                        <Link to="/contact">Contact US</Link>
                    </li>
                    <li className="px-4 ">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    {/* <li className="px-4">
                        <Link to="/profile">Profile</Link>
                    </li> */}
                    <li className="px-4 ">
                        <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                    </li>

                    <button
                     className="login "
                      onClick={()=>{
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                          //console.log(btnNameReact)
                        }}
                           >{btnNameReact}
                           </button>
                           <li className="px-4">{loggedInUser}</li>
                </ul>

            </div>
        </div>
    );
};

export default Header;