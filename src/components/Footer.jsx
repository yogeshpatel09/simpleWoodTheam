import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="bg-[#212121] py-2">
        <div className="flex flex-col sm:flex-row justify-around items-center sm:py-4 space-y-3">
          <div className="text-white">
            <Link to="/policy" className="mr-4">Policy</Link>
            <Link to="/terms" className="mr-4">Terms & Conditions</Link>
            <Link to="/help">Help</Link>
          </div>
          <div className="text-white flex items-center">
            <span className="mr-1">
              <svg
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
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
                <li>
                  <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="text-white" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-white" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="text-white" />
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com" aria-label="Google" target="_blank" rel="noopener noreferrer">
                    <FaGoogle className="text-white" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-4">
          <p className="text-[#828282]">Copyright © Viachas Kul. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
