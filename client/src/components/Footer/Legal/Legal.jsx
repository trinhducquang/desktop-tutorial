import React from 'react';
import './Legal.scss';
import img from '/Legal/img.webp';
import img1 from '/Legal/img1.webp';

const Legal = () => {
    return (
        <div className='Legal'>
            <section>
                <div className='Legal-container'>
                    <img src={img} alt="Cullinan" />
                    <div className='img-content'>
                        <h2>LEGAL INFORMATION</h2>
                    </div>
                </div>
                <div className='background-legal'>
                    <div className='legal-img'>
                        <h2>Company Information</h2>
                        <span>
                            This is the only official Rolls-Royce Motor Cars Limited website. Rolls-Royce Motor Cars Limited is responsible for the content of this website. Rolls-Royce Motor Cars Limited is a company registered in England and Wales under company number 03522604 and has its registered office at Summit ONE, Summit Avenue Farnborough, Hampshire GU14 0FB Email address: enquiries@rolls-roycemotorcars.com
                        </span>
                    </div>
                    <div className='legal-image'>
                        <img src={img1} alt="Legal Image" />
                    </div>
                    <div className='legal-details'>
                        <h1>Gender Pay Gap Report</h1>
                        <div>
                            <p>Diversity is the engine of our success because a diverse workforce is an important force for innovation.</p>
                            <p>Rolls-Royce Motor Cars believes that diversity and inclusion are crucial to our ability to perform effectively and will ensure the long-term success of our Company.</p>
                            <p>As a wholly-owned subsidiary of the BMW Group, we have established a commitment to diversity and inclusion as part of the Group Company’s human resources and sustainability strategy.</p>
                            <p>We support a corporate culture that promotes tolerance, mutual respect and equal opportunity. In this report we provide our gender pay gap information, identify the reasons behind the gap and our plans to close it.</p>
                            <p>We support the UK Government’s drive for companies to be more transparent on gender pay issues and confirm that the data reported is accurate and in line with The Equality Act 2010 (Gender Pay Gap Information) Regulations 2017.</p>
                        </div>
                        <div className='report-buttons'>
                            <button>Report 2023</button>
                            <button>Report 2022</button>
                            <button>Report 2021</button>
                        </div>
                        <div className='note'>
                            <h2>Note to Fuel Consumption and CO2 Emissions</h2>
                        </div>
                        <div className='discover-button'>
                            <button>DISCOVER</button>
                        </div>
                        <hr />
                    </div>
                    
                </div>
            </section>
        </div>
    );
}

export default Legal;
