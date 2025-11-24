import React from 'react'
import '../styles/cta.scss'

export default function CTA() {
  return (
    <div className='cta-section'>
        <h3 className='cta-title'>Join The Colorful Bunch!</h3>
        <div className="cta-input">
            <input type="email" placeholder='Enter your email address' />
            <button className='cta-button'>Subscribe</button>
        </div>

    </div>
  )
}
