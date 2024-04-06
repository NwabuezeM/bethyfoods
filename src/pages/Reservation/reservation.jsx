import { useState } from 'react';
import './styles.css'
import { Link } from 'react-router-dom';

function Reservation() {
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
      newErrors.subject = 'Please select a subject';
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
      <div className="reservation-hero min-h-[80vh] lg:min-h-screen md:min-h-[90vh] flex justify-center text-white">
        <div className="container flex flex-col items-center justify-center lg:w-2/3 md:w-2/3 min-h-screen text-center gap-12">
          <h3 className="z-50 mt-36 lg:mt-0 md:mt-0 text-[#d89423]">Reserve a Seat or Request a Special Order</h3>
          <img src="https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2018/10/divider-free-img-1.png" alt="symbol" className="w-1/3 object-cover mx-auto lg:mx-0" />
          <p className="text-center">
            Welcome to our restaurant's reservation page! Secure your spot for a delightful happy hour experience or place a special order for a personalized dining experience. Reserve now and get ready for a memorable culinary journey!
          </p>

        </div>
      </div>
      <div className='my-36 mx-8 lg:mx-36 md:mx-14'>
        <h3 className='text-center my-16'>Select a subject, whether it's a special order request or a reservation for a seat, and provide additional details in the message to assist us in processing your request efficiently.</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-14'>
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
            <select
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className={`text-gray-700 placeholder:text-gray-700 p-6 bg-[#ddd7d7] rounded-lg text-3xl outline-none ${errors.subject && 'border-2'} focus:border-2 focus:${errors.subject ? 'border-red-600' : 'border-green-700'} ${errors.subject && 'border-red-600'}`}
            >
              <option value="" disabled>Select a Subject</option>
              <option value="reserve" className='bg-white'>Reserve a Seat</option>
              <option value="specialOrder" className='bg-white'>Request a Special Order</option>
            </select>
            {errors.subject && <span className="text-red-600 mt-[-8px] text-2xl">{errors.subject}</span>}
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className={`text-gray-700 placeholder:text-gray-700 p-6 bg-[#ddd7d7] rounded-lg text-3xl outline-none ${errors.message && 'border-2'} focus:border-2 focus:${errors.message ? 'border-red-600' : 'border-green-700'} ${errors.message && 'border-red-600'} h-[150px]`}
              value={formData.message}
              onChange={handleInputChange}
              placeholder='Write your message...'
            ></textarea>
            {errors.message && <span className="text-red-600 mt-[-8px] text-2xl">{errors.message}</span>}
            <span>By submitting this form, you agree to our <Link to={'/terms-and-conditions'} className='text-blue-600 hover:underline'>Terms of Service</Link> and <Link to={'/privacy-policy'} className='text-blue-600 hover:underline'>Privacy Policy</Link>. Please make sure to read and understand our <Link to={'/terms-and-conditions'} className='text-blue-600 hover:underline'>Terms of Service</Link> and <Link to={'/privacy-policy'} className='text-blue-600 hover:underline'>Privacy Policy</Link> before proceeding.</span>
            <button className="bg-[#d89423] hover:bg-[#ff6347] text-white text-center py-5 px-7 rounded-full uppercase hover:text-white block w-1/3 mx-auto lg:mx-0 mt-5">Send Message</button>
          </form>
          <div className="image hidden md:block lg:block min-h-[100%]">
            <img src="https://media.istockphoto.com/id/1390569992/photo/3d-rendering-interior-house-modern-open-living-room-loft-style-apartment-residence-in-cozy.jpg?s=612x612&w=0&k=20&c=wRHr2sv5lVkKH_HBpBaQLoh1DQbbkLHM2Ak1VtaldrA=" alt="image" className='h-full object-cover rounded-2xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reservation