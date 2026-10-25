import React from 'react'
import { useCart } from '../context/CardContext'
import { X } from 'lucide-react'

const CartItem = ({item}) => { 
  const {addToCart,removeToCart}=useCart();
  const increaseQ =()=> addToCart(item);
  const decreaseQ=()=> removeToCart(item.id);
  return <div className='flex gap-8 items-center justify-between p-4 sm:p-6 mb-4 bg-gray-900 rounded-xl shadow-2xl border-gray-800 transition duration-300 hover:border-orange-600/50'>

    <div className='flex items-center space-x-4 w-full sm:w-auto'>
      <img src={item.image} alt={item.name} className='w-24 h-24 object-cover rounded-lg border-2 border-gray-700'></img>
    </div>
    <div className='grow'>
      <h3 className='text-xl font-bold text-white line-clamp-1'>
        {item.name}
      </h3>
      <p className='text-lg text-orange-400 font-semibold'>{item.price.toFixed(2)}</p>
    </div>
    <div className='flex items-center justify-betweens sm:justify-end w-full sm-w-2/5 sm:mt-0 space-x-4 '>
    <div className='flex items-center border border-gray-700 rounded-full  overflow-hidden shadow-lg'>
    <button onClick={decreaseQ} className='p-2 text-gray-400 bg-gray-800 hover:bg-gray-700 transition duration-150 w-8 h-8 item-center justify-center items-center'>
      -
    </button>
    <span className='px-3 text-base font-bold text-white bg-gray-800'>{item.quantity}</span>
    <button onClick={increaseQ} className='p-2 text-gray-400 bg-gray-800 hover:bg-gray-700 transition duration-150 w-8 h-8 item-center justify-center items-center'>
      +
    </button>
    </div>
    <p className='font-extrabold text-orange-300 w-24 text-right hidden md:block'>{(item.price*item.quantity).toFixed(2)}</p>
    <button onClick={() => removeToCart(item.id, true)} aria-label={`Remove ${item.name} from cart`} className='text-gray-400 hover:text-orange-400'>
      <X className='w-5 h-5' onClick={() => removeToCart(item.id, true)}/>
    </button>
    </div>

  </div>
}

export default CartItem
