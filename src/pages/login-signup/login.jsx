import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Login() {

    const [showPassword, setShowPassword] = useState(false)

    const [inputData, setInputData] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        submission: ''
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setInputData(prevData => ({
            ...prevData, [name]: value
        }));

        setErrors(prevError => ({
            ...prevError,
            [name]: ''
        }))
    }

    const validateEmail = (email) => {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
        return emailRegex.test(email);
    };

    function formValidation() {
        let isValid = true;
        const newErrors = {};
        if (inputData.email.trim() === '') {
            newErrors.email = 'Please enter your email address'
            isValid = false;
        } else if (!validateEmail(inputData.email)) {
            newErrors.email = 'Please enter a valid email address'
            isValid = false;
        }

        if(inputData.password.trim() === '') {
            newErrors.password = 'Please enter your password'
            isValid = false;
        }
        setErrors(newErrors)
        return isValid
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (formValidation()) {
            console.log('Logged in', inputData);
            setInputData({
                email: '',
                password: '',
            });
        } else {
            console.log('error');
        }
    }

    return (
        <div className='w-[90%] md:w-3/4 lg:w-3/4'>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-8'>
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
                    <FaEnvelope className='absolute left-3 top-4 text-gray-500 text-5xl' />
                </div>
                <div className="relative flex flex-col">
                    <input type={showPassword ? 'text' : 'password'}
                        name="password"
                        id="password"
                        value={inputData.password}
                        placeholder="Enter your password"
                        onChange={handleInputChange}
                        className={`py-4 px-20 outline-none border-2 ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-2xl text-3xl`} />
                        {
                        errors.password && <span className='text-red-600 text-xl mt-2 text-center'>{errors.password}</span>
                    }
                    <span onClick={() => setShowPassword(!showPassword)} className='cursor-pointer'>
                        {
                            showPassword ?
                                <FaEyeSlash className='absolute right-3 top-3 text-5xl' />
                                : <FaEye className='absolute right-3 top-3 text-5xl' />
                        }
                    </span>
                    <FaLock className='absolute left-3 top-4 text-gray-500 text-5xl' />
                </div>
                <button className='uppercase py-6'>Login</button>
                {
                    errors.submission && <span className='text-red-600 text-xl mt-[-1rem] text-center'>{errors.submission}</span>
                }
                <Link to={'/reset-password'} className='text-blue-600 text-center hover:underline'>Forgot Password?</Link>
            </form>
            <p className='text-center my-12 before:border-b before:border-b-gray-300 before:w-full after:border-b after:border-b-gray-300 after:w-full'>OR</p>
            <button className='flex gap-6 items-center justify-center py-6 w-full bg-transparent text-gray-800 hover:text-white border-2 border-gray-400 uppercase'>
                <FcGoogle className='text-5xl' />
                Login With Google
            </button>
            <button className='flex gap-6 items-center justify-center py-6 w-full bg-blue-800 my-8 uppercase'>
                <FaFacebook className='text-5xl' />
                Login With Facebook
            </button>
        </div>
    )
}

export default Login