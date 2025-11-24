import React from 'react'
import '../styles/about-us.scss'
import Intro from "../Components/Intro";
import Introduction from "../Components/Introduction";
import ReviewSwiper from '../Components/Reviews';

export default function AboutUs() {
  return (
    <div className='about-us--section'>
        <div className="about-us--banner">
            <h2>About us</h2>
            <p>Where flowers are our inspiration</p>
        </div>
        <Intro />
        <Introduction />
        <ReviewSwiper />
    </div>
  )
}
