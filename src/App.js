import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
     <Outlet/>
    </div>
  );
};

const appRoute = createBrowserRouter([
  {
   
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      
      {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  {
    path:"/restaurants/:resId",
    element:<RestaurantMenu/>
  } 
  
  ],
    errorElement:<Error/>

  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={appRoute}>
    <AppLayout />
  </RouterProvider>
);
