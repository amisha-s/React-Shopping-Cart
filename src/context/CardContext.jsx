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

  //Remove From Cart()
  const removeToCart=(productId,removAll=false)=>{
    setCart((prevCart)=>{
      const existingProduct=prevCart.find((data)=>data.id===productId);

      if(!existingProduct) return prevCart;

      if(removeAll || existingProduct.id==1){
        return prevCart.filter((item)=>item.id !==products.id);
      }
      else{
        return prevCart.map(item=>item.id=productId ? {...item , quantity : item.quantity-1}:item);
      }

    })


  }
  //Remove all the items in Cart
  const clearCart=()=>setCart([]);
   
    return(
         <>
    <cartContext.Provider value={products}>{props.children}</cartContext.Provider>
    </>
  )
}
    export const useCart=()=>useContext(cartContext);