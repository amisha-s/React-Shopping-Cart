import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {initialProducts} from '../data/product'
import { ChevronLeft , Tag ,Zap,ShoppingCart } from 'lucide-react'

const ProductDetails = () => {
  const {id}=useParams();
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    const matchingProduct = initialProducts.find(data => data.id === Number(id));
    setProduct(matchingProduct ?? null);
  }, [id]);

  if (product === undefined) {
    return <div className="p-8 text-center">Loading product...</div>;
  }

  if (product === null) {
    return <div className="p-8 text-center">Product not found.</div>;
  }

  return (
    <div>
      <div className="mx-auto w-full max-w-screen-xl px-4 md:p-8 bg-gray-900 min-h-screen rounded-2xl shadow-2xl my-8 p-6 md:p-12 border border-gray-800">
        <Link to="/">
        <button className=' cursor-pointer flex items-center text-gray-400 hover:text-orange-400 transition duration-150 mb-12 font-semibold text-large'>
          <ChevronLeft className='w-6 h-6 mr-1'/>
          <span>Back to All Products</span>
        </button>
        </Link>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='w-full'>
            <img src={product.image} alt={product.name} className='w-[400px] h-[400px] object-cover rounded-2xl shadow-2xl shadow-gray-950/50 border-4 border-gray-800'></img>
            

            </div>
            <div className='flex flex-col justify-between'>
              <div>
                <h1 className='text-4xl font-extrabold text-white mb-4 leading-tight tracking-tighter'>{product.name}</h1>
              </div>
              <p className='text-3xl font-extrabold text-orange-400 mb-4'> ₹{product.price.toFixed(2)}</p>
              <h2 className='text-xl font-bold text-gray-200 mb-2 border-b border-orange-900/50 pb-2 flex items-center space-x-2'>
                <Tag className='w-5 h-5 text-orange-500'/>
                <span>Product Overview</span>
               
              </h2>
               <p className='text-gray-500 text-lg leding-relaxed mb-3'>{product.description}</p>
               <ul className='space-y-3 text-gray-300 p-4 bg-gray-800 rounded-xl border border-gray-700'>
                <li className='flex items-center space-x-3 text-lg '>
                  <Zap className='w-5 h-5 text-orange-500'/>
                  <span>High Quality,Professional Grade Material</span>
                  </li>
                 <li className='flex items-center space-x-3 text-lg '>
                  <Zap className='w-5 h-5 text-orange-500'/>
                  <span>Comprehensive 1-Year Manufacture Warrenty</span>
                  </li>
                   <li className='flex items-center space-x-3 text-lg '>
                  <Zap className='w-5 h-5 text-orange-500'/>
                  <span>Immediate Shopping for In-Stock Item</span>
                  </li>
               </ul>

         
          <div className='mt-5 space-y-4 flex justify-center items-center flex-col'>
               <button className="mx-5 w-full mx-auto mb-5 flex items-center justify-center gap-2 rounded-full bg-orange-600 py-3 text-white font-bold uppercase tracking-wider shadow-lg shadow-orange-600/40 transition duration-300 hover:bg-orange-500 cursor-pointer">
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
        </button>
        <Link to="/" className='mx-5 w-full mx-auto mb-5 flex items-center justify-center gap-2 border border-orange-600 rounded-full py-3 text-orange-400 font-bold uppercase tracking-wider  transition duration-300 hover:bg-orange-900/50 cursor-pointer'>
        Keep Shopping
        </Link>
          </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
