import React, { useState, useEffect } from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import ResetPassword from './ResetPassword'

const LoginSignup: React.FC = () => {
    // State to track which form is active: login, signup or reset password
    const [activeForm, setActiveForm] = useState<'login' | 'signup' | 'resetPassword'>('login');

    // Function to switch back to login
    const handleToggleLogin = () => {
        console.log('Switching to login form');
        setActiveForm('login');
    }

    // Log whenever activeForm changes to ensure state is updating correctly
    useEffect(() => {
        console.log('Form updated to:', activeForm);
    }, [activeForm]);

    return (
        <div className="w-full max-w-lg mx-auto">
            {/* Toggle buttons only for Login and Signup */}
            <div className="pb-5">
                {activeForm !== 'resetPassword' && ( // Only show toggle buttons when not in reset password
                    <div className="text-start">
                        <button 
                            type="button" 
                            className={`pr-1 ${activeForm === 'login' ? 'font-bold text-blue-600' : 'text-gray-500'}`}
                            onClick={() => setActiveForm('login')}
                        >
                            Log In
                        </button>
                        <button 
                            type="button" 
                            className={`px-2 ${activeForm === 'signup' ? 'font-bold text-blue-600' : 'text-gray-500'}`}
                            onClick={() => setActiveForm('signup')}
                        >
                            Sign Up
                        </button>
                    </div>
                )}
                <div className="border-b-2 border-grey-500 w-full"></div>
            </div>
            
            {/* Conditional rendering based on activeForm state */}
            <div className="w-full">
                {activeForm === 'login' && (
                    <LoginForm onForgotPassword={() => setActiveForm('resetPassword')} />
                )} 
                {activeForm === 'signup' && (
                    <SignupForm onToggleLogin={() => setActiveForm('login')} />
                )}
                {activeForm === 'resetPassword' && (
                    <>
                        {console.log('Passing handleToggleLogin to ResetPassword:', handleToggleLogin)}
                        <ResetPassword onToggleLogin={handleToggleLogin} />   
                    </>
                )}             
            </div>
        </div>
    )
}

export default LoginSignup;



    
         

