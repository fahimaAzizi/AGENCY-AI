import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-slate-50 dark:bg-gray-900 pt-16 mt-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-gray-300'>

      {/* Top Section */}
      <div className='flex flex-col lg:flex-row justify-between gap-12'>

        {/* Left Side - Logo & Description */}
        <div className='max-w-md'>
          <img 
            src={assets.logo} 
            alt="logo" 
            className='w-32 sm:w-40 mb-4' 
          />
          <p className='text-sm leading-relaxed'>
            From strategy to execution, we craft digital solutions that move 
            your business forward. We build modern, scalable, and powerful 
            experiences for brands worldwide.
          </p>
        </div>

        {/* Middle - Navigation Links */}
        <div>
          <h3 className='text-lg font-semibold mb-4 text-gray-900 dark:text-white'>
            Quick Links
          </h3>

          <ul className='flex flex-col gap-3 text-sm'>
            <li>
              <a href="#hero" className='hover:text-primary transition'>
                Home
              </a>
            </li>
            <li>
              <a href="#services" className='hover:text-primary transition'>
                Services
              </a>
            </li>
            <li>
              <a href="#our-work" className='hover:text-primary transition'>
                Our Work
              </a>
            </li>
            <li>
              <a href="#contact-us" className='hover:text-primary transition'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side - Contact Info */}
        <div>
          <h3 className='text-lg font-semibold mb-4 text-gray-900 dark:text-white'>
            Contact
          </h3>

          <ul className='flex flex-col gap-3 text-sm'>
            <li>Email: info@agencyai.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Location: Toronto, Canada</li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className='border-t border-gray-300 dark:border-gray-700 mt-12 pt-6 text-center text-sm'>
        © {new Date().getFullYear()} Agency AI. All rights reserved.
      </div>

    </div>
  )
}

export default Footer