import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa6'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const RightNav = () => {
      const cart = useSelector((state) => state.cart);
  return (
     <div className="md:flex items-center z-10 gap-8 hidden ">
          {/* nav  */}
          <ul className="flex gap-8">
            <Link to="/" className="group relative">
              <li className="font-bold cursor-pointer hover:text-[#535bf2]">
                HOME
              </li>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#535bf2] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="group relative">
              <li className="font-bold cursor-pointer hover:text-[#535bf2]">
                ABOUT
              </li>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-[#535bf2]"></span>
            </Link>
            <Link to="/product" className="group relative">
              <li className="font-bold cursor-pointer hover:text-[#535bf2]">
                PRODUCTS
              </li>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-[#535bf2]"></span>
            </Link>
            <Link to="/contact" className="group relative">
              <li className="font-bold cursor-pointer hover:text-[#535bf2]">
                CONTACTS
              </li>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-[#535bf2]"></span>
            </Link>
          </ul>
          <Link to="/add-to-cart">
            <button className="flex items-center gap-1 bg-[#2a2c30] pl-5 pr-7 rounded-md pb-2.5 pt-4 relative cursor-pointer hover:scale-105 duration-300">
              <FaCartArrowDown className="text-white text-[20px]" />
              <sup className="text-white absolute top-3 right-3 font-bold">
                {cart.cartItem.length}
              </sup>
            </button>
          </Link>
        </div>
  )
}

export default RightNav
