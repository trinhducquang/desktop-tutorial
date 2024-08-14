import { useState } from 'react';

const useForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        address: '',
        consent: false,
    });

    const [errors, setErrors] = useState({
        email: false,
        password: false,
        confirmPassword: false,
        phone: false,
        address: false,
    });

    const [errorMessages, setErrorMessages] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'phone') {
            const isValidNumber = /^[0-9]*$/.test(value); 

            if (isValidNumber && value.length <= 15) {
                setFormData({
                    ...formData,
                    [name]: value,
                });
                setErrors({
                    ...errors,
                    phone: false,
                });
                setErrorMessages({
                    ...errorMessages,
                    phone: '',
                });
            } else {
                setErrors({
                    ...errors,
                    phone: true,
                });
                setErrorMessages({
                    ...errorMessages,
                    phone: 'Số điện thoại chỉ được chứa số và không quá 15 ký tự.',
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: type === 'checkbox' ? checked : value,
            });
        }
    };

    const validateForm = () => {
        const newErrors = {
            email: formData.email.trim() === '',
            password: formData.password.trim() === '',
            confirmPassword: formData.confirmPassword.trim() === '',
            phone: formData.phone.trim() === '' || !/^[0-9]{1,15}$/.test(formData.phone),
            address: formData.address.trim() === '',
        };
        setErrors(newErrors);

        const newErrorMessages = {
            email: formData.email.trim() === '' ? 'Email is required.' : '',
            password: formData.password.trim() === '' ? 'Password is required.' : '',
            confirmPassword: formData.confirmPassword.trim() === '' ? 'Confirm Password is required.' : '',
            phone: formData.phone.trim() === '' ? 'Phone is required.' : 'Số điện thoại chỉ được chứa số và không quá 15 ký tự.',
            address: formData.address.trim() === '' ? 'Address is required.' : '',
        };
        setErrorMessages(newErrorMessages);

        return !Object.values(newErrors).some(error => error);
    };

    return {
        formData,
        errors,
        errorMessages,
        handleChange,
        validateForm,
    };
};

export default useForm;

