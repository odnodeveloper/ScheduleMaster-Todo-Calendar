import React, { useState } from 'react';

interface FormData {
    username: string;
    email: string;
    password: string;
}

const SignupForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = (): boolean => {
        let tempErrors: Partial<FormData> = {};
        let isValid = true;

        if (!formData.username) {
            tempErrors.username = 'Username is required';
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
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text" 
                    id="username"
                    name="username" 
                    value={formData.username}
                    onChange={handleChange} 
                    placeholder="Username"
                />
                {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
            </div><br />
            <div>
                <input 
                    type="email"  
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div><br />
            <div>
                <input 
                    type="password"  
                    id="password" 
                    name="password" 
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Your password" 
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div><br />

            <button type="submit">Sign Up</button>          
        </form>
    );
};


export default SignupForm;