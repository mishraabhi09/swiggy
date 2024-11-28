import React from "react";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        // This is the way how you can make the state variables in class based components-->
        this.state = {
            count: 0,

        };
        console.log(" Child -- constructor")
    };

    componentDidMount() {
        console.log("Child -- component Did Mount")
    };


    render() {

        console.log("Child -- render")

        const { count } = this.state;
        return (
            <div>
                <h1>This is linked to our class Based component!!</h1>
                <h2>{this.props.name}</h2>
                <h2>count: {count}</h2>
                <button onClick={() => {
                    // we do not mutate state dircetly      
                    // Never do (this.state) 
                    this.setState = ({

                        count: 1,

                    });
                }}>SetCount</button>
            </div>
        )
    }
}


export default Profile;