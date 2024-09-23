import React from 'react'

const LoginForm: React.FC = () => {
  
  return (
    <div className="max-w-sm mx-auto">
      <form action="">
        <div className="mb-4">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="w-full p-2 mb-3 border border-grey-500 rounded-lg"
          />
          <input 
            type="password" 
            placeholder="Enter your password"
            className="w-full p-2 border border-grey-500 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Log In</button>
      </form>
    </div>
  )
}

export default LoginForm;


