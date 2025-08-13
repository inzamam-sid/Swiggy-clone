import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import { useState, useEffect } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";


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

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" 
                src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus? "🟢" : "🔴"}</li>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About US</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact US</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button
                     className="login"
                      onClick={()=>{
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                          //console.log(btnNameReact)
                        }}
                           >{btnNameReact}
                           </button>
                </ul>

            </div>
        </div>
    );
};

export default Header;