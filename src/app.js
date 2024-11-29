import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Headercomponent from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import Cart from "./components/cart.jsx";
import Title from "./components/title.jsx";
import Restraunt_info from "./components/Restraunt_info.jsx";
import Profile from "./components/Profile.jsx";
import Shimmer_UI from "./components/Shimmer_ui.jsx";
import Store from "./utils/store.jsx";



// Chunking 
// code spilliting  
// dynamic Import
// On Demand Loading
// Lazy Loading
// Dynamic Building


const InstaMart = lazy(() => import(("./components/instamart.jsx")));

// Upon dynamic loading or we can say lazy loading -->> Upon render when does not found the component the asked page then it "suspend" the process at that particular moment .

// And when the data is available or code is available then it does reconciliation process and loades it dynamically.

// fallback is something which is used to show the content, which you want to show untill the data is loaded by suspense.

// Basically lazy loading is a promise which is resolved by suspense when the data is loaded.


const AppLayout = () => {

    const [user, setUser] = useState({
        name: "Abhinav",
        email: "XYZ@gmail.com"
    })

    // const InstaMart = lazy(() => import("./components/instamart.jsx")); --->> 
    // Never ever do dynaminc loading inside our components.

    return (


        <Provider store={Store}>

            <Headercomponent />
            {/* OUTLET is something which is used to show the content between the header and footer which routerprovider gives us. */}
            {/* All the childrens will always goes in the outlet */}
            <Outlet />
            <Footer />

            
        </Provider>



    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body user={({
                    name: "Abhinav",
                    email:
                        "ABhinav@gmail.com"
                }
                )} />
            },
            {
                path: "/about",
                element: <About />,
                children: [{
                    path: "profile",
                    element: <Profile />
                },
                ],


            },
            {
                path: "/Contact",
                element: <Contact />,
            },
            , {
                path: "/Cart",
                element: <Cart />
            },
            {
                path: "/Restraunt_info/:resId",
                element: <Restraunt_info />
            },
            {
                path: "/Instamart",
                element: <Suspense fallback={<Shimmer_UI />}>
                    <InstaMart />
                </Suspense>
            }


        ]
    },
    {
        path: "/Home",
        element: <Home />
    },
    {
        path: "/tilte",
        element: <Title />
    }


])


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter} />)

