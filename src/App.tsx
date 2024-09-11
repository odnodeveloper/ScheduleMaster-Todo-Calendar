import useState from 'react';
import './App.css'
import SignupForm from './components/Forms/Signup';

function App() {
  return (
    <>
      <div className="text-center">
        <h1>SCHEDULE MASTER</h1>
        <h2>TODO CALENDAR</h2>
      </div>
      <div className="button">
        <button type="button">Log In</button>
        <button type="button">Sign Up</button>
      </div>
      <div>
        <SignupForm />
        {/* <Log In /> */}
      </div>
    </>
  )
}


export default App;
