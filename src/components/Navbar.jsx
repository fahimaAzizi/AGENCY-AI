import React, { useState } from "react";
import assets from "../assets/assets";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">

      {/* Logo */}
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-32 sm:w-40"
        alt=""
      />

      {/* Desktop Menu */}
      <div className="hidden sm:flex gap-6 text-gray-700 dark:text-white sm:text-sm">
        <a href="#" className="hover:border-b">Home</a>
        <a href="#services" className="hover:border-b">Services</a>
        <a href="#our-work" className="hover:border-b">Our Work</a>
        <a href="#contact-us" className="hover:border-b">Contact Us</a>
      </div>

      {/* Sidebar (Mobile Menu) */}
      <div
        className={`fixed top-0 right-0 h-full w-60 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <img
          src={assets.close_icon}
          alt=""
          className="w-5 absolute right-4 top-4 cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        <div className="text-gray-700 dark:text-white sm:text-sm max-sm:w-60 max-sm:pl-10 
        max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen
         max-sm:h-full max-sm:flex-col max-sm:bg-primary 
         max-sm:text-white max-sm:pt-20 flex sm:items-center
          gap-5 transition-all">
          <a onClick={() => setSidebarOpen(false)} href="#">Home</a>
          <a onClick={() => setSidebarOpen(false)} href="#services">Services</a>
          <a onClick={() => setSidebarOpen(false)} href="#our-work">Our Work</a>
          <a onClick={() => setSidebarOpen(false)} href="#contact-us">Contact Us</a>
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-2 sm:gap-4">

        {/* Menu Icon */}
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt=""
          onClick={() => setSidebarOpen(true)}
          className="w-8 sm:hidden cursor-pointer"
        />

        {/* Contact Button */}
        <a
          href="#contact-us"
          className="text-sm hidden sm:flex"
        >
          Contact
        </a>

      </div>
    </div>
  );
};

export default Navbar;
