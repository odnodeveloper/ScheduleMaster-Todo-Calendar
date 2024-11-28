import { useState } from 'react'


// Prop to switch to login form
// Define the props interface that includes the onToggleLogin function
interface ResetPasswordProps {
  onToggleLogin?: () => void;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ onToggleLogin }) => {
  console.log('Received onToggleLogin:', onToggleLogin);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // onToggleLogin();

    // Simple validation for email format
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setMessage('A reset link has been sent to your email!');
    setEmail(''); // Reset form
    // Example of triggering the toggle back to login after reset
    // Just for demonstration, switching to login on form submit
    // onToggleLogin();

    // You would typically handle the email submission here
    // Example: send an API request to your backend to trigger the password reset email
    // fetch('/api/reset-password', { method: 'POST', body: JSON.stringify({ email }) });
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="text-start text-gray-600 pb-1">Reset Password</div>
      <div className="border-b-2 border-grey-500 w-full"></div>
  
      <form onSubmit={handleSubmit} className="w-full">
        {/* Form */}
        <div className="my-4">
          <input 
              type="email" 
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 border border-grey-500 rounded-lg"
              autoFocus
          />
            {error && <p className="text-red-500">{error}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mx-2 mb-5 text-blue-600 hover:underline"
          >
            Send Reset Link
          </button>
      </form>

      {/* Message after form submission */}
      {message && <p className="text-green-500 mx-4 mb-4">{message}</p>}

      {/* Back to Login Button */}
      <button
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
        onClick={onToggleLogin} // Trigger back to Login
      >
        Go back to Login
      </button>
    </div>
  )
}

export default ResetPassword;