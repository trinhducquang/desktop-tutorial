import React from 'react'
import img1 from '../../../public/Luxury/img1.webp'
import './Luxury.scss'

const Luxury = () => {
  return (
    <div className='overflow'>
      <section>
        <div className='Navbar-img'>
          <img src={img1} alt="Rimowa Contact" />
          <div className='img-content'>
            <h2>OBJECTS OF LUXURY</h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Luxury