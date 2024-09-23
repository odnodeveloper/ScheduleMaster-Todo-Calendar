import React, { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    password: string;
}

const SignupForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = (): boolean => {
        let tempErrors: Partial<FormData> = {};
        let isValid = true;

        if (!formData.name) {
            tempErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email) {
            tempErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is invalid';
            isValid = false;
        }

        if (!formData.password) {
            tempErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 6) {
            tempErrors.password = 'Password must be at least 6 characters long';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            // Handle form submission (e.g., send data to the server)
            console.log(formData);
            setSubmitted(true); // Mark form as submitted
            setFormData({
                name:'',
                email: '',
                password: ''
            }); // Reset form
        }
    };

    return (
        <div className="w-full max-w-sm mx-auto">
            <form 
                onSubmit={handleSubmit}
                className="w-full"
            >
                {submitted && <p className="text-green-500">Form submitted successfully!</p>} 
                <div className="mb-4 w-full">
                    <input
                        type="text" 
                        id="name"
                        name="name" 
                        value={formData.name}
                        onChange={handleChange} 
                        placeholder="Your Name"
                        className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
                    />
                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>
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
                <div className="mb-4 w-full">
                    <input 
                        type="password"  
                        id="password" 
                        name="password" 
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Your Password" 
                        className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
                    />
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                </div>

                <button 
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-duration-200"
                >Sign Up</button>          
            </form>
        </div>
    );
};


export default SignupForm;