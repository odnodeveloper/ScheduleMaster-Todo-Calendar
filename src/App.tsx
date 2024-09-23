import useState from 'react';
import LoginSignup from './components/LoginSignupPage/LoginSignup';

function App() {
  return (
    <main className="py-20 h-screen bg-blue-50 flex justify-center items-center text-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full flex flex-col justify-center items-center">
        <div className="pb-10">
          <h1 className="font-bold text-3xl text-blue-600">SCHEDULE MASTER</h1>
          <h2 className="font-bold text-2xl">TODO CALENDAR</h2>
        </div>
        <div>
          <LoginSignup />
        </div>
      </div>
    </main>
  )
}


export default App;
