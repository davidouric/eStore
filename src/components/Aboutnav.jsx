import React from "react";
import { ChevronDown, Heart, Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex items-center justify-between mx-25 mt-4 py-6 sm:gap-6 bg-white">
        <div>
          <h1 className="font-bold text-3xl text-blue-950">eStore</h1>
        </div>

        <div className="flex border border-gray-400  rounded-full justify-between p-1 w-1/3 shadow-md">
          <input
            type="text"
            placeholder="Search for products"
            className="outline-none border-none focus:0 focus-border-none ml-5"
          />
          <div className="flex items-center text-white bg-blue-600 rounded-full px-5 py-2">
            <Search className="w-4 h-4" />
          </div>
        </div>
        <div className="flex gap-8">
          <User className="hover:text-blue-600" />
          <div className="relative">
            <Heart className="hover:text-blue-600" />
            <span className="flex absolute text-center items-center justify-center bg-blue-600 rounded-full text-white w-5 h-5 text-sm top-[-4px] right-[-0.8rem] mt-[-15px] font-semibold">
              0
            </span>
          </div>
          <div className="relative">
            <ShoppingCart className="hover:text-blue-600" />
            <span className="flex absolute text-center items-center justify-center bg-blue-600 rounded-full text-white w-5 h-5 top-[-4px] right-[-0.8rem] mt-[-15px] text-xs font-semibold">
              3
            </span>
          </div>
        </div>
      </div>

      {/* {/second navbar/} */}
      <div className="w-full">
        <ul className="lg:flex items-center justify-between font-medium text-gray-700 hidden border-t border-b py-4 border-gray-300 pl-25 pr-45">
         
          <Link to={'/'} className="text-blue-600 font-medium"> Home</Link>
          <Link to={'/about'} className="hover:text-blue-600 font-medium">About</Link>
          <Link to={'/category'} className="hover:text-blue-600 font-medium">Category</Link>
          <Link to={'/productDetails'} className="hover:text-blue-600 font-medium">Product Details</Link>
          <Link to={'/cart'} className="hover:text-blue-600 font-medium">Cart</Link>
          <Link to={'/checkout'} className="hover:text-blue-600 font-medium">Checkout</Link>
          <Link to={'/dropdown'}><a className="hover:text-blue-600 flex items-center font-medium">
              <span className="font-medium">Dropdown</span>
              <ChevronDown className="w-4 h-4" />
            </a></Link>
          
          <Link to={'/megamenu1'}><a className="hover:text-blue-600 flex items-center font-medium">
              <span className="font-medium">Megamenu 1</span>
              <ChevronDown className="w-4 h-4" />
          </a></Link>
          <Link to={'/megamenu2'}>
           <a className="hover:text-blue-600 flex items-center font-medium">
              <span className="font-medium">Megamenu 2</span>
              <ChevronDown className="w-4 h-4" />
            </a>
          </Link>
          <Link to={'/contact'} className="hover:text-blue-600 font-medium">Contact</Link>         
          </ul>
      </div>

       <div  className='bg-gray-100 max-w-[100%] py-4'>
        <div className='flex items-center justify-between mx-25'>
        <div><h1 className="font-bold text-2xl text-blue-900">About</h1></div>
      <div className='flex gap-2'>
        <Link to={'/'} className='font-medium text-blue-600 cusor-pointer'>Home</Link>
        <Link to={'/'} className='font-medium text-gray-500'> / About</Link>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Navbar;