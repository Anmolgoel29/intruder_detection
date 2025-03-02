import React from 'react';
import image from '../../assets/detectify_image.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2193B0] to-[#6DD5ED] border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0 flex items-center md:px-11">
            <Link to="/" className="text-2xl font-medium hover:underline">
              <strong className="text-4xl">D</strong>etectify
            </Link>
            <Link to="/" className="flex items-center">
              <img src={image} className="mr-3 h-[68px]" alt="Logo" />
            </Link>

            {/* Email Subscription Form */}
            <form className="relative w-full max-w-md ml-10">
              <input
                required
                type="email"
                placeholder="Enter your email"
                className="border-2 border-black rounded-full px-4 py-2 w-full pr-20 focus:border-pink-600 outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 bottom-0 m-1 px-4 py-1 bg-black text-white font-bold rounded-full hover:bg-pink-600 transition duration-300 border-none cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Resources */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
              <ul className=" font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">Home</Link>
                </li>
                <li className="mb-4">
                  <Link to="/about" className="hover:underline">About</Link>
                </li>
                <li className="mb-4">
                  <Link to="/contact" className="hover:underline">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow Us</h2>
              <ul className=" font-medium">
                <li className="mb-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
                </li>
                <li className="mb-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
                </li>
                <li className="mb-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
              <ul className=" font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Disclaimer</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 border-t pt-6">
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition">
              <i className="fab fa-discord text-xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition">
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
