import React, { useState } from 'react';
import './Privacy.scss';
import Privacyimg from '/Privacy/Privacy.webp';
import cong from '/contact/cong.svg';

const Privacy = () => {
    const [expandedSections, setExpandedSections] = useState([]);

    const toggleSection = (index) => {
        if (expandedSections.includes(index)) {
            setExpandedSections(expandedSections.filter(i => i !== index));
        } else {
            setExpandedSections([...expandedSections, index]);
        }
    };

    const isSectionExpanded = (index) => expandedSections.includes(index);

    return (
        <div className='Privacy-container'>
            <section>
                <div className='Navbar-img Sitemap-img'>
                    <img src={Privacyimg} alt="Privacy" />
                    <div className='img-content'>
                        <h2>SITE MAP</h2>
                    </div>
                </div>
            </section>
            <section className='Privacy-item'>
                <div className='item'>
                    <div>
                        <p>
                            Rolls-Royce Motor Cars is committed to protecting and respecting your privacy.
                            We will only use your personal information in accordance with the data protection
                            law in the UK and this privacy policy. This policy sets out the basis on which personal data we hold,
                            in particular personal data relating to our customers and prospective customers, will be processed by us.
                        </p>
                    </div>
                    <div className='item-item-1'>
                        <h1>Changes to this Privacy Policy</h1>
                        <p>
                            We may modify or update this privacy policy from time to time. If we change this privacy policy, the changes will
                            be published here on this website. Where changes to this privacy policy will have a fundamental impact on the nature of
                            the processing or otherwise have a substantial impact on you, we will give you sufficient advance notice so that you
                            have the opportunity to exercise any rights you may have (e.g. to object to the processing).
                        </p>
                    </div>
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
            </section>
        </div>
    )
}

export default Privacy;
