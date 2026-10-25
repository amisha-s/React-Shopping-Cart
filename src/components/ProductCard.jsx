import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';
import { useCart } from "../context/CardContext";

const ProductCard = ({ products }) => {
  const {addToCart}=useCart();
 
  return (
    <>
      <div className="bg-gray-900  rounded-2xl shadow-xl overflow-hidden flex flex-col h-full transition duration-500 transform border-gray-800 group hover:scale-[1.03] hover:shadow-orange-900/40">
        <Link to={`/product/${products.id}`} className="relative cursor-pointer overflow-hidden">
          <img
            src={products.image}
            alt={products.name}
            className="w-full h-56 object-cover object-center transition duration:500 group-hover:scale-110 group-hover:opacity-90"
          ></img>
          <div className="absolute bottom-0 left-0 bg-orange-600/95 text-white px-5 py-2 text-xl font-extrabold runded-tr-xl shadow-lg">
            {" "}
            ₹{products.price.toFixed(2)}
          </div>
        </Link>
        <div className="p-5 flex flex-col grow">
          <Link to={`/product/${products.id}`}>
          <h3 className="text-2xl font-extrabold text-white mb-2 cursor-pointer hover:text-orange-400 transition duration-200 line-clamp-1">{products.name}</h3>
          </Link>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3 ">{products.description}</p>
          <div className="flex items-center text-xs text-gray-500 mb-4">
            <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full font-semibold">{products.category}</span></div>
        </div>
        <button  onClick={() => addToCart(products)} className="mx-5 mb-5 flex items-center justify-center gap-2 rounded-full bg-orange-600 py-3 text-white font-bold uppercase tracking-wider shadow-lg shadow-orange-600/40 transition duration-300 hover:bg-orange-500 cursor-pointer">
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
        </button>
      </div>
    </>
  );
};

export default ProductCard;
