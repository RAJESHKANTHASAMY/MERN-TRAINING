import './Login.css';
import Header from './header.js';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- add this

function Login() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate(); // <-- hook for navigation

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const showAlert = () => {
    alert(`You entered: ${inputValue}`);
    navigate('/dashboard'); // <-- redirect to dashboard
  };

  return (
    <div
  className="log-body"
  style={{ backgroundImage: 'url("/bg1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="App">
      <div className="box1">
        <Header />
        <input
          type="text"
          placeholder="Phone number,username or email"
          value={inputValue}
          onChange={handleChange}
        />
        <input type="password" placeholder="Password" />
        <div className="button">
          <button onClick={showAlert}>Log in</button>
        </div>
        <div>
          <h4>or</h4>
        </div>
        <a href="#" id="login">Log in with Google</a>
        <a href="#" style={{ color: 'black', textDecoration: 'none', marginTop: '25px' }}>
          Forget password?
        </a>
      </div>
      <div className="box2">
        Don't have an account?{' '}
        <a href="#" style={{ textDecoration: 'none' }}>sign up</a>
      </div>
    </div></div>
  );
}

export default Login;
