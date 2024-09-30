import React from "react";
import { FaAngleUp } from "react-icons/fa";

function SoppingCart() {
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
                  <p className="text-white"> Home -</p> ShoppingCart
                </p>
                <h1 className="text-2xl text-white relative z-10">
                  ShoppigCart
                </h1>
              </div>
              <div className="absolute inset-0 bg-black opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 px-6">
        <div className="flex justify-center items-center">
          <div className="w-[80%] flex justify-around gap-6">
            <div className="w-full  ">
              <div className=" w-full flex text-sm justify-between border-b py-2">
                <p>Item</p>
                <div className="flex w-1/3 justify-between">
                  <p>Price</p>
                  <p>Qty </p>
                  <p> Subtotal</p>
                </div>
              </div>
              <div className="w-full flex text-sm  justify-between py-2">
                <p className="flex ">
                  <img className="w-24" src="/shopping01.png" alt="" />
                  <div className="">
                    <p>Simple Wood Chair Collection</p>
                    <p className="flex">
                      <p>Size:</p>
                      <p>29</p>
                    </p>
                    <p className="flex">
                      <p>Color:</p>
                      <p>Green</p>
                    </p>
                  </div>
                </p>
                <div className="flex w-1/3 justify-between">
                  <p>$45.00</p>
                  <p>1</p>
                  <p> $45.00</p>
                </div>
              </div>
              <div className="text-sm">Move to Wishlist</div>
              <div className="w-full flex text-sm justify-between py-2">
                <p className="flex ">
                  <img className="w-28" src="/shopping02.png" alt="" />
                  <div className="">
                    <p>Simple Wood Chair Collection</p>
                    <p className="flex">
                      <p>Size:</p>
                      <p>29</p>
                    </p>
                    <p className="flex">
                      <p>Color:</p>
                      <p>Green</p>
                    </p>
                  </div>
                </p>
                <div className="flex w-1/3 justify-between">
                  <p>$45.00</p>
                  <p>1</p>
                  <p> $45.00</p>
                </div>
              </div>
              <div className="text-sm">Move to Wishlist</div>
              <div className="py-2">
                <div className="flex justify-end border-b py-1 gap-2">
                  <p>edit</p>
                  <p>delete</p>
                </div>
              </div>
              <div className="text-sm">
                <p className="flex items-center py-1">
                  Apply Discount Code <FaAngleUp />
                </p>
                <div className="flex justify-between">
                  <div className="">
                    <input type="text" className="px-2 py-1" />
                    <button className="bg-black text-white font-bold px-2 py-1">
                      Apply Discount
                    </button>
                  </div>
                  <div className="">
                    <button className="bg-[#7DB800] px-2 py-1 font-bold text-white">
                      Update Shopping Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-[#F5F5F5] px-8 py-4">
              <div className="text-sm font-bold border-b ">
                <h1 className="py-1">Summary</h1>
              </div>
              <div className="text-sm flex py-3 px-2 text-[#4F4F4F] justify-between">
                <p className="text-xs ">Estimate Shipping and Tax</p>
                <FaAngleUp />
              </div>
              <div className="">
                <div className="text-xs  border-b text-[#4F4F4F] ">
                  <h1 className="py-1">Country</h1>
                </div>
                <div className="text-sm flex py-3 px-2 text-[#4F4F4F] justify-between">
                  <p className="text-xs">daisy.watson@example.com</p>
                  <FaAngleUp />
                </div>
              </div>
              <div className="text-[#4F4F4F]">
                <div className="text-xs  border-b ">
                  <h1 className="py-1">State/Province</h1>
                </div>
                <div className="text-sm flex py-3 px-2 justify-between">
                  <p className="text-xs">Please select a region</p>
                  <FaAngleUp />
                </div>
              </div>
              <div className="text-[#4F4F4F]">
                <div className="text-xs  border-b ">
                  <h1 className="py-1">Zip/Postal Code</h1>
                </div>
                <div className="text-sm flex py-3 px-2 justify-between">
                  <p className="text-xs">Please select Zip/Postal Code</p>
                  <FaAngleUp />
                </div>
              </div>
              <div className="text-sm space-y-1">
                <p>Flat Rate</p>
                <p className="flex items-center gap-3">
                  {" "}
                  <p className="bg-[#7DB800] h-4 w-4 rounded-full"></p>Fixed
                  $5.00
                </p>
              </div>
              <div className="text-sm space-y-1 py-2">
                <p>Best Way</p>
                <p className="flex items-center gap-3">
                  {" "}
                  <p className="bg-[#ffffff] h-4 w-4 rounded-full"></p>Table
                  Rate $15.00
                </p>
              </div>
              <div className="border-t border-b py-2 text-xs">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>$45.00</p>
                </div>
                <div className="flex justify-between">
                  <p>Tax</p>
                  <p>$0.00</p>
                </div>
              </div>
              <div className="flex justify-between py-3">
                <p>Order Total</p>
                <p>$45.00</p>
              </div>
              <div className="text-white py-3">
                <button className="bg-[#7DB800]  px-3.5 py-3">
                  Proceed to Checkout
                </button>
              </div>
              <div className="text-xs text-[#4F4F4F] flex justify-center underline">
                <p>Check Out with Multiple Addresses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SoppingCart;
