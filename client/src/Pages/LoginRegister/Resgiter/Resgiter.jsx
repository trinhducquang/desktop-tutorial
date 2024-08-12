import React from 'react'
import './Resgiter.scss'
import login from '/public/Login/login.jpg'

const Resgiter = () => {
    return (
        <div className='resgiter-container'>
            <div className='resgiter-image'>
                <img src={login} />
            </div>
            <div className='resgiter-form'>
                <div className='form-header'>
                    <div className='form-title'>
                        <h1>Create your RIMOWA account</h1>
                        <p>If you already have a RIMOWA account, please sign in.
                            We’ll use your existing details for a faster checkout.
                        </p>
                    </div>
                    <div className='form-body'>
                        <div className='input-group'>
                            <label>Email Address</label>
                            <input type="text" />
                        </div>
                        <div className='input-group'>
                            <label>Password</label>
                            <input type="password" />
                        </div>
                        <div className='input-group'>
                            <label>Confirm Password</label>
                            <input type="password" />
                        </div>
                        <div className='input-group consent-group'>
                            <input type="checkbox" id="consent-checkbox" />
                            <label htmlFor="consent-checkbox">
                                I consent to RIMOWA processing my personal data in order to send me personalized marketing material and to share my personal data with RIMOWA’s marketing partners in accordance with the consent form and the privacy policy.
                            </label>
                        </div>
                        <div className='submit-button'>
                            <button>Create Account</button>
                        </div>
                    </div>
                    <div className='form-footer'>
                        <p><strong>*Mandatory field.</strong></p>
                        <p>Your personal data is processed by RIMOWA as data controller, for your account creation or/and personalized marketing material if consented. For more information, please see our <a href="#">Privacy policy</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resgiter
