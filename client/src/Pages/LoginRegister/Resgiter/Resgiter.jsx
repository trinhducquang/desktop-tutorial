import React, { useState } from 'react';
import './Resgiter.scss';
import login from '/public/Login/login.jpg';
import useForm from '../../../Hooks/useForm'; 
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import AdminConfig from '../../../Admin/AdminConfig';


const Resgiter = () => {
    const { urlRegister } = AdminConfig;
    const { formData, errors, errorMessages, handleChange, validateForm } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            return;
        }

        try {
            const response = await fetch(`${urlRegister}Resgiter.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Registration successful!');
            } else {
                alert('An error occurred during registration.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during registration.');
        }
    };

    return (
        <div className='resgiter-container'>
            <div className='resgiter-image'>
                <img src={login} alt="Login" />
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
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'invalid' : ''}
                            />
                            {errors.email && <div className="error-message">{errorMessages.email}</div>}
                        </div>
                        <div className='input-group'>
                            <label>Password</label>
                            <div className='password-wrapper'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={errors.password ? 'invalid' : ''}
                                />
                                <span onClick={togglePasswordVisibility} className="eye-icon">
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            {errors.password && <div className="error-message">{errorMessages.password}</div>}
                        </div>
                        <div className='input-group'>
                            <label>Confirm Password</label>
                            <div className='password-wrapper'>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={errors.confirmPassword ? 'invalid' : ''}
                                />
                                <span onClick={toggleConfirmPasswordVisibility} className="eye-icon">
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            {errors.confirmPassword && <div className="error-message">{errorMessages.confirmPassword}</div>}
                        </div>
                        <div className='input-group'>
                            <label>Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={errors.phone ? 'invalid' : ''}
                            />
                            {errors.phone && <div className="error-message">{errorMessages.phone}</div>}
                        </div>
                        <div className='input-group'>
                            <label>Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className={errors.address ? 'invalid' : ''}
                            />
                            {errors.address && <div className="error-message">{errorMessages.address}</div>}
                        </div>
                        <div className='input-group consent-group'>
                            <input
                                type="checkbox"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChange}
                                id="consent-checkbox"
                            />
                            <label htmlFor="consent-checkbox">
                                I consent to RIMOWA processing my personal data in order to send me personalized marketing material and to share my personal data with RIMOWA’s marketing partners in accordance with the consent form and the privacy policy.
                            </label>
                        </div>
                        <div className='submit-button'>
                            <button onClick={handleSubmit}>Create Account</button>
                        </div>
                    </div>
                    <div className='form-footer'>
                        <p><strong>*Mandatory field.</strong></p>
                        <p>Your personal data is processed by RIMOWA as data controller, for your account creation or/and personalized marketing material if consented. For more information, please see our <a href="#">Privacy policy</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resgiter;
