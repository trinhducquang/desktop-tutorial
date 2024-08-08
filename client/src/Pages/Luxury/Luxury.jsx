import React from 'react'
import img1 from '../../../public/Luxury/img1.webp'
import img2 from '../../../public/Luxury/img2.webp'
import img3 from '../../../public/Luxury/img3.webp'
import img4 from '../../../public/Luxury/img4.webp'
import img5 from '../../../public/Luxury/img5.webp'
import img6 from '../../../public/Luxury/img6.webp'

import { GrLinkNext } from 'react-icons/gr'
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
      <section>
        <div className='Menu1-container Careers-container-section luxury-border'>
          <div className='text-overlay color-overlay'>
            <p>Experience the world of Rimowa. From the initial design phase and
              meticulous production to the final delivery and customer service, bringing our
              renowned travel solutions to life requires a dedicated team of hardworking, responsible,
              and innovative individuals — each of whom plays a crucial role in shaping the future of Rimowa.
              Whether you are starting your career with one of our graduate programs, internships, or apprenticeships,
              or if you are an experienced</p>
          </div>
        </div>
      </section>
      <section className='Page-2-item Page-2-color-item luxury-3'>
        <div className='Menu1-container Careers-container-section2 Careers-container-section4'>
          <div className='text-overlay color-overlay best-fix-text'>
            <h1 >SIGN UP NOW</h1>
            <h2>ICON LUGGAGE</h2>
            <div className='border-1-px'></div>
            <p>Be the first to hear about our commissioning work with artists and designers,
              events, conversations with collectors and museum partnership programmes.
            </p>
            <p>Sign up to our newsletter to hear the latest from Muse,
              including the latest on the Dream Commission and Spirit of
              Ecstasy Challenge in 2023.
            </p>
            <div className='Page1-button'>
              <button>
                DISCOVER
                <GrLinkNext className="arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='section-9'>
          <div className='Navbar-img'>
            <img src={img2} alt="Culinan" />
          </div>
        </div>
      </section>
      <section className='luxury-3'>
        <div className='Menu1-container Careers-container-section4 Luxury-abc'>
          <div className='text-overlay color-overlay '>
            <p>Beautifully created by the Design Studio at
              Goodwood, Rolls-Royce Icon Luggage is handmade,
              using only the highest quality saddle leather
              in a classic tan finish.
            </p>
            <div className='Page1-button'>
              <button>
                DISCOVER
                <GrLinkNext className="arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='img-section'>
        <div className='image-container'>
          <img src={img3} alt="Featured" />
        </div>
      </section>
      <div className='Luxury-background-lol'>
        <section className='Page-2-item Page-2-color-item luxury-3'>
          <div className='Menu1-container Careers-container-section2 Careers-container-section4'>
            <div className='text-overlay color-overlay best-fix-text'>
              <h1>celebrate in style</h1>
              <h2>CHAMPAGNE CHEST</h2>
              <div className='border-1-px'></div>
              <p>Create an elegant sense of occasion with the Champagne Chest, crafted for
                special moments of conviviality by marrying exquisitive design with signature
                Rolls-Royce craftsmanship.
              </p>
              <div className='Page1-button'>
                <button>
                  DISCOVER
                  <GrLinkNext className="arrow" />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='Navbar-img'>
            <img src={img4} alt="Rimowa Contact" />
          </div>
        </section>
        <section className='luxury-3 luxury-4'>
          <div className='Menu1-container Careers-container-section4 luxury-container-section5'>
            <div className='text-overlay color-overlay '>
              <p>The Champagne Chest is an epicurial masterpiece, and unmistakably Rolls-Royce. The Chest comes alive with a sense of theatre,
                embodying the meticulous attention to detail and commitment to remarkable handcraftsmanship that is so characteristic of the marque.
              </p>
              <div className='Page1-button'>
                <button>
                  DISCOVER
                  <GrLinkNext className="arrow" />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='Navbar-img'>
            <img src={img5} alt="Rimowa Contact" />
          </div>
        </section>
        <section className='Page-2-item class'>
        <div>
          <img src={img6} />
          <div className='item-span-fix'>
            <span>Still From ‘Sondra Perry in Venice’ Film for Muse, by Luke Walker.</span>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

export default Luxury