import React from 'react'

function Shop() {
  return (
    <div>
      <div className="w-full flex justify-center items-center">
           <div className="w-[75%]  py-5 bg-[#EBEFE5] ">

            <div className=" sm:flex w-full gap-4">
              <div className=" sm:w-1/2 ">
              <div className=" text-xl gap-2">
                <img className="  " src="/homebody01.png" alt="" />
                <span className="text-[#7DB800] text-2xl">+</span> Sofas
              </div>
              <div className=" text-xl gap-2">
                <img className="  " src="/homebody03.png" alt="" />
                <span className="text-[#7DB800] text-2xl">+</span> Sofas
              </div>
              <div className=" text-xl gap-2">
                <img className="  " src="/homebody05.png" alt="" />
                <span className="text-[#7DB800] text-2xl">+</span> Sofas
              </div>
              <div className=" text-xl gap-2">
                <img className="  " src="/homebody07.png" alt="" />
                <span className="text-[#7DB800] text-2xl">+</span> Sofas
              </div>
              </div>
              <div className="sm:w-1/2 ">
              <div className="">
                <img className="w-full " src="/homebody02.png" alt="" />
                <span className="text-[#7DB800] text-2xl">+</span> Cupboards
              </div>
              <div className="">
                <img className="w-full " src="/homebody04.png" alt="" />
                <span className="text-[#7DB800] text-2xl">+</span> Cupboards
              </div>
              <div className="flex flex-col gap-4 py-9 px-4 ">
                <h1>Get 10% Discount</h1>
                <p>Get 10% discount with notified about the latest news and updates, no spam, we proise1</p>
                <input type="text"
                placeholder="Enter your email address"
                className="px-2 py-1 rounded-full" />
              </div>
              <div className="">
                <img className="w-full " src="/homebody06.png" alt="" />
                <span className="text-[#7DB800] text-2xl">+</span> Cupboards
              </div>
              </div>
            </div>
            <div className="bg-[#EBEFE5] px-10 py-6">
              <div className="sm:flex w-full ">
                
                <div className=" sm:w-1/2">
                  <h1 className="text-md font-bold">Join our newsletter for £10 off</h1>
                  <p className="text-sm text-[#828282]">We'll email you a voucher worth £10 off your first order over £50. By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.</p>
                 
                </div>
                <div className="sm:w-1/2 flex justify-center items-center">
                <input type="text"
                  className="px-3 py-2 rounded-full"
                  placeholder="Enter your email address" />
                </div>
              </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Shop
