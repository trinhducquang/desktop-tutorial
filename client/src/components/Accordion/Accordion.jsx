import React from 'react';
import cong from '/contact/cong.svg';
import './Accordion.scss';
import useAccordion from '../../Hooks/useAccordion'; 

const Accordion = ({ text }) => {
  const { expandedSections, toggleSection, isSectionExpanded } = useAccordion();

  return (
    <div>
      {text && <h2 className='accordion-header'>{text}</h2>}
      <div className='item-item-2'>
        {[
          "Rimowa as a Data Controller and Our Responsibilities",
          "How We Collect Your Personal Information",
          "Types of Information We May Collect",
          "How We Use Your Personal Information",
          "Third Parties With Whom We May Share Your Data",
          "How We Protect Your Personal Information",
          "Retention Period for Your Personal Information",
          "Data Processing Outside of the EU",
          "Changing Your Marketing Preferences",
          "Contacting Us About This Privacy Policy",
          "Location Information Safeguards",
          "Legal Grounds for Processing Your Personal Information"
        ].map((itemText, index) => (
          <div key={index} className='Accordion-container'>
            <div className='img-flex' onClick={() => toggleSection(index)}>
              {itemText}
              <img src={cong} alt="icon" className={isSectionExpanded(index) ? 'rotated' : ''} />
            </div>
            <div className={`expand-content ${isSectionExpanded(index) ? 'expanded' : ''}`}>
              <p>Details about {itemText.toLowerCase()} will be shown here...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
