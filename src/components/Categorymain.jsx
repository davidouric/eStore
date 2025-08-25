import { Grip, Search, SearchIcon, TableOfContents } from 'lucide-react';
import React from 'react'
const slider = document.getElementById("priceSlider");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");

function Services() {
    return (
        <div className=' flex flex-col md:flex-row gap-4 container mx-auto p-4'>
            {/* category section  */}
            <div className="w-2/4 bg-white shadow-md p-4 rounded-lg">
                {/* Sidebar */}

                <h2 className="text-lg font-semibold mb-4">Categories</h2>
                <ul className="space-y-2">
                    <div>
                        <a href="#" className="font-bold hover:text-blue-600 hover:line flex justify-between items-center" onClick={(e) => { e.preventDefault(); e.currentTarget.nextElementSibling.classList.toggle('hidden'); }}>
                            Clothing
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </a>
                        <ul className="ml-4 mt-1 space-y-1 hidden text-sm text-gray-600 submenu hover">
                            <li><a href="#" className=" hover:text-blue-600">Furniture</a></li>
                            <li><a href="#" className="block hover:text-blue-600">Kitchen Appliances</a></li>
                            <li><a href="#" className="block hover:text-blue-600">Home Decor</a></li>
                            <li><a href="#" className="block hover:text-blue-600">Bedding</a></li>
                        </ul>
                    </div>
                    <div>
                        <a href="#" className="font-bold hover:text-blue-600 hover:line flex justify-between items-center" onClick={(e) => { e.preventDefault(); e.currentTarget.nextElementSibling.classList.toggle('hidden'); }}>
                            Electronics
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </a>
                        <ul className="ml-4 mt-1 space-y-1 hidden text-sm text-gray-600 submenu hover">
                            <li><a href="#" className=" hover:text-blue-600">Smartphones</a></li>
                            <li><a href="#" className="block hover:text-blue-600">Laptops</a></li>
                            <li><a href="#" className="block hover:text-blue-600">Tablets</a></li>
                            <li><a href="#" className="block hover:text-blue-600">Accessories</a></li>
                        </ul>
                    </div>
                    <div>
                        <a href="#" className="font-bold hover:text-blue-600 hover:line flex justify-between items-center" onClick={(e) => { e.preventDefault(); e.currentTarget.nextElementSibling.classList.toggle('hidden'); }}>
                            Home & Kitchen
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </a>
                        <ul className="ml-4 mt-1 space-y-1 hidden text-sm text-gray-600 submenu hover">
                            <li><a href="#" className=" hover:text-blue-600">Furniture</a></li>
                            <li><a href="#" className="block hover:text-blue-600">Kitchen Appliances</a></li>
                            <li><a href="#" className="block hover:text-blue-600">Home Decor</a></li>
                            <li><a href="#" className="block hover:text-blue-600">Bedding</a></li>
                        </ul>
                    </div>
                    <div>
                        <a href="#" className="font-bold hover:text-blue-600 hover:line flex justify-between items-center" onClick={(e) => { e.preventDefault(); e.currentTarget.nextElementSibling.classList.toggle('hidden'); }}>
                            Clothing
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </a>
                        <ul className="ml-4 mt-1 space-y-1 hidden text-sm text-gray-600 submenu hover">
                            <li><a href="#" className=" hover:text-blue-600">Furniture</a></li>
                            <li><a href="#" className="block hover:text-blue-600">Kitchen Appliances</a></li>
                            <li><a href="#" className="block hover:text-blue-600">Home Decor</a></li>
                            <li><a href="#" className="block hover:text-blue-600">Bedding</a></li>
                        </ul>
                    </div>
                    <div>
                        <a href="#" className="font-bold hover:text-blue-600 hover:line flex justify-between items-center" onClick={(e) => { e.preventDefault(); e.currentTarget.nextElementSibling.classList.toggle('hidden'); }}>
                            Beauty & Personal Care
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </a>
                        <ul className="ml-4 mt-1 space-y-1 hidden text-sm text-gray-600 submenu hover">
                            <li><a href="#" className=" hover:text-blue-600">Skincare</a></li>
                            <li><a href="#" className="block hover:text-blue-600">Hair Care</a></li>
                            <li><a href="#" className="block hover:text-blue-600">Makeup</a></li>
                            <li><a href="#" className="block hover:text-blue-600">Fragrances</a></li>
                        </ul>
                    </div>
                    <div>
                        <a href="#" className="font-bold hover:text-blue-600 hover:line flex justify-between items-center" onClick={(e) => { e.preventDefault(); e.currentTarget.nextElementSibling.classList.toggle('hidden'); }}>
                            Sports & Outdoors
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </a>
                        <ul className="ml-4 mt-1 space-y-1 hidden text-sm text-gray-600 submenu hover">
                            <li><a href="#" className=" hover:text-blue-600">Fitness Equipment</a></li>
                            <li><a href="#" className="block hover:text-blue-600">Outdoor Gear</a></li>
                            <li><a href="#" className="block hover:text-blue-600">Sports Apparel</a></li>
                            <li><a href="#" className="block hover:text-blue-600">Team Sports</a></li>
                        </ul>
                    </div>
                    <div>
                        <a href="" className="font-bold hover:text-blue-600  flex justify-between items-center">Books</a>
                    </div>
                    <div>
                        <a href="#" className="font-bold hover:text-blue-600 hover:line flex justify-between items-center" onClick={(e) => { e.preventDefault(); e.currentTarget.nextElementSibling.classList.toggle('hidden'); }}>
                            Toys & Games
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </a>
                        <ul className="ml-4 mt-1 space-y-1 hidden text-sm text-gray-600 submenu hover">
                            <li><a href="#" className=" hover:text-blue-600">Board Games</a></li>
                            <li><a href="#" className="block hover:text-blue-600">Puzzles</a></li>
                            <li><a href="#" className="block hover:text-blue-600">Action Figures</a></li>
                            <li><a href="#" className="block hover:text-blue-600">Educational Toys</a></li>
                        </ul>
                    </div>
                </ul>
                {/* pricerange section */}
                <div >
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Price Range</h2>
                        <input id="priceSlider" type="range" min="0" max="1000" value="500" className="w-full mb-3" />
                        <div className="flex items-center gap-2">
                            <input id="minPrice" type="number" value="0" className="border rounded px-2 py-1 w-20" />
                            <span>-</span>
                            <input id="maxPrice" type="number" value="1000" className="border rounded px-2 py-1 w-20" />
                        </div>
                        <button id="applyPrice" className="mt-3 w-full bg-blue-600 text-white py-2 rounded">Apply Filter</button>
                    </div>


                </div>

            </div>









            <div className=' flex w-full md:w-3/4 flex-col'>
                {/* Top Filters */}
                <div className="bg-white shadow-md p-4 rounded-lg mb-4 flex flex-wrap gap-4 items-center justify-between">
                    {/* Search */}


                    {/* Dropdowns */}
                    <div className="flex gap-5 flex-col   hover:text-blue-600 items-center md:flex-row justify-center">
                        <div className='flex flex-col'>
                            <label for="searchInput" className="text-sm font-medium text-gray-700 mb-4">Search Products</label>
                            <div className="flex border rounded-lg overflow-hidden">
                                <input type="text" placeholder="Search for products" className="px-3 py-2 h-10 outline-none" />
                                <button class="bg-blue-600 px-4 text-white"><Search /></button>
                            </div>
                        </div>

                        <div className="flex gap-3 flex-col text-gray-600 items-center ">
                            <p className='text-sm  text-gray-700 mb-1 font-semibold'>Price Range</p>
                            <select className="border rounded px-2 py-1  w-23 h-10 hover:text-blue-600">
                                <option className='' >All Prices</option>
                                <option>$0 - $50</option>
                                <option>$50 - $100</option>
                                <option>$100 - $200</option>
                            </select>
                        </div>

                        <div className='flex gap-3 flex-col text-gray-600 items-center'>
                            <p className='text-sm  text-gray-700 mb-1 font-semibold'>Sort By</p>
                            <select className="border rounded px-2 py-1  w-23 h-10">
                                <option>Featured</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest</option>
                            </select>
                        </div>

                        {/* View toggle */}
                        <div className="flex gap-2 items-center">
                            <div className='flex gap-3 flex-col text-gray-600 items-center'>
                                <p className='text-sm  text-gray-700 mb-1 font-semibold'>View</p>
                                <button id="gridView" className="p-3 bg-blue-600 text-white rounded  h-10"><Grip className='w-4 h-4' /></button>
                            </div>
                            <div className=' flex mt-9'>
                                <button id="listView" className="p-2 border rounded h-10 flex items-center justify-center"><TableOfContents className='w-4 h-4' /></button>
                            </div>
                        </div>

                        {/* Per Page */}
                        <div>
                            <select className="border rounded px-2 py-1 w-23 h-10 mt-9  ">
                                <option className='  hover:text-blue-600'>12 per page</option>
                                <option className='text-gray-600'>24 per page</option>
                                <option className='text-gray-600'>48 per page</option>
                            </select>
                        </div>
                    </div>
                    {/* Active Filters */} 
                    <div className="flex items-center gap-6 mt-12 border-t border-gray-900 justify-center ">
                            <h2 className='font-semibold'>Active filters:</h2>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Electronics ✕</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">$50 - $100 ✕</span>
                        <button className="ml-70 text-blue-600 px-3 py-1 border-1 rounded-full font-semibold">Clear All</button>
                    </div>

                </div>



                {/* Product Grid */}
                <div >

                    <div className="grid grid-cols-3 gap-6">
                        <div className=' rounded-lg shadow p-2 m-4'>
                            <div className="bg-white  rounded-lg p-4 absolute ">
                                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">New Season</span>
                                <img src="../images/product-3.webp" className="w-full h-40 object-cover my-3" />
                                <h3 className="font-semibold">Stylish Sunglasses</h3>
                                <p className="text-gray-600">$149.99</p>
                                <div className="flex items-center text-yellow-400 text-sm">★★★★☆</div>
                            </div>

                            {/* Product Card  */}

                            <div className="bg-white rounded-lg p-4 relative group overflow-hidden">
                                {/* Badge */}
                                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">New Season</span>

                                {/* Image Wrapper */}
                                <div className="relative overflow-hidden rounded-lg">
                                    <img src="../images/product-3.webp"
                                        className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110" />

                                    {/* Action Buttons */}
                                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="bg-white shadow-md w-9 h-9 flex items-center justify-center rounded-full hover:bg-blue-100">♡</button>
                                        <button className="bg-white shadow-md w-9 h-9 flex items-center justify-center rounded-full hover:bg-blue-100">👁</button>
                                        <button className="bg-white shadow-md w-9 h-9 flex items-center justify-center rounded-full hover:bg-blue-100">↔</button>
                                    </div>

                                    {/* Add to Cart Button */}
                                    <button className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white py-2 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        Add to Cart
                                    </button>
                                </div>


                            </div>


                        </div>

                        <div className="bg-white shadow-md rounded-lg p-4">
                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">-30%</span>
                            <img src="https://via.placeholder.com/200" className="w-full h-40 object-cover my-3" />
                            <h3 className="font-semibold">Backpack</h3>
                            <p className="text-gray-600">$119.00</p>
                            <div className="flex items-center text-yellow-400 text-sm">★★★★★</div>
                        </div>





                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-6">
                        <ul className="flex gap-2">
                            <li><button className="px-3 py-1 border rounded">Prev</button></li>
                            <li><button className="px-3 py-1 border rounded bg-blue-600 text-white">1</button></li>
                            <li><button className="px-3 py-1 border rounded">2</button></li>
                            <li><button className="px-3 py-1 border rounded">3</button></li>
                            <li><button className="px-3 py-1 border rounded">Next</button></li>
                        </ul>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default Services;
