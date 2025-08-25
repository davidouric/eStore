import React from "react"
import { ChevronDown, Heart, Search, ShoppingCart, User } from 'lucide-react'
import { Link } from "react-router-dom"
function Navbar() {


  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mx-10px py-8">
        <div>
          <h1 className="font-bold text-3xl">eStore</h1>
        </div>
        <div className="flex border border-grey-200 rounded-full p-1 w-1/3 shadow-md">
          <input type="text" 
          placeholder="Search fo products" 
          className=" outline-none border-none 
          focus:ring-0 focus:border-none ml-5 " />
          <div className="bg-blue-600 rounded-full ml-auto px-4 py-2 text-white">
          <Search  />
          </div>
        </div>
        <div className="flex pr-1 gap-3">
          <User />
          <div className="relative">
          <Heart />
          <span className="flex absolute top-0 right-[-1re] w-5 h-5 bg-blue-600 rounded-full text-white items-center justify-center mt-[-17px]"
          >0</span>
          </div>
          <div className="relative">
          <ShoppingCart />
          <span className="flex absolute top-0 right-[-1re] w-5 h-5 bg-blue-600 rounded-full text-white items-center justify-center mt-[-17px]">
          3</span>
          </div>
        </div>

      </div>
      <div className="flex space-x-6 text-gray-700 
      font-medium items-center justify-center mt-4 border-t-2 border-b-2 border-gray-300 py-6">
        <a href="#"className=" hover:text-blue-600">Home</a>
        <Link to={'/about'} className=" hover:text-blue-600">About</Link>
        <Link to={'/category'} className=" hover:text-blue-600">Category</Link>
        <Link to={'/product-details'} className=" hover:text-blue-600">Product Details</Link>
        <Link to={'/cart'} className=" hover:text-blue-600">Cart</Link>
        <Link to={'/checkout'} className=" hover:text-blue-600">Checkout</Link>
        <Link to={'/dropdown'} className=" hover:text-blue-600 flex items-center"><span>Dropdown</span><ChevronDown className="w-4 h-4" /></Link>
        <Link to={'/megamenu1'} className=" hover:text-blue-600 flex items-center"><span>Megamenu1</span><ChevronDown className="w-4 h-4" /></Link>
        <Link to={'/megamenu2'} className=" hover:text-blue-600 flex items-center"><span>Megamenu2</span><ChevronDown className="w-4 h-4" /></Link>
        <Link to={'/contact'} className=" hover:text-blue-600">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
