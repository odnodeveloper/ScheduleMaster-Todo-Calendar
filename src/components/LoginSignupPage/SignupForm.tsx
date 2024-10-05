import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


interface FormData {
    name: string;
    email: string;
    password: string;
}

// Prop to switch to login form
interface SignupFormProps {
    onToggleLogin: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onToggleLogin }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [submitted, setSubmitted] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    
    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    // State to track if the password is weak
    const [isWeakPassword, setIsWeakPassword] = useState(false);
    // Track if the password field has been interacted with
    const [passwordTouched, setPasswordTouched] = useState(false);

    // Handle input field changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        // Check if password is weak
        if (name === 'password') {
            const isValid = validatePassword(value);
            setIsWeakPassword(!isValid); // Update state based on password validity
            setPasswordTouched(true); // Set password as touched when user types
        }
    }

    const validatePassword = (password: string): boolean => {
        return (
            password.length >= 6 &&
            /\d/.test(password) &&
            /[A-Z]/.test(password) &&
            /[!@#$%^&*(),.?":{}|<>]/.test(password)
        )
    }

    // Validation function
    const validate = (): boolean => {
        let tempErrors: Partial<FormData> = {};
        let isValid = true;

        // Check if name is present
        if (!formData.name) {
            tempErrors.name = 'Name is required';
            isValid = false;
        }

        // Check email is valid
        if (!formData.email) {
            tempErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is invalid';
            isValid = false;
        }

        // Check if password meets all requirements
        if (!formData.password) {
            tempErrors.password = 'Password is required';
            isValid = false;
        } 

        setErrors(tempErrors);
        return isValid;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            // Save form data to localStorage
            localStorage.setItem('user', JSON.stringify(formData));
            console.log('User signed up:', formData);
            // Handle form submission (e.g., send data to the server)
            // console.log(formData);
            setSubmitted(true); // Mark form as submitted
            setFormData({
                name:'',
                email: '',
                password: ''
            }); // Reset form
            setIsWeakPassword(false); // Reset weak password state
            setPasswordTouched(false) // Reset touched state
        }
    };

    const passwordMinLength = formData.password.length >= 6;
    const passwordHasNumber = /\d/.test(formData.password);
    const passwordHasUppercase = /[A-Z]/.test(formData.password);
    const passwordHasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);

    return (
        <div className="w-full max-w-sm mx-auto">
            <form onSubmit={handleSubmit} className="w-full">
                {submitted && <p className="text-green-500">Form submitted successfully!</p>} 
                
                {/* Name Field */}
                <div className="mb-4 w-full">
                    <input
                        type="text" 
                        id="name"
                        name="name" 
                        value={formData.name}
                        onChange={handleChange} 
                        placeholder="Your Name"
                        className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
                        autoFocus
                    />
                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>

                {/* Email field */}
                <div className="mb-4 w-full">
                    <input 
                        type="email"  
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>

                {/* Password Field */}
                <div className="mb-4 w-full relative">
                    <input 
                        type={passwordVisible ? "text" : "password" }  
                        id="password" 
                        name="password" 
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Your Password" 
                        className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
                    />
                    {/* Icon for toggling password visibility */}
                    <span
                        className="absolute right-3 top-3 cursor-pointer text-gray-500 hover:text-gray-700"
                        onClick={togglePasswordVisibility}
                    >
                        {passwordVisible ? <FaEyeSlash /> : <FaEye /> } 
                    </span>
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                </div>
                
                {/* Password Requirements */}
                {passwordTouched && isWeakPassword && (
                    <ul className="text-sm mb-4 text-left list-disc list-inside">
                        <li className={passwordMinLength ? 'text-green-600' : 'text-red-600'}>
                            At least 6 characters
                        </li>
                        <li className={passwordHasNumber ? 'text-green-600' : 'text-red-600'}>
                            At least one number
                        </li>
                        <li className={passwordHasUppercase ? 'text-green-600' : 'text-red-600'}>
                            At least one uppercase letter
                        </li>
                        <li className={passwordHasSpecialChar ? 'text-green-600' : 'text-red-600'}>
                            At least one special character (e.g. !@#$%^&)
                        </li>
                    </ul>
                )}

                {/* Submit Button */}
                <button 
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-duration-200"
                >
                    Sign Up
                </button>   

                {/* Have Account */}
                <div className="py-3 items-center">
                    <span>Already have an account?</span>
                    <button 
                        type="button"
                        className="mx-2 text-blue-600 hover:underline"
                        onClick={onToggleLogin}
                    >
                        Log In
                    </button>
                </div>       
            </form>
        </div>
    );
};


export default SignupForm;