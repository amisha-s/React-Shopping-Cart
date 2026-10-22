import React from "react";
import { House } from 'lucide-react';
import { Link } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';


const Navbar=()=>{
    return(
        <header className="sticky top-0 bg-gray-950/95 backdrop-blur-md text-white shadow-2xl shadow-gray-950/70 border-b border-orange-900">
            <div className="mx-auto w-full max-w-7xl px-4 py-4 flex justify-between items-center">
                <Link to="/">
            <div className="flex items-center cursor-pointer space-x-3">
              <House className="w-8 h-8 text-orange-400 drop-shadow-lg" />
              <h1 className="text-4xl font-extrabold tracking-widest uppercase">WDM <span className="text-orange-400">STORE</span></h1>
            </div>
            </Link>
            <nav className="flex items-center space-x-6 ">
                <Link to="/cart" className="relative p-3 bg-orange-500/10 rounded-xl hover:bg-orange-500/20 transition duration-200 border border-orange-400/50 shadow-lg shadow-orange-500/20 cursor-pointer">
                    <ShoppingCart className="w-6 h-6 text-orange-400 "/>
                </Link>
            </nav>
            </div>
        </header>
    )
}

export default Navbar;