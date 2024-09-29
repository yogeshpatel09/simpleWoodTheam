import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <div className="bg-[#212121] py-2">
        <div className="  flex  flex-col sm:flex-row justify-around items-center sm:py-4 space-y-3">
          <div className=" text-white">
            <a href="">Policiy</a>
            <a href="">Term&Condition</a>
            <a href="">Help</a>
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
            <div className="relative z-10 flex">
              <ul className="flex gap-2">
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
        <div className="flex justify-center py-4">
            <p className="text-[#828282]">Copyring © Viachas Kul. All right reserved.</p>
          </div>
          </div>
      </footer>
    </>
  );
}

export default Footer;
