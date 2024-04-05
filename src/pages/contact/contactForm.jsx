import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        number: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const validateEmail = (email) => {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
        return emailRegex.test(email);
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\+?\d{1,3}?\d{9,}$/;
        return phoneRegex.test(phoneNumber);
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (formData.name.trim() === '') {
            newErrors.name = 'Please enter your name';
            isValid = false;
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Please enter a valid name';
            isValid = false;
        }

        if (formData.email.trim() === '') {
            newErrors.email = 'Please enter your email';
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (formData.number.trim() === '') {
            newErrors.number = 'Please enter your phone number';
            isValid = false;
        } else if (!validatePhoneNumber(formData.number.trim())) {
            newErrors.number = 'Please enter a valid phone number';
            isValid = false;
        }

        if (formData.subject.trim() === '') {
            newErrors.subject = 'Please enter a subject';
            isValid = false;
        }

        if (formData.message.trim() === '') {
            newErrors.message = 'Please enter a message';
            isValid = false;
        } else if (formData.message.trim().length < 3) {
            newErrors.message = 'Message is too short'
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            setFormData({
                name: '',
                email: '',
                number: '',
                subject: '',
                message: ''
            });

        } else {
            console.log('Form has errors. Please fix them.');
        }
    };

    return (
        <div>
            <div className="py-36 grid lg:grid-cols-2 gap-6 px6 lg:px-36">
                <form className="flex flex-col gap-6 px-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className={`text-gray-700 placeholder:text-gray-700 p-6 bg-[#ddd7d7] rounded-lg text-3xl outline-none ${errors.name && 'border-2'} focus:border-2 focus:${errors.name ? 'border-red-600' : 'border-green-700'} ${errors.name && 'border-red-600'}`}
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    {errors.name && <span className="text-red-600 mt-[-8px] text-2xl">{errors.name}</span>}
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className={`text-gray-700 placeholder:text-gray-700 p-6 bg-[#ddd7d7] rounded-lg text-3xl outline-none ${errors.email && 'border-2'} focus:border-2 focus:${errors.email ? 'border-red-600' : 'border-green-700'} ${errors.email && 'border-red-600'}`}
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <span className="text-red-600 mt-[-8px] text-2xl">{errors.email}</span>}
                    <input
                        type="text"
                        name="number"
                        placeholder="Contact Number"
                        className={`text-gray-700 placeholder:text-gray-700 p-6 bg-[#ddd7d7] rounded-lg text-3xl outline-none ${errors.number && 'border-2'} focus:border-2 focus:${errors.number ? 'border-red-600' : 'border-green-700'} ${errors.number && 'border-red-600'}`}
                        value={formData.number}
                        onChange={handleInputChange}
                    />
                    {errors.number && <span className="text-red-600 mt-[-8px] text-2xl">{errors.number}</span>}
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className={`text-gray-700 placeholder:text-gray-700 p-6 bg-[#ddd7d7] rounded-lg text-3xl outline-none ${errors.subject && 'border-2'} focus:border-2 focus:${errors.name ? 'border-red-600' : 'border-green-700'} ${errors.name && 'border-red-600'}`}
                        value={formData.subject}
                        onChange={handleInputChange}
                    />
                    {errors.subject && <span className="text-red-600 mt-[-8px] text-2xl">{errors.subject}</span>}
                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        className={`text-gray-700 placeholder:text-gray-700 p-6 bg-[#ddd7d7] rounded-lg text-3xl outline-none ${errors.message && 'border-2'} focus:border-2 focus:${errors.message ? 'border-red-600' : 'border-green-700'} ${errors.message && 'border-red-600'} h-[150px]`}
                        value={formData.message}
                        onChange={handleInputChange}
                    ></textarea>
                    {errors.message && <span className="text-red-600 mt-[-8px] text-2xl">{errors.message}</span>}
                    <span>By submitting this form, you agree to our <Link to={'/terms-and-conditions'} className='text-blue-600 hover:underline'>Terms of Service</Link> and <Link to={'/privacy-policy'} className='text-blue-600 hover:underline'>Privacy Policy</Link>. Please make sure to read and understand our <Link to={'/terms-and-conditions'} className='text-blue-600 hover:underline'>Terms of Service</Link> and <Link to={'/privacy-policy'} className='text-blue-600 hover:underline'>Privacy Policy</Link> before proceeding.</span>
                    <button className="bg-[#d89423] hover:bg-[#ff6347] text-white text-center py-5 px-7 rounded-full uppercase hover:text-white block w-1/3 mx-auto lg:mx-0 mt-5">Send Message</button>
                </form>
                <div className='h-full flex flex-col gap-2'>
                    <h2 className='mb-4 text-center'>Our Head Office</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.45076110361!2d8.102752373728551!3d6.335609025320904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105ca07197372593%3A0x79c1e2663cbe3e05!2sUdensi%20St%2C%20Abakaliki%2C%20Ebonyi!5e0!3m2!1sen!2sng!4v1712063185915!5m2!1sen!2sng"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        className='px-4'
                        >
                    </iframe>
                </div>


            </div>
            <div className="grid text-center gap-12 justify-center py-36">
                <h2>Open Hours</h2>
                <p>Mon - Sat <span>7AM --- 11PM </span></p>
                <p>Sun <span>10AM --- 11PM </span></p>
                <h2>Happy Hours</h2>
                <p>Enjoy 50% Off</p>
                <p>Every Friday, 4PM - 7PM</p>
            </div>
        </div>
    );
}

export default ContactForm;
