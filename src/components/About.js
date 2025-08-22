import UserClass from "./UserClass.js";
//import User from "./User.js";
import { Component } from "react";
import UserContext from "../../utils/UserContext"; // ✅ only one ".." needed here



    class About extends Component{
        constructor(props){
            super(props);
            //console.log("Parent constructor call");
        }

    
    render() {
        //console.log("Parent render");
    return (
        <div>
            <h1 className="flex items-center justify-center font-bold text-lg">About</h1>
            <div className="flex items-center justify-center font-bold text-lg">
                loggedIn User
                <UserContext.Consumer>
                     {({ loggedInUser }) => (
                        <h1 className="text-xl font-bold">{loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
            </div>
            <h2 className="flex items-center justify-center font-bold text-lg">This is Namaste React Web Series</h2>
            {/* <User name = {"Inzamam (func
            tion)"}></User> */}
            <div className="flex items-center justify-center p-4 m-auto font-bold ">
            <UserClass name = {"Inzamam (class)"} location={"Lucknow (class)"} />
            </div>
        </div>
    );
}
    }


export default About;