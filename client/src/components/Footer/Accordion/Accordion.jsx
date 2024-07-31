import React from 'react';
import cong from '/contact/cong.svg';
import './Accordion.scss';
import useAccordion from '../../../Hooks/useAccordion'; 

const Accordion = () => {
  const { expandedSections, toggleSection, isSectionExpanded } = useAccordion();
  
  return (
    <div>
      <div className='item-item-2'>
        {[
          "Rolls-Royce Motor Cars as a Data Controller and our responsibilities",
          "How do we collect your personal information",
          "What information may be collected about you",
          "How your personal information may be used",
          "Third parties to whom we may transfer your data",
          "How do we keep your personal information safe",
          "How long do we keep your personal information for",
          "Processing data outside of the UK and the EEA",
          "Changing your marketing preferences",
          "Contacting us about this privacy policy",
          "Location Information Safeguards",
          "Legal grounds for processing of your personal information"
        ].map((text, index) => (
          <div key={index}>
            <div className='img-flex' onClick={() => toggleSection(index)}>
              {text}
              <img src={cong} alt="icon" className={isSectionExpanded(index) ? 'rotated' : ''} />
            </div>
            <div className={`expand-content ${isSectionExpanded(index) ? 'expanded' : ''}`}>
              <p>Details about {text.toLowerCase()} will be shown here...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
