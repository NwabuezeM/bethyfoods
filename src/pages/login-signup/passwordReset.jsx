import { useState } from "react";
import { Link } from "react-router-dom";

const PasswordResetPage = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [emailError, setEmailError] = useState("")

    function handleEmailChange(e) {
        setEmail(e.target.value);
        setEmailError("")
    };

    const validateEmail = (email) => {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
        return emailRegex.test(email);
    };

    function validateForm() {
        let isValid = true;
        if (email.trim() === '') {
            setEmailError("Enter your email address")
            setMessage("")
            isValid = false;
        } else if (!validateEmail(email)) {
            setEmailError("Please enter a valid email")
            setMessage("")
            isValid = false;
        }
        return isValid;
    }


    function handleSubmit(e) {
        e.preventDefault();
        if (validateForm()) {
            setMessage("Password reset link sent to your email.");
            setEmailError("");
            setEmail("")
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3/4 space-y-8 bg-white p-36 rounded-2xl">
                <div>
                    <h2 className="mt-6 text-center font-extrabold tex-gray-400">
                        Reset Your Password
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="flex flex-col items-center">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="text"
                                value={email}
                                onChange={handleEmailChange}
                                className={`appearance-none relative block w-full px-4 py-6 border-4 ${emailError ? 'border-red-600' : 'border-gray-200'} placeholder-gray-500 text-gray-400 rounded-2xl focus:outline-none focus:ring-indigo-500 focus:border-green-500 focus:z-10 text-4xl`}
                                placeholder="Email address"
                            />
                            {
                                emailError && <span className='text-red-600 text-2xl mt-2 text-center'>{emailError}</span>
                            }
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-6 px-4 border border-transparent text-4xl font-medium rounded-full text-white bg-[#d89423] hover:bg-orange-600"
                        >
                            Reset Password
                        </button>
                        {
                            message && <span className='text-green-600 text-3xl my-6 text-center'>{message}</span>
                        }
                        <Link to={'/login-signup'} className='text-blue-600 text-center hover:underline flex justify-center mt-8 text-4xl'>Back to Login</Link>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default PasswordResetPage;
