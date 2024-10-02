import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const InputField = ({ id, label, type, value, onChange, required }) => (
  <div className="flex items-center">
    <label htmlFor={id} className="text-sm text-[#3F3F3F] w-1/2">{label} {required && '*'}</label>
    <input
      id={id}
      className="border-[1px] w-full bg-[#F8FAFC] border-[#94A3B8] px-1"
      placeholder={label}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
    />
  </div>
);

function Account() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const userData = { firstName, lastName, email, password };
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Check if the email already exists
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
      setError("Email already exists!");
      return;
    }

    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    // Clear error and navigate to SignIn after successful account creation
    setError('');
    navigate('/SignIn');
  };

  // Reset error message on input change
  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    if (error) setError(''); // Reset error on any input change
  };

  return (
    <>
      <div className="relative w-full h-[120px]">
        <div className="flex w-full justify-center items-center">
          <div className="flex w-full">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/BgImageHome.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="px-36 flex flex-col gap-6 py-6">
                <div className="text-xs text-[#a7a7a7] relative z-10 flex">
                  <p className="text-white">Home -</p> inner page example
                </div>
                <h1 className="text-2xl text-white relative z-10">
                  Create New Customer Account
                </h1>
              </div>
              <div className="absolute inset-0 bg-black opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 flex justify-center">
        <form onSubmit={handleSubmit} className="sm:w-[45%]">
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="py-2">
            <p className="text-sm font-bold">Personal Information</p>
          </div>
          <div className="py-1 space-y-1">
            <InputField
              id="firstName"
              label="First Name"
              type="text"
              value={firstName}
              onChange={handleInputChange(setFirstName)}
              required
            />
            <InputField
              id="lastName"
              label="Last Name"
              type="text"
              value={lastName}
              onChange={handleInputChange(setLastName)}
              required
            />
            <div className="flex gap-1 py-4">
              <input type="checkbox" id="newsletter" />
              <label htmlFor="newsletter" className="text-xs text-[#3F3F3F]">Sign Up for Newsletter</label>
            </div>
          </div>

          <div>
            <div className="py-1">
              <p className="font-bold text-sm">Email & Password</p>
            </div>
            <div className="space-y-1 py-2">
              <InputField
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={handleInputChange(setEmail)}
                required
              />
              <InputField
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={handleInputChange(setPassword)}
                required
              />
              <InputField
                id="confirm-password"
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={handleInputChange(setConfirmPassword)}
                required
              />
            </div>
          </div>

          <div className="flex justify-between items-center py-8">
            <button className="bg-[#7DB800] px-1 py-2 rounded-sm text-white">
              Create an Account
            </button>
            <div className="text-sm">
              Already have an account? 
              <Link to='/SignIn' className="text-[#7DB800] font-bold underline">Login</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Account;
