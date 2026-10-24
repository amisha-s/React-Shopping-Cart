import React from 'react'
import SearchFilter from '../components/SearchFilter'
import CategoryFilter from '../components/CategoryFilter'
import { useCart } from '../context/CardContext'
import ProductCard from '../components/ProductCard'

const ProductList = () => {
  const products = useCart();
  return (
    <div className='container mx-auto px-4 md:px-8 pt-8'>
     
      <SearchFilter/>
      <CategoryFilter/>

      <h2 className='text-2xl font-extrabold mx-auto px-4 md:px-4 pt-4'>Feature Gear ({products.length} Items)  </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center px-4'>

        {products.map((products,index)=><ProductCard key={index} products={products}></ProductCard>)}

      </div>
    </div>
  )
}

export default ProductList
