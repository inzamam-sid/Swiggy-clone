import React from "react";
import User from "./User";
import { userInfo } from "os";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            userInfo:{
                name: "Dummy",
                location: "default",
                
            },
        };
        //console.log("Child constructor");
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/inzamam-sid");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
        console.log(json);
       
    }
    
    render(){
        const {name, location, avatar_url} = this.state.userInfo;
        console.log("Child render");
        return(
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @siddiqui319</h4>
            </div>
        )
    }
}

export default UserClass;