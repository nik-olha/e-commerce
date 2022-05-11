import React from 'react'
import Announcement from '../components/announcement/Announcement'
import Categories from '../components/categories/Categories'
import Navbar from '../components/navbar/Navbar'
import NewsLetter from '../components/newsLetter/NewsLetter'
import Products from '../components/products/Products'
import Slider from '../components/slider/Slider'

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <NewsLetter/>
    </div>
  )
}

export default Home
