import React from 'react';
import './UpSlide.scss';
import Close from '/Close/Close.svg';
import Accordion from '../../components/Footer/Accordion/Accordion';


const SlideUpContainer = () => {
  return (
    <section className='slide-up-container'>
      <div className='header'>
        <img src={Close} alt="close icon"/>
      </div>
      <div className='content'>
        <Accordion />
      </div>
    </section>
  );
};

export default SlideUpContainer;
