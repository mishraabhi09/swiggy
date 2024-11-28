import { createContext } from "react";


const UserContext = createContext({

    user1: {
        name: "Dummy data",
        email: "support@gmail.com"
    }
})

export default UserContext;