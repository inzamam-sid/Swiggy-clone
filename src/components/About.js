import UserClass from "./UserClass.js";
import User from "./User.js";
const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            <User name = {"Inzamam (function)"}></User>
            <UserClass name = {"Inzamam (class)"} location={"Lucknow (class)"} />
        </div>
    );
};

export default About;