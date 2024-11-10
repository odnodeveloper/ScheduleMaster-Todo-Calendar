import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoginSignup from './components/LoginSignupPage/LoginSignup';
import ResetPassword from './components/LoginSignupPage/ResetPassword';
import Dashboard from './components/Dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Content />
    </Router>
  )
}

// Separate Content component to handle layout based on the current route
const Content: React.FC = () => {
  const location = useLocation(); 
  // Check if the current route is the dashboard
  const isDashboard = location.pathname === "/dashboard";

  return (
    <Routes>
      {/* Apply different layouts based on the current route */}
      { isDashboard ? (
        // Full screen layout for the Dashboard
        <Route 
          path="/dashboard" 
          element={<div className="h-screen w-screen"><Dashboard /></div>} 
        />
      ) : (
        // Default layout for LoginSignup and ResetPassword
        <Route
          path="*"
          element={
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
          }
        />
      )};
    </Routes>
  )
}


export default App;