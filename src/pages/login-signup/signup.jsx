import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaEnvelope, FaEye, FaEyeSlash, FaFacebook, FaLock, FaPhone, FaUser } from 'react-icons/fa'


function Signup() {
    const [inputData, setInputData] = useState({
        fullName: '',
        username: '',
        number: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({
        fullName: '',
        username: '',
        number: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    function handleInputChange(e) {
        const { name, value } = e.target;
        setInputData(prevData => ({
            ...prevData, [name]: value
        }));

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    }

    const validateEmail = (email) => {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
        return emailRegex.test(email);
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\+?\d{1,3}?\d{9,}$/;
        return phoneRegex.test(phoneNumber);
    };

    const formValidation = () => {
        let isValid = true;
        const newErrors = {};

        if (inputData.fullName.trim() === '') {
            newErrors.fullName = 'Please enter your name';
            isValid = false;
        }

        if (inputData.email.trim() === '') {
            newErrors.email = 'Please enter your email';
            isValid = false;
        } else if (!validateEmail(inputData.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!validatePhoneNumber(inputData.number)) {
            newErrors.number = 'Please enter a valid phone number';
            isValid = false;
        }

        if (inputData.username.trim() === '') {
            newErrors.username = 'Please enter your username';
            isValid = false;
        }

        if (inputData.password.trim() === '') {
            newErrors.password = 'Please enter your password';
            isValid = false;
        } else if (inputData.password.trim().length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        if (inputData.confirmPassword !== inputData.password) {
            newErrors.confirmPassword = 'Password does not match';
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValidation()) {
            console.log('Form submitted:', inputData);
            setInputData({
                fullName: '',
                username: '',
                email: '',
                number: '',
                password: '',
                confirmPassword: ''
            });

        } else {
            console.log('Form has errors. Please fix them.');
        }
    };


    return (
        <div className='w-[90%] md:w-3/4 lg:w-3/4'>
            <form
                onSubmit={handleSubmit} className='flex flex-col gap-8'>
                <div className="relative flex flex-col">
                    <input type="text"
                        name="fullName"
                        id='fullName'
                        value={inputData.fullName}
                        placeholder="Enter your full name"
                        onChange={handleInputChange}
                        className={`py-4 px-20 outline-none border-2 ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-2xl text-3xl`} />
                    {
                        errors.fullName && <span className='text-red-600 text-xl mt-2 text-center'>{errors.fullName}</span>
                    }
                    <FaUser  className='absolute left-3 top-4 text-gray-500 text-5xl' />
                </div>

                <div className="relative flex flex-col">
                    <input type="text"
                        name="username"
                        id='username'
                        value={inputData.username}
                        placeholder="Enter your username"
                        onChange={handleInputChange}
                        className={`py-4 px-20 outline-none border-2 ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-2xl text-3xl`} />
                    {
                        errors.username && <span className='text-red-600 text-xl mt-2 text-center'>{errors.username}</span>
                    }
                    <FaUser  className='absolute left-3 top-4 text-gray-500 text-5xl' />
                </div>

                <div className="relative flex flex-col">
                    <input type="text"
                        name="number"
                        id='number'
                        value={inputData.number}
                        placeholder="Enter your phone number"
                        onChange={handleInputChange}
                        className={`py-4 px-20 outline-none border-2 ${errors.number ? 'border-red-500' : 'border-gray-300'} rounded-2xl text-3xl`} />
                    {
                        errors.number && <span className='text-red-600 text-xl mt-2 text-center'>{errors.number}</span>
                    }
                    <FaPhone  className='absolute left-3 top-4 text-gray-500 text-5xl' />
                </div>
                <div className="relative flex flex-col">
                    <input type="text"
                        name="email"
                        id='email'
                        value={inputData.email}
                        placeholder="Enter your email"
                        onChange={handleInputChange}
                        className={`py-4 px-20 outline-none border-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-2xl text-3xl`} />
                    {
                        errors.email && <span className='text-red-600 text-xl mt-2 text-center'>{errors.email}</span>
                    }
                    <FaEnvelope  className='absolute left-3 top-4 text-gray-500 text-5xl' />
                </div>

                <div className="relative flex flex-col">
                    <input type={showPassword ? 'text' : 'password'}
                        name="password"
                        id="password"
                        value={inputData.password}
                        placeholder="Enter your password"
                        onChange={handleInputChange}
                        className={`py-4 px-20 outline-none border-2 ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-2xl text-3xl`} />
                    <span onClick={() => setShowPassword(!showPassword)} className='cursor-pointer'>
                        {
                            showPassword ?
                                <FaEyeSlash  className='absolute right-3 top-3 text-5xl' />
                                : <FaEye  className='absolute right-3 top-3 text-5xl' />
                        }
                    </span>
                    {
                        errors.password && <span className='text-red-600 text-xl mt-2 text-center'>{errors.password}</span>
                    }
                    <FaLock  className='absolute left-3 top-4 text-gray-500 text-5xl' />
                </div>

                <div className="relative flex flex-col">
                    <input type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        id="confirmPassword"
                        value={inputData.confirmPassword}
                        placeholder="Please confirm your password"
                        onChange={handleInputChange}
                        className={`py-4 px-20 outline-none border-2 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-2xl text-3xl`} />
                    <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='cursor-pointer'>
                        {
                            showConfirmPassword ?
                                <FaEyeSlash  className='absolute right-3 top-3 text-5xl' />
                                : <FaEye  className='absolute right-3 top-3 text-5xl' />
                        }
                    </span>
                    {
                        errors.confirmPassword && <span className='text-red-600 text-xl mt-2 text-center'>{errors.confirmPassword}</span>
                    }
                    <FaLock  className='absolute left-3 top-4 text-gray-500 text-5xl' />
                </div>
                <button className='uppercase py-6'>Signup</button>
            </form>
            <p className='text-center my-12 before:border-b before:border-b-gray-300 before:w-full after:border-b after:border-b-gray-300 after:w-full'>OR</p>
            <button className='flex gap-6 items-center justify-center py-6 w-full bg-transparent text-gray-800 hover:text-white border-2 border-gray-400 uppercase'>
                <FcGoogle className='text-5xl'  />
                Signup With Google
            </button>

            <button className='flex gap-6 items-center justify-center py-6 w-full bg-blue-800 my-8 uppercase'>
                <FaFacebook className='text-5xl' />
                Signup With Facebook
            </button>
        </div>
    )
}

export default Signup