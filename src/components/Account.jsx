import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Account() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    Navigate('/SignIn');

  };


  return (
    <>
      
        <div className="relative w-full h-[120px]  ">
          <div className="flex   w-full justify-center items-center ">
            <div className="flex w-full jx">
              <div
                className="absolute inset-0 "
                style={{
                  backgroundImage: "url('/BgImageHome.png')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className=" px-36 flex flex-col gap-6 py-6">
                  <p className="text-xs text-[#a7a7a7]  relative z-10 flex ">
                    <p className="text-white"> Home -</p> inner page example
                  </p>
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
          <form className="sm:w-[45%]">
            <div className="py-2">
              <p className="text-sm font-bold">Personal Information</p>
            </div>
            <div className="py-1 space-y-1">
              <div className=" flex items-center  w-full">
                <label htmlFor="" className="text-sm text-[#3F3F3F] w-1/2">
                  First Name *
                </label>
                <input
                  className="px-1  w-full border-[1px] bg-[#F8FAFC] border-[#94A3B8] "
                  placeholder="First Name"
                  id="firstName"
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className=" flex items-center ">
                <label htmlFor="" className="text-sm text-[#3F3F3F] w-1/2">
                  Last Name *
                </label>
                <input
                  className=" w-full border-[1px] bg-[#F8FAFC] border-[#94A3B8] "
                  placeholder="Last Name"
                  id="lastName"
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className=" flex gap-1 py-4">
                <input type="checkbox" />
                <label htmlFor="" className="text-xs text-[#3F3F3F]">
                  Sign Up for Newsletter
                </label>
              </div>
            </div>

            <div className="">
              <div className="py-1">
                <p className="font-bold text-sm">Email & Password</p>
              </div>
              <div className="space-y-1 py-2">
                <div className="flex items-center  ">
                  <label htmlFor="" className="text-sm text-[#3F3F3F] w-1/2">
                    Email*
                  </label>
                  <input
                    className="border-[1px] w-full bg-[#F8FAFC] border-[#94A3B8] "
                    placeholder="Email"
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className=" flex items-center ">
                  <label htmlFor="" className="text-sm text-[#3F3F3F] w-1/2">
                    Password
                  </label>
                  <input
                    className=" border-[1px] w-full bg-[#F8FAFC] border-[#94A3B8] "
                    placeholder="Password"
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className=" flex items-center ">
                  <label htmlFor="" className="text-sm text-[#3F3F3F] w-1/2">
                    Confirm
                    Password
                  </label>
                  <input
                    className=" border-[1px] w-full bg-[#F8FAFC] border-[#94A3B8] "
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center py-8">
              <button className="bg-[#7DB800] px-1 py-2 rounded-sm text-white ">
                Create an Account
              </button>
              <Link to='/SignIn' className="text-sm">Already have an account?
              <span className="text-[#7DB800] font-bold underline">login</span></Link>
              
            </div>
          </form>
          <div className="">
          
          </div>
        </div>
      
    </>
  );
}

export default Account;
