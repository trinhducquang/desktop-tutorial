import React, { useState } from 'react';
import './Login.scss';
import login from '/public/Login/login.jpg';
import tick from '/public/Login/tick.png';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSignIn = async () => {
        try {
            const response = await fetch('http://localhost/git/desktop-tutorial-main/desktop-tutorial/client/src/Pages/LoginRegister/Login/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                alert('Login successful.');
                // Redirect to another page or perform any action after successful login
            } else {
                alert(result.message || 'An error occurred during login.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during login.');
        }
    };

    return (
        <div className='login-container'>
            <div className='login-image'>
                <img src={login} alt="Login" />
            </div>
            <div className='login-form'>
                <div className='form-header'>
                    <div className='form-title'>
                        <h1>Sign in to your account</h1>
                        <p>If you already have a RIMOWA account, please sign in.
                            We’ll use your existing details for a faster checkout.
                        </p>
                    </div>
                    <div className='form-body'>
                        <div className='input-group'>
                            <label>Email Address</label>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='input-group'>
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <a href="#">Forgot your password?</a>
                        </div>
                        <div className='submit-button'>
                            <button onClick={handleSignIn}>Sign in</button>
                        </div>
                    </div>
                </div>
                <div className='signup-container'>
                    <div className='signup-title'>
                        <h1>Don't have an account?</h1>
                        <p>Get more out of your experience by signing up to:</p>
                    </div>
                    <div className='signup-benefits'>
                        <div className='benefit-item'>
                            <img src={tick} alt="" />
                            <p>Manage your orders and returns</p>
                        </div>
                        <div className='benefit-item'>
                            <img src={tick} alt="" />
                            <p>Easily enjoy your lifetime guarantee</p>
                        </div>
                        <div className='benefit-item'>
                            <img src={tick} alt="" />
                            <p>Create a wish list</p>
                        </div>
                        <div className='benefit-item'>
                            <img src={tick} alt="" />
                            <p>Enjoy personalised recommendations</p>
                        </div>
                        <div className='create-account-button'>
                            <Link to="/Resgiter">
                                <button>
                                    Create Account
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
