import React from "react";
import { FaRegHeart, FaRegUserCircle, FaSearch } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";

function Header() {
  return (
    <>
      <header className="">
        <div className="relative  w-full z-10 h-24 flex flex-col l justify-around items-center py-2 bg-[#212121] ">
          <div className="flex w-full justify-around ">
            <div className="hidden sm:block">
            <div className="relative z-10  flex bg-white h-8 items-center px-2 rounded-full">
              <input
                type="text"
                placeholder="Search"
                className="bg-white  outline-none "
                style={{}}
              />
              <FaSearch />
            </div>
            </div>
            <div className="text-white relative z-10 flex">
              <span>
                <svg
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.6588 9.69493L19.8187 13.3692L16.1584 13.3398L12.5415 7.18969L9.02587 13.2789L5.38315 13.2525L12.5006 0.924681L17.6588 9.69493ZM20.7969 15.0291L22.5796 18.0592L2.69747 17.9042L4.43393 14.8966L20.7969 15.0291ZM23.573 19.7466L21.8389 22.7502L0.000594258 22.5753L1.73705 19.5677L23.573 19.7466Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="font-bold">
                <h1>
                  SimpleWood <span className="text-green-500">.</span>
                </h1>
              </span>
            </div>
             <div className="hidden sm:block">
            <div className="relative z-10 flex h-8 gap-3 items-center ">
              <select>
                <option value="" className="outline-none ">
                  English
                </option>
              </select>
              <select>
                <option value="" className="outline-none">
                  usd
                </option>
              </select>
              <span>
                <FaRegHeart className="text-lg text-white "  />
              </span>
              <span>
                <FaRegUserCircle className="text-lg text-white " />
              </span>
              <span>
                <FaCartFlatbed className="text-lg text-white " />
              </span>
            </div>
            </div>
          </div>
          <div className="">
          <div className=" w-full flex justify-center gap-6 text-white ">
            <ul className="flex gap-2 sm:gap-6">
              <li className=" hover:text-[#7DB800] hover:border-b" href="">
                Home
              </li>
              <li className=" hover:text-[#7DB800] hover:border-b hover:decoration-red-500 transition-all duration-200 " href="">
                Products
              </li>
              <li className=" hover:text-[#7DB800] hover:border-b" href="">
                Elements
              </li>
              <li className=" hover:text-[#7DB800] hover:border-b " href="">
                Pages
              </li>
              <li className=" hover:text-[#7DB800] hover:border-b" href="">
                Shop
              </li>
              <li className=" hover:text-[#7DB800] hover:border-b" href="">
                Sale
              </li>
            </ul>
          </div>
        </div>
        </div>
        
      </header>
    </>
  );
}

export default Header;
