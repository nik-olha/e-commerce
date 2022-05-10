import React from 'react'
import './/static/Categories.scss'
import { categories } from '../../data'
import { CategoryItem } from '../categoryItem/CategoryItem'

const Categories = () => {
  return (
    <div className='categories'>
      {categories.map(item=>(
        <CategoryItem item={item}/>
      ))}
    </div>
  )
}

export default Categories