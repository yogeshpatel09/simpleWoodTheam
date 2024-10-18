import { FaSearch } from "react-icons/fa";
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
    
    { id: '03', Image: '/homebody02.png', name: 'Cupboards', logo: '+' },
    { id: '02', Image: '/homebody03.png', name: 'Tables', logo: '+' },
    { id: '04', Image: '/homebody04.png', name: 'Beds & Mattresses', logo: '+' },
    { id: '05', Image: '/homebody05.png', name: 'Floor lamps & Fixtures', logo: '+' },
    { id: '06', Image: '/homebody06.png', name: 'Commode', logo: '+' },
    { id: '07', Image: '/homebody07.png', name: 'Shelving', logo: '+' },
    { id: '08', Image: '/add.png', name: '', logo: '' },
  ];

  return (
    <>
      <div className="w-full">
        <div className="relative w-full">
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
                <div className="absolute inset-0 bg-black opacity-80"></div>
              </div>

              <div className="relative w-full z-10 flex flex-col justify-around items-center">
                <div className="flex w-full justify-around"></div>
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
                  <div className="relative z-10 flex justify-center w-full h-5 gap-2 ">
                    <div className="h-2 w-2 bg-white rounded-full hover:bg-[#7DB800]">.</div>
                    <div className="h-2 w-2 bg-white rounded-full hover:bg-[#7DB800]">.</div>
                    <div className="h-2 w-2 bg-white rounded-full hover:bg-[#7DB800]">.</div>
                    <div className="h-2 w-2 bg-white rounded-full hover:bg-[#7DB800]">.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[75%] py-5 bg-[#EBEFE5]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Data.map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                  <Link to={`/${item.name.replace(/\s+/g, '').toLowerCase()}Collection`} className="text-xl gap-2 text-center">
                    <img className="" src={item.Image} alt={item.name} />
                    <span className="text-[#7DB800] text-2xl">{item.logo}</span> {item.name}
                  </Link>
                </div>
              ))}
              {/* Discount Section */}
              
            </div>
            <div className="bg-[#EBEFE5] px-10 py-6">
              <div className="sm:flex w-full">
                <div className="sm:w-1/2">
                  <h1 className="text-md font-bold">Join our newsletter for £10 off</h1>
                  <p className="text-sm text-[#828282]">We'll email you a voucher worth £10 off your first order over £50. By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.</p>
                </div>
                <div className="sm:w-1/2 flex justify-center items-center">
                  <input type="text" className="px-3 py-2 rounded-full" placeholder="Enter your email address" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
