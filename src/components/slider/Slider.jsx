import React from 'react'
import './/static/Slider.scss'
import {ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const Slider = () => {
  return (
    <div className='slider'>
        <div className='slider__arrow' id='arrow-left'>
            <ArrowBackIos/>
        </div>
        <div className='slider__arrow' id='arrow-right'>
            <ArrowForwardIos/>
        </div>
    </div>
  )
}

export default Slider