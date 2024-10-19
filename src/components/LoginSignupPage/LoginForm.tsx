import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Props that handle password reset
interface LoginFormProps {
  onForgotPassword: () => void; 
}

const LoginForm: React.FC<LoginFormProps> = ({ onForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Get the saved user from localStorage
    const savedUser = localStorage.getItem('user');
    if (!savedUser) {
      setError('No user found. Please sign up first.');
      return;
    } 

    const { email: savedEmail, password: savedPassword } = JSON.parse(savedUser);

    // Check if credentials match
    if (email === savedEmail && password === savedPassword) {
      setLoggedIn(true);
      setError(null);
       // Navigate to the Dashboard only if login is successful
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle visibility
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      <form onSubmit={handleLogin} className="w-full">
        {loggedIn && <p className="text-green-500">Login successful!</p>}
        
        <div className="mb-4 w-full">
          {/* Email Field */}
          <input 
            type="email" 
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-2 mb-3 border border-grey-500 rounded-lg"
          />

          {/* Password Field */}
          <div className="relative">
            <input 
              type={passwordVisible ? "text" : "password" } // Toggle between 'text' and 'password'
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-2 border border-grey-500 rounded-lg"
            />

            {/* Icon for toggling password visibility */}
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye /> } 
            </span>
          </div>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Log In
        </button>

        {/* Forgot Password Link */}
        <div className="py-3 text-center">
          <span>Forgot password?</span>
          <a 
            href="/reset-password"
            className="mx-2 text-blue-600 hover:underline" 
            onClick={onForgotPassword} // Trigger reset password form
          >
             Click Here!
          </a>
        </div>
      </form> 
    </div>
  )
}

export default LoginForm;


