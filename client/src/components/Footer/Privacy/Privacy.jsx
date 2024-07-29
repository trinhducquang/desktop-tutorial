import React, { useState } from 'react';
import './Privacy.scss';
import Privacyimg from '/Privacy/Privacy.webp';
import Accordion from '../Accordion/Accordion';
const Privacy = () => {
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
                        <Accordion/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Privacy;
