import { Outlet } from "react-router-dom";
import ProfileClass from "./profileClass.jsx";
import Profile_funct_component from "./Profile.jsx";
import React from "react";


// const About2 = () => {
//     return (
//         <>
//             <div>
//                
//             </div>

//         </>
//     )

// };

class About extends React.Component {

    constructor(props) {
        super(props);

        console.log(" Parent -- constructor !!")

    };

    componentDidMount() {
        // This is the best place to make an apis call
        console.log(" Parent -- Component did mount !!");
    };                      

    render() {

        console.log(" Parent -- render method !!")
        return (


            <div>
                <>
                    <h1>Lecture Number 07 -- finding the path</h1>
                    <Outlet />
                    <Profile_funct_component name={"Abhinav"} />
                    <ProfileClass name={"Abhinav_react"} />

                </>
            </div>
        )


    }
}

export default About;