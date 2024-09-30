import { CiHeart, CiSearch } from "react-icons/ci";
import { FaFacebookF, FaGoogle, FaRegCircle, FaTwitter } from "react-icons/fa";
import { IoArrowUpSharp } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbBrandYoutube } from "react-icons/tb";

export default function Catalog() {
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
                  <p className="text-white"> Home -</p> New Luma Yoga Collection
                </p>
                <h1 className="text-2xl text-white relative z-10">
                Simple Wood Chair Collection
                </h1>
              </div>
              <div className="absolute inset-0 bg-black opacity-80"></div>
            </div>
          </div>
        </div>
      </div>

      <main className="px-8 md:px-20">
        <div className="flex flex-col md:flex-row justify-center gap-10 py-10">
          <div className="flex flex-col gap-5 w-full md:w-1/3">
            <h1 className="font-semibold text-2xl">Shopping Options</h1>

            <div className="flex flex-col gap-2">
              <hr className="bg-[#dedede] h-0.5" />
              <div className="flex justify-between">
                <p>Style</p>
                <RiArrowDropDownLine className="text-2xl text-gray-500" />
              </div>
              <hr className="bg-[#dedede] h-0.5" />
              <div className="flex justify-between">
                <p>Category</p>
                <RiArrowDropDownLine className="text-2xl text-gray-500" />
              </div>
              <hr className="bg-[#dedede] h-0.5" />
              <div className="flex justify-between">
                <p>Size</p>
                <RiArrowDropDownLine className="text-2xl text-gray-500" />
              </div>
              <hr className="bg-[#dedede] h-0.5" />
              <div className="flex justify-between">
                <p>Price</p>
                <RiArrowDropDownLine className="text-2xl text-gray-500" />
              </div>
              <hr className="bg-[#dedede] h-0.5" />
              <div className="flex justify-between">
                <p>Color</p>
                <RiArrowDropDownLine className="text-2xl text-gray-500" />
              </div>
              <hr className="bg-[#dedede] h-0.5" />
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <h1 className="font-bold text-xl">Compare Products</h1>
                <span className="mt-1">(2 items)</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <span>X</span>
                  <p className="underline">Summit Watch</p>
                </div>
                <div className="flex gap-2">
                  <span>X</span>
                  <p className="underline">Cruise Dual Analog Watch</p>
                </div>
              </div>
              <div className="flex gap-8">
                <button className="text-white bg-[#7db800] py-2 px-5">Compare</button>
                <button>Clear All</button>
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="font-semibold">My Wish List</h1>
                <p>You have no items in your wish list.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full md:w-2/3">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <img className="h-10" src="/img4.png" alt="" />
                <img className="h-10" src="/img2.png" alt="" />
                <p>items 1-9 of 32</p>
              </div>

              <div className="flex items-center">
                <p>Sort By</p>
                <div className="flex bg-[#f0f0f0] px-4 h-8 items-center">
                  <label className="font-light">position</label>
                  <RiArrowDropDownLine className="mt-1 text-xl" />
                </div>
                <IoArrowUpSharp className="mt-1 text-xl" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {/* Product 1 */}
              <div className="flex flex-col gap-5">
                <img className="bg-[#f0f0f0] w-full" src="/catalog.png" alt="Cupboards 1" />
                <p className="font-bold">Cupboards</p>
                <div className="flex gap-2">
                  <s className="text-[#c4c4c4]">$ 45.00</s>
                  <span className="font-bold">$ 45.00</span>
                </div>
                <div className="flex gap-2">
                  <div className="flex">
                    <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#c4c4c4] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#c4c4c4] text-xl" />
                  </div>
                  <p className="text-[#c4c4c4] underline text-sm">3 reviews</p>
                </div>
              </div>

              {/* Product 2 */}
              <div className="flex flex-col gap-5">
                <img className="bg-[#f0f0f0] w-full" src="/catalog.png" alt="Cupboards 2" />
                <p className="font-bold">Cupboards</p>
                <div className="flex gap-2">
                  <s className="text-[#c4c4c4]">$ 45.00</s>
                  <span className="font-bold">$ 45.00</span>
                </div>
                <div className="flex gap-2">
                  <div className="flex">
                    <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#c4c4c4] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#c4c4c4] text-xl" />
                  </div>
                  <p className="text-[#c4c4c4] underline text-sm">3 reviews</p>
                </div>
              </div>

              {/* Product 3 */}
              <div className="flex flex-col gap-5">
                <img className="bg-[#f0f0f0] w-full" src="/catalog.png" alt="Cupboards 3" />
                <p className="font-bold">Cupboards</p>
                <div className="flex gap-2">
                  <s className="text-[#c4c4c4]">$ 45.00</s>
                  <span className="font-bold">$ 45.00</span>
                </div>
                <div className="flex gap-2">
                  <div className="flex">
                    <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#c4c4c4] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#c4c4c4] text-xl" />
                  </div>
                  <p className="text-[#c4c4c4] underline text-sm">3 reviews</p>
                </div>
              </div>

              {/* Product 4 */}
              <div className="flex flex-col gap-5">
                <img className="bg-[#f0f0f0] w-full" src="/catalog.png" alt="Cupboards 4" />
                <p className="font-bold">Cupboards</p>
                <div className="flex gap-2">
                  <s className="text-[#c4c4c4]">$ 45.00</s>
                  <span className="font-bold">$ 45.00</span>
                </div>
                <div className="flex gap-2">
                  <div className="flex">
                    <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#c4c4c4] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#c4c4c4] text-xl" />
                  </div>
                  <p className="text-[#c4c4c4] underline text-sm">3 reviews</p>
                </div>
              </div>

              {/* Product 5 */}
              <div className="flex flex-col gap-5">
                <img className="bg-[#f0f0f0] w-full" src="/catalog.png" alt="Cupboards 5" />
                <p className="font-bold">Cupboards</p>
                <div className="flex gap-2">
                  <s className="text-[#c4c4c4]">$ 45.00</s>
                  <span className="font-bold">$ 45.00</span>
                </div>
                <div className="flex gap-2">
                  <div className="flex">
                    <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#c4c4c4] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#c4c4c4] text-xl" />
                  </div>
                  <p className="text-[#c4c4c4] underline text-sm">3 reviews</p>
                </div>
              </div>

              {/* Product 6 */}
              <div className="flex flex-col gap-5">
                <img className="bg-[#f0f0f0] w-full" src="/catalog.png" alt="Cupboards 6" />
                <p className="font-bold">Cupboards</p>
                <div className="flex gap-2">
                  <s className="text-[#c4c4c4]">$ 45.00</s>
                  <span className="font-bold">$ 45.00</span>
                </div>
                <div className="flex gap-2">
                  <div className="flex">
                    <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#FF9900] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#c4c4c4] text-xl" />
                    <MdOutlineStarPurple500 className="fill-[#c4c4c4] text-xl" />
                  </div>
                  <p className="text-[#c4c4c4] underline text-sm">3 reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
