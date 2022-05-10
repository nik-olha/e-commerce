import React from 'react'
import './/static/CategoryItem.scss'

export const CategoryItem = ({item}) => {
  return (
    <div className='categoryItem'>
        <img alt="" src={item.img}/>
        <div className='info'>
        <h1>{item.title}</h1>
        <button>SHOP NOW </button>
        </div>
    </div>
  )
}

