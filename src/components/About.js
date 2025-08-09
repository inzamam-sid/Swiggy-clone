import UserClass from "./UserClass.js";
import User from "./User.js";
import { Component } from "react";


    class About extends Component{
        constructor(props){
            super(props);
            console.log("Parent constructor call");
        }
    render() {
        console.log("Parent render");
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            <User name = {"Inzamam (function)"}></User>
            <UserClass name = {"Inzamam (class)"} location={"Lucknow (class)"} />
        </div>
    );
}
    }


export default About;