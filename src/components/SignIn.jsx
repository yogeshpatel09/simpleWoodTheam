import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find((user) => user.email === email && user.password === password);

    if (user) {
      console.log('Login successful');
      navigate('/');
    } else {
      setError('Invalid email or password. Please sign up first.');
    }
  };

  return (
    <div className="py-16 flex justify-center">
      <form className="sm:w-[25%]" onSubmit={handleSubmit}>
        <div className="space-y-4 py-2">
          <div>
            <label htmlFor="email" className="text-sm text-[#3F3F3F] w-1/2">
              Email*
            </label>
            <input
              className="border-[1px] px-2 py-1 w-full bg-[#F8FAFC] border-[#94A3B8]"
              placeholder="Email"
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-bold text-[#3F3F3F] w-1/2">
              Password*
            </label>
            <input
              className="border-[1px] px-2 py-1 w-full bg-[#F8FAFC] border-[#94A3B8]"
              placeholder="Password"
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        <div className="flex justify-around items-center pt-5">
          <button type="submit" className="bg-[#7DB800] w-full px-4 py-2 rounded-sm text-white">
            Log in
          </button>
        </div>
        <div className="flex justify-center text-sm">
          Do you have an account?
          <Link to="/Account" className="text-[#7DB800] underline">
            Create Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
