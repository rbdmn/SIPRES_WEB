"use client";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="relative bg-[url('/images.jpeg')] bg-cover bg-center text-white pt-20 pb-6">
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left column */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/logo.svg" alt="Turmet Logo" width={40} height={40} />
            <div>
              <h2 className="font-bold text-2xl">Turmet</h2>
              <p className="text-sm text-gray-300">Explore The World</p>
            </div>
          </div>

          <p className="text-gray-300 mb-4">Subscribe Newsletter</p>
          <p className="text-sm text-gray-400 mb-4">
            Get Our Latest Deals and Update
          </p>

          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-3 rounded-full text-gray-800 text-sm focus:outline-none"
            />
            <button className="bg-sky-500 hover:bg-sky-400 rounded-full px-6 py-3 font-semibold">
              Subscribe →
            </button>
          </div>

          <div className="flex gap-4 mt-6 text-sky-400 text-lg">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="h-0.5 w-12 bg-sky-500 mb-4"></div>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-sky-400 cursor-pointer">Home</li>
            <li className="hover:text-sky-400 cursor-pointer">About Us</li>
            <li className="hover:text-sky-400 cursor-pointer">Blog</li>
            <li className="hover:text-sky-400 cursor-pointer">Services</li>
            <li className="hover:text-sky-400 cursor-pointer">Tour</li>
          </ul>
        </div>


        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="h-0.5 w-12 bg-sky-500 mb-4"></div>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="bg-sky-500 p-2 rounded-lg">
                <HiLocationMarker className="text-white text-lg" />
              </span>
              <span>9550 Bolsa Ave #126, United States</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-sky-500 p-2 rounded-lg">
                <HiMail className="text-white text-lg" />
              </span>
              <span>Info@Touron.Com</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-sky-500 p-2 rounded-lg">
                <HiPhone className="text-white text-lg" />
              </span>
              <div>
                <p>+256 214 203 215</p>
                <p>+1098 765 4321</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="relative z-10 border-t border-gray-600 mt-16 pt-6 text-center text-sm text-gray-400">
        <p>
          Copyright © <span className="text-sky-400">Eclipsea</span>. All Rights
          Reserved.
        </p>
       
      </div>
    </footer>
  );
}
