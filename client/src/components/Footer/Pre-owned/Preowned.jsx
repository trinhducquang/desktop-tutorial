import React from 'react';
import './Preowned.scss';
import Unique from '/public/pre-owned/Unique.mp4';
import { GrLinkNext } from 'react-icons/gr';
import abc from '/abc.jpg'

const Preowned = () => {
    return (
        <div>
            <section>
                <div className='Menu1-container Preowned-container'>
                    <video src={Unique} autoPlay loop muted />
                    <div className='text-overlay'>
                        <h1>INSPIRING GREATNESS</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className='Preowned-text'>
                    <div>
                        <h3>CERTIFIED PRE-OWNED MOTOR CARS</h3>
                        <h2>INTRODUCING PROVENANCE BY ROLLS-ROYCE</h2>
                        <p>Provenance motor cars are previously owned Rolls-Royce models meticulously refurbished to the highest standards. Spanning all models and encompassing often rare styles, each Provenance motor car has a rich history – from its inception at the hands of master technicians, to its first intrepid owner exploring boundless opportunity from within. As a Provenance owner, you will experience a Rolls-Royce that drives as beautifully as it did the day it left the Home of Rolls-Royce in Goodwood.</p>
                        <p>Continue the legacy and discover your certified Rolls-Royce Provenance motor car.</p>
                    </div>
                    <div className='buttons'>
                        <button>
                            CONTACT A DEALER
                            <GrLinkNext className="arrow" />
                        </button>
                        <button>
                            Search Pre-Owned
                            <GrLinkNext className="arrow" />
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <div>
                   <img src={abc}/>
                   <img src=""/>
                   <img src=""/>
                   <img src=""/>
                </div>
            </section>
        </div>
    );
};

export default Preowned;
