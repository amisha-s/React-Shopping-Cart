import { createContext,useContext, useMemo, useState } from "react";
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

  //Remove From Cart()
  const removeToCart=(productId, removeAll = false)=>{
    setCart((prevCart)=>{
      const existingProduct=prevCart.find((item)=>item.id===productId);

      if(!existingProduct) return prevCart;

      if(removeAll || existingProduct.quantity <= 1){
        return prevCart.filter((item)=>item.id !== productId);
      }

      return prevCart.map((item)=>
        item.id === productId ? {...item, quantity: item.quantity - 1} : item
      );
    })
  }
  //Remove all the items in Cart
  const clearCart=()=>setCart([]);

  const cartCount = useMemo(
  () => cart.reduce((total, item) => total + item.quantity, 0),
  [cart]
);

  const cartTotal=useMemo(
    ()=>cart.reduce((total,item)=>total + item.price *item.quantity,0),
    [cart]
  );
      console.log(cart)
    return(
         <>
      
    <cartContext.Provider value={{products,cart,addToCart,removeToCart,clearCart,cartCount,cartTotal}}>{props.children}</cartContext.Provider>
    </>
  )
}
    export const useCart=()=>useContext(cartContext);