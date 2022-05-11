import React from 'react'
import ".//static/Products.scss"
import { popularProducts } from '../../data'
import ProductItem from '../productItem/ProductItem'

const Products = () => {
  return (
    <div className='products'>
        {popularProducts.map(item=>(
            <ProductItem item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Products