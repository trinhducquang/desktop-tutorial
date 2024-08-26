import './Legal.scss';
import img from '/Legal/img.webp';
import img1 from '/Legal/img1.webp';
import Accordion from '../../components/Accordion/Accordion';
import { GrLinkNext } from 'react-icons/gr';

const Legal = () => {
    return (
        <div className='Legal'>
            <section>
                <div className='Legal-container'>
                    <img src={img} alt="Rimowa Legal" />
                    <div className='img-content'>
                        <h2>LEGAL INFORMATION</h2>
                    </div>
                </div>
                <div className='background-legal'>
                    <div className='legal-img'>
                        <h2>Company Information</h2>
                        <span>
                            This is the official Rimowa website. Rimowa is responsible for the content of this website. Rimowa is a company registered in Germany under company number [insert company number here] and has its registered office at [insert registered office address here]. Email address: enquiries@rimowa.com
                        </span>
                    </div>
                    <div className='legal-image'>
                        <img src={img1} alt="Legal Information" />
                    </div>
                    <div className='legal-details'>
                        <div>
                            <h1>Gender Pay Gap Report</h1>
                            <p>Diversity is a core value at Rimowa, as a diverse workforce fuels innovation and success.</p>
                            <p>Rimowa believes in the importance of diversity and inclusion for effective performance and long-term success.</p>
                            <p>As part of the LVMH Group, Rimowa aligns with the Group’s commitment to diversity and inclusion within its human resources and sustainability strategies.</p>
                            <p>We are dedicated to a corporate culture that fosters tolerance, mutual respect, and equal opportunity. This report provides our gender pay gap information, reasons behind the gap, and our plans to address it.</p>
                            <p>We support transparency on gender pay issues and confirm that the data reported aligns with The Equality Act 2010 (Gender Pay Gap Information) Regulations 2017.</p>
                        </div>
                        <div className='report-buttons'>
                            <button>
                                Report 2021
                                <GrLinkNext className="arrow" />
                            </button>
                            <button>
                                Report 2022
                                <GrLinkNext className="arrow" />
                            </button>
                            <button>
                                Report 2023
                                <GrLinkNext className="arrow" />
                            </button>
                        </div>
                        <div className='note'>
                            <h2>Note on Fuel Consumption <br />
                                and CO2 Emissions</h2>
                        </div>
                        <div className='discover-button'>
                            <button>DISCOVER
                                <GrLinkNext className="arrow" />
                            </button>
                        </div>
                    </div>
                    <hr />
                    <section className='Privacy-item'>
                        <div className='item'>
                            <div className='Legal-accordion'>
                                <h1>Legal Information</h1>
                                <Accordion />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
}

export default Legal;
