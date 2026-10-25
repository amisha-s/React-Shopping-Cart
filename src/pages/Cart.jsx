import React from 'react'
import { useCart } from '../context/CardContext'
import { Link } from 'react-router-dom'
import { Trash2, Zap } from 'lucide-react'
import { ChevronLeft } from 'lucide-react'
import CartItem from '../components/CartItem'

const Cart = () => {
  const {cart , cartTotal, cartCount, clearCart} = useCart()
  return (
    <>
    <div className='container mx-auto px-4 md:px-8 pt-8'>
    <div className='flex items-center mb-10 '>
      <Link to="/" className='flex items-center text-gray-400 hover:text-orange-400 transition duration-150 font-semi-bold text-lg'>
      <ChevronLeft className="w-6 h-6 mr-1"></ChevronLeft>
      <span>Back to Store</span>
      </Link>
    </div>
      <div className='flex flex-wrap items-center justify-between gap-4 mb-10'>
        <h2 className="text-4xl font-extrabold text-white tracking-tight">Shopping Cart ({cartCount})</h2>
        {cart.length > 0 && (
          <button onClick={clearCart} className='flex items-center gap-2 text-gray-400 hover:text-orange-400'>
            <Trash2 className='w-4 h-4' />
            <span>Clear cart</span>
          </button>
        )}
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
        <div className='lg:col-span-2 space-y-4'>
          {cart.map(item=><CartItem key={item.id} item={item}></CartItem>)}
        </div>
        <div className='lg:col-span-1 p-8 bg-gray-900 rounded-2xl shadow-2xl border border-1/4 sticky top-20 h-fit border border-gray-800'>
        <h3 className='text-3xl font-bold text-white  mb-5  border-b border-y-gray-700 pb-3 flex items-center space-x-2'>
          <div className='flex justify-between'>
            <span className='w-6 h-6 text-orange-400'>
              ₹
            </span>
            <span>Order Total</span>
          </div>
        </h3>
        <div className='y-4 text-gray-400 '>
          <div className='flex justify-between text-xl '>
            <span>Sub Total</span>
            <span className='font semi-bold text-white'> ₹{cartTotal.toFixed(2)}</span>
          </div>
          <div className='flex justify-between text-xl '>
            <span>Shipping (Express)</span>
            <span className='font semi-bold text-green-400'> Free</span>
          </div>
           <div className='flex justify-between text-xl border-t mb-5 border-gray-700 pt-6'>
            <span className='text-2xl font-extrabold text-white'>Estimate Total</span>
            <span className='text-2xl font-extrabold text-orange-400'>{cartTotal.toFixed(2)} </span>
           
          </div>
          <Link to="/checkout" className="mx-5 w-full mx-auto mb-5 flex items-center justify-center gap-2 rounded-full bg-orange-600 py-3 text-white font-bold uppercase tracking-wider shadow-lg shadow-orange-600/40 transition duration-300 hover:bg-orange-500 cursor-pointer">
            <Zap className="w-5 h-5" />
            <span>Proceed Securely</span>
            
        </Link>
        <p className='text-xs text-gray-500 text-center mt-4'>All transactions are encrypted and secure</p>
        </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Cart
