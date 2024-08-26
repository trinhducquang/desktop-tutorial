import { useNavigate } from 'react-router-dom';
import './UpSlide.scss';
import Close from '/Close/Close.svg';
import Accordion from '../Accordion/Accordion';

const SlideUpContainer = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <section className='slide-up-container'>
      <div className='header'>
        <img src={Close} alt="close icon" onClick={handleClose} />
      </div>
      <div className='content'>
        <Accordion />
      </div>
    </section>
  );
};

export default SlideUpContainer;

