import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
     
      <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-gray-900 text-sm sm:text-base">
        <p className="mb-2 sm:mb-0">Follow us on social media for the latest updates!</p>
        <div className="flex space-x-4 text-white">
          <a href="#" className="hover:text-blue-500 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-sky-400 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
        </div>
      </div>

    
      <div className=" bg-gray-900 text-center py-3 text-xs text-gray-400">
        © 2023 Watch Hub. All rights reserved.
      </div>
    </footer>
  );
}
