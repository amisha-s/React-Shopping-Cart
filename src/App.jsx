import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Chekout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
// import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path:'/product/:id',
    element:<ProductDetails/>
  },
  {
    path:'/cart',
    element:<Cart/>
  },
  {
    path:'/checkout',
    element:<Chekout/>
  }

]);

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-950">
        <Navbar />
        <RouterProvider router={router} />
      </div>
    </>
  );
};
export default App;
