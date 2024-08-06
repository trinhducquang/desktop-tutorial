import React from 'react'
import FooterTop from '../../components/Footer-top/FooterTop'
import './User.scss'

const User = () => {
    return (
        <div className='User-container'>
            <div className='User-item'>
                <div>
                    <h1>Your Cart</h1>
                    <p>What you will buy is below</p>
                </div>
            </div>
            <FooterTop />
        </div>
    )
}

export default User