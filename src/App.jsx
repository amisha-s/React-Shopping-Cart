import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Chekout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
// import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element:<div>
      <Navbar/>
        <ProductList />
        <Footer/>
    </div> 
  
  },
  {
    path:'/product/:id',
    element:<div>
      <Navbar/>
      <ProductDetails/>
      <Footer/>
    </div>
    
  },
  {
    path:'/cart',
    element:<div>
      <Navbar/>
      <Cart/>
      <Footer/>
    </div>
  },
  {
    path:'/checkout',
    element:<div>
      <Navbar/>
      <Checkout/>
      <Footer/>
    </div>
  }

]);

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-950">
        <RouterProvider router={router} />
      </div>
    </>
  );
};
export default App;
