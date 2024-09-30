import React from "react";

function Account() {

  
  return (
    <>
      <section>
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
              <div className=" flex items-center gap-5">
                <label htmlFor="" className="text-sm text-[#3F3F3F]">
                  First Name *
                </label>
                <input
                  type="text"
                  placeholder="FirstName"
                  className="px-2 py-0.5 text-sm border w-[78%]"
                />
              </div>
              <div className=" flex items-center gap-5">
                <label htmlFor="" className="text-sm text-[#3F3F3F] ">
                  Last Name *
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-2 py-0.5 text-sm border w-[78%]"
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
                <div className="flex items-center gap-12 ">
                  <label htmlFor="" className="text-sm text-[#3F3F3F]">
                    Email*
                  </label>
                  <input
                    type="text"
                    className="px-2 py-0.5 text-sm border w-full"
                    placeholder="Email"
                  />
                </div>
                <div className=" flex items-center gap-7 ">
                  <label htmlFor="" className="text-sm text-[#3F3F3F]">
                    Password
                  </label>
                  <input
                    type="text"
                    placeholder="Password"
                    className="px-2 py-0.5 text-sm border w-full"
                  />
                </div>
                <div className=" flex items-center ">
                  <label htmlFor="" className="text-sm text-[#3F3F3F]">
                    Confirm
                    Password
                  </label>
                  <input
                    type="text"
                    placeholder="Password"
                    className="px-2 py-0.5 text-sm border w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center py-8">
              <button className="bg-[#7DB800] px-1 py-2 rounded-sm text-white ">
                Create an Account
              </button>
              <div className="text-[#A2A2A2] text-sm">Back</div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Account;
