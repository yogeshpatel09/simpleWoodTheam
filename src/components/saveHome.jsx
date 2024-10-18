import { FaSearch, } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {

  const Data = [
    { id: '01', Image: '/homebody01.png', name: 'Sofas', logo: '+' },
    { id: '02', Image: '/homebody03.png', name: 'Tables', logo: '+' },
    { id: '03', Image: '/homebody02.png', name: 'Cupboards', logo: '+' },
    { id: '04', Image: '/homebody04.png', name: 'Beds & Mattresses', logo: '+' },
    { id: '05', Image: '/homebody05.png', name: 'Floor lamps & Fixtures', logo: '+' },
    { id: '06', Image: '/homebody06.png', name: 'Commode', logo: '+' },
    { id: '07', Image: '/homebody07.png', name: 'Shelving', logo: '+' },
  ];
  return (
    <>
      <div className="w-full">
        <div className="relative w-full   ">
          <div className="flex   w-full justify-center items-center ">
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
                <div className="absolute inset-0 bg-black opacity-80"></div>
              </div>

              <div className="relative  w-full z-10  flex flex-col l justify-around items-center ">
                <div className="flex w-full justify-around ">
                  {/*<div className="relative z-10 flex bg-white h-8 items-center px-2 rounded-full">
                    <input
                      type="text"
                      placeholder="Search"
                      className="bg-white  outline-none "
                      style={{}}
                    />
                    <FaSearch />
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
                  </div> */}

                  {/* <div className="relative z-10 flex h-8 gap-3 items-center ">
                    <select>
                      <option value="" className="outline-none">
                        English
                      </option>
                    </select>
                    <select>
                      <option value="" className="outline-none">
                        usd
                      </option>
                    </select>
                    <span>
                      <FaRegHeart className="text-lg text-white" />
                    </span>
                    <span>
                      <FaRegUserCircle className="text-lg text-white" />
                    </span>
                    <span>
                      <FaCartFlatbed className="text-lg text-white" />
                    </span>
                  </div> */}
                </div>
                {/* <div className="relative z-10 w-full flex justify-center gap-6 text-white ">
                  <ul className="flex gap-6">
                  <li className="hover:text-[#7DB800] hover:border-b" href="">
                    Home
                  </li>
                  <li className="hover:text-[#7DB800] hover:border-b" href="">
                    Products
                  </li>
                  <li className="hover:text-[#7DB800] hover:border-b" href="">
                    Elements
                  </li>
                  <li className="hover:text-[#7DB800] hover:border-b " href="">
                    Pages
                  </li>
                  <li className="hover:text-[#7DB800] hover:border-b" href="">
                    Shop
                  </li>
                  <li className="hover:text-[#7DB800] hover:border-b" href="">
                    Sale
                  </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center">
              <div className="flex flex-col h-[290px] w-[70%] py-5">
                <div className="flex justify-around items-center">
                  <div className="hidden sm:block">
                  <div className="relative z-10 flex flex-col gap-2 ">
                    <a href="https://www.facebook.com/">
                      <FaFacebookF className="text-white" />
                    </a>
                    <a href="https://x.com/?lang=en">
                      <FaTwitter className="text-white" />
                    </a>
                    <a href="https://www.youtube.com/">
                      <FaYoutube className="text-white" />
                    </a>
                    <a href="https://www.google.com">
                      <FaGoogle className="text-white" />
                    </a>
                  </div>
                  </div>
                  <div className="relative z-10 text-white flex flex-col gap-6">
                    <div className="w-[60%]">
                      <h1 className="text-3xl font-bold">
                        SimpleWood Chair Collection
                      </h1>
                      <p className="text-xs">
                        Find hand-curated collections that fit your style,
                        space, and budget.
                      </p>
                    </div>
                    <div className="">
                      <button className="h-10 w-24 bg-[#7DB800]">
                        Shop Now
                      </button>
                    </div>
                  </div>
                  <div className="">
                  <div className="relative z-10 flex gap-2">
                    <div className="flex flex-col gap-2">
                      <img className="w-20" src="/home01.png" alt="" />
                      <img className="w-20" src="/home02.png" alt="" />
                    </div>
                    <div className="flex justify-center">
                      <img className="w-36" src="/home03.png" alt="" />
                    </div>
                  </div>
                  </div>
                </div>
                <div className="">
                  <div className="relative z-10 flex justify-center w-full h-5  gap-2 ">
                    <div className="h-2 w-2 bg-white rounded-full hover:bg-[#7DB800]">
                      .
                    </div>
                    <div className="h-2 w-2 bg-white rounded-full hover:bg-[#7DB800]">
                      .
                    </div>
                    <div className="h-2 w-2 bg-white rounded-full hover:bg-[#7DB800]">
                      .
                    </div>
                    <div className="h-2 w-2 bg-white rounded-full hover:bg-[#7DB800]">
                      .
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
           <div className="w-[75%]  py-5 bg-[#EBEFE5] ">

           <div className="w-full flex justify-center items-center">
    <div className="w-[75%] py-5 bg-[#EBEFE5]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Data.map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                    <Link to={`/${item.name.replace(/\s+/g, '').toLowerCase()}Collection`} className="text-xl gap-2 text-center">
                        <img className=" " src={item.Image} alt={item.name} />
                        <span className="text-[#7DB800] text-2xl">{item.logo}</span> {item.name}
                    </Link>
                </div>
            ))}
        </div>
    </div>
</div>


            {/* <div className=" sm:flex w-full gap-4">
              <div className=" sm:w-1/2 ">
              <Link to='/SofaCollection' className=" text-xl gap-2">
              
                <img className="  " src={Data.map(data=> data.Image)} alt="" />
                <span className="text-[#7DB800] text-2xl">{Data.map(data=> data.logo)}</span> {Data.map(data=> data.name)}
              </Link>
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
            </div> */}
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
           {/* <div className="flex gap-2">
              <div className="w-1/2 text-xl gap-2">
                <img className="w-full  " src="/homebody01.png" alt="" />
                <span className="text-[#7DB800] text-2xl">+</span> Sofas
              </div>
              <div className="w-1/2">
                <img className="w-full " src="/homebody02.png" alt="" />
                <span className="text-[#7DB800] text-2xl">+</span> Cupboards
              </div>
            </div>
            <div className="flex gap-2">
              
              <div className="w-1/2">
                <img className="w-full " src="/homebody03.png" alt="" />
                <span className="text-[#7DB800] text-2xl">+</span> Tables
              </div>
              
              <div className="w-1/2">
                <img className="w-full " src="/homebody04.png" alt="" />
                <span className="text-[#7DB800] text-2xl">+</span> Beds & Mattresses
              </div>
            </div>
            <div className="flex gap-2">
            <div className="w-1/2">
                <img className="w-full" src="/homebody05.png" alt="" />
                <span className="text-[#7DB800] text-2xl">+</span> Floor lamps & Fixtures
              </div>
              
              
              <div className="w-1/2">
                <img className="w-full " src="/homebody06.png" alt="" />
                <span className="text-[#7DB800] text-2xl">+</span> Commode
              </div>
            </div>
            <div className="flex gap-2">
              
              <div className="w-1/2">
                <img className="w-full" src="/homebody07.png" alt="" />
                <span className="text-[#7DB800] text-2xl">+</span>  Shelving
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className="w-full flex justify-center">
          <div className="bg-[#EBEFE5] h-[130px] flex justify-center  w-[75%]">
            <div className="w-1/2 flex flex-col justify-center items-center p-2">
              <h1>Join our newsletter for £10 off</h1>

              <p>
                We'll email you a voucher worth £10 off your first order over
                £50. By subscribing you agree to our Terms & Conditions and
                Privacy & Cookies Policy.
              </p>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <input
                type="text"
                placeholder="Enter your email address text-xs"
                className="px-3 py-2 outline-none border rounded-full h-10"
              />
            </div>
          </div>
        </div> */}
        {/* <div className="flex justify-around items-center">
          <div className="bg-black w-full h-40 flex items-center justify-around gap-20">
            <div className="flex justify-around gap-20 ">
              <div className=" text-white">
                <ul className="flex gap-2">
                <li href="">Policy</li>
                <li href="">Term & Conditions</li>
                <li href="">Help</li>
                </ul>
              </div>
              <div className="text-white flex">
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
                      d="M17.6588 9.69505L19.8187 13.3694L16.1584 13.3399L12.5415 7.18981L9.02587 13.2791L5.38315 13.2526L12.5006 0.924804L17.6588 9.69505ZM20.7969 15.0293L22.5796 18.0594L2.69747 17.9043L4.43393 14.8967L20.7969 15.0293ZM23.573 19.7468L21.8389 22.7503L0.000594258 22.5754L1.73705 19.5678L23.573 19.7468Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span>SimpleWood.</span>
              </div>
              <div className="text-white flex gap-5 items-center">
                <span>Follow Us on Social</span>
                <div className="relative z-10 flex  gap-2 ">
                  <ul className="flex gap-1">
                  <li href="https://www.facebook.com/">
                    <FaFacebookF className="text-white" />
                  </li>
                  <li href="https://x.com/?lang=en">
                    <FaTwitter className="text-white" />
                  </li>
                  <li href="https://www.youtube.com/">
                    <FaYoutube className="text-white" />
                  </li>
                  <li href="https://www.google.com">
                    <FaGoogle className="text-white" />
                  </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Home;