import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginSignup from './components/LoginSignupPage/LoginSignup';
import ResetPassword from './components/LoginSignupPage/ResetPassword';


function App() {
  return (
    <Router>
      <main className="py-20 h-screen bg-blue-50 flex justify-center text-center items-center">
        <div className="bg-white p-20 rounded-lg shadow-lg max-w-lg w-full flex flex-col justify-center">
          <div className="pb-10">
            <h1 className="font-bold text-3xl text-blue-600">SCHEDULE MASTER</h1>
            <h2 className="font-bold text-2xl text-gray-600">TODO CALENDAR</h2>
          </div>
          <div>
            {/* Router handles navigation */}
            <Routes>
              {/* Route to render/display LoginSignup form */}
              <Route path="/" element={<LoginSignup />} />
              {/* Route ro render ResetPassword form */}
              <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>
          </div>
        </div>
      </main>
    </Router>
  )
}


export default App;
