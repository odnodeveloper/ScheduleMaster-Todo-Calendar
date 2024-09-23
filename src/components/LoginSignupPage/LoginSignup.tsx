import React, { useState } from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const LoginSignup: React.FC = () => {
    // State to track which form is active: login or signup
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="w-full max-w-lg mx-auto">
            {/* Login and Signup Toggle Buttons */}
            <div className="pb-5">
                <div className="text-start">
                    <button 
                        type="button" 
                        className={`pr-1 ${isLogin ? 'font-bold text-blue-600' : 'text-gray-500'}`}
                        onClick={() => setIsLogin(true)}
                    >Log In</button>
                    <button 
                        type="button" 
                        className={`px-2 ${!isLogin ? 'font-bold text-blue-600' : 'text-gray-500'}`}
                        onClick={() => setIsLogin(false)}
                    >Sign Up</button>
                </div>
                <div className="border-b-2 border-grey-500 w-full"></div>
            </div>
            {/* Form based on state */}
            <div className="w-full">
                {isLogin ? (
                    <LoginForm />                    
                ) : (                 
                    <SignupForm />
                )}
            </div>
        </div>
    )
}

export default LoginSignup;
