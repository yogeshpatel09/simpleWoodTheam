import React from "react";

function DashBoard() {
  return (
    <>
      <div className="relative w-full h-[120px]  ">
        <div className="flex   w-full justify-center items-center ">
          <div className="flex w-full ">
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
                  <p className="text-white"> Home -</p> My Dashboard
                </p>
                <h1 className="text-2xl text-white relative z-10">
                My DasBoard
                </h1>
              </div>
              <div className="absolute inset-0 bg-black opacity-80"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center  py-16">
        <div className="sm:w-[65%]">
          <div className="flex flex-col sm:flex-row justify-between gap-8 py-2" >
            <div className="">
              <div className="bg-gray-200 text-sm font-bold px-1 py-2">
                Account Dashboard
              </div>
              <ul className="text-sm text-[#828282] space-y-2 py-2">
                <li>Account Information</li>
                <li>Address Book</li>
                <li>My Orders</li>
                <li>My Wishlist</li>
                <li>Newsletter Subscriptions</li>
              </ul>
            </div>

            <div className="flex flex-col px-2">
              <h1 className="font-bold pb-4 text-sm">Account Information</h1>
              <div className="text-sm flex gap-3">
                <div className="text-sm">
                  <ul>
                    <li className="text-[#7DB800] pb-2">Contact Information</li>
                    <li className="text-[#828282] pb-6">
                      Alex Driver <br />
                      ExampeAdress@gmail.com
                    </li>
                    <li className="flex gap-4 pb-12">
                      <p className="underline">Edit</p>{" "}
                      <p className="underline">Change Password</p>
                    </li>
                    <li className="flex gap-2 pb-6">
                      <p className="font-bold text-sm">Address Book</p>{" "}
                      <p className="underline">Edit</p>
                    </li>
                    <li className="text-[#7DB800] pb-3">
                      Default Billing Address
                    </li>
                    <li className="text-[#828282] pb-6">
                      You have not set a default billing <br />address.
                    </li>
                    <li className="underline">Edit Address</li>
                  </ul>
                </div>
                <div className="text-sm">
                  <ul>
                    <li className="text-[#7DB800] pb-2">Newsletters</li>
                    <li className="text-[#828282] pb-6">
                      You don't subscribe to our  newsletter.
                    </li>
                    <li className="underline pb-24">Edit</li>
                    <li className="text-[#7DB800] pb-2">
                      Default Shipping Address
                    </li>
                    <li className="text-[#828282] pb-11 ">
                      You have not set a default shipping <br /> address.
                    </li>
                    <li className="underline ">Edit Address</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
