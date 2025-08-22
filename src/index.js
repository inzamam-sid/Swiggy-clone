import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import '../index.css'; // adjust the path if main.jsx is in src/
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import Body from "./components/Body";
import Cart from "./components/Cart";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";


//import Grocery from "./components/Grocery";
//import RestaurentCard from "./components/RestaurentCard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import appStore from "../utils/appStore";

// Chunking
// Code Spliting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamix import

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {

    const [userName, setUserName] = useState();

    // Authentication
    useEffect(() => {
        // Make an API call and send username and password
        const data = {
            name: "Inzamam Siddiqui",
        };
        setUserName(data.name);
    }, [])



    return ( 
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app">
                <Header/>
                <Outlet/>
                 
            
            </div>
           
        </UserContext.Provider>
         
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
              {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,

            },
                
           
             {
                path: "/cart",
                element: <Cart />,
            },
          

        ],
        errorElement: <Error />,
    },
   
]);




// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <LandingPage />,   // 🎯 Landing Page first
//   },
//   {
//     path: "/home",              // 👈 Explicitly make it /home
//     element: <AppLayout />,
//     children: [
//       {
//         path: "",               // 👈 default child of /home
//         element: <Body />,
//       },
//       {
//         path: "about",          // 👈 now becomes /home/about
//         element: (
//           <Suspense fallback={<h1>Loading....</h1>}>
//             <About />
//           </Suspense>
//         ),
//       },
    
//       {
//         path: "contact",        // 👈 now becomes /home/contact
//         element: <Contact />,
//       },
//       {
//         path: "grocery",
//         element: (
//           <Suspense fallback={<h1>Loading....</h1>}>
//             <Grocery />
//           </Suspense>
//         ),
//       },
//       {
//         path: "restaurants/:resId",
//         element: <RestaurantMenu />,
//       },
//       {
//         path: "cart",
//         element: <Cart />,
//       },
//     ],
//     errorElement: <Error />,
//   },
// ]);





const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);                                                                                                                                             