import { createContext,useContext, useState } from "react";
import { initialProducts } from "../data/product";

const cartContext=createContext();

export const CartProvider = (props) => {
  
  const [cart,setCart]=useState([])
   const products=initialProducts;
//Add to Cart
  const addToCart=(products)=>{
    setCart((prevCart)=>{
      const existingProduct=prevCart.find((data)=>data.id===products.id);
      if(existingProduct){
        return prevCart.map((item)=>item.id==products.id ?{...item,quantity:item.quantity+1}:item);
      }
      else{
        return [...prevCart,{...products,quantity:1}]
      }

    })
  }
   
    return(
         <>
    <cartContext.Provider value={products}>{props.children}</cartContext.Provider>
    </>
  )
}
    export const useCart=()=>useContext(cartContext);