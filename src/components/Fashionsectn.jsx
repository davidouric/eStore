import React from "react"
import { ArrowRight, RefreshCcw, ShieldCheck, Truck } from "lucide-react";


function Hero() {
    return (

        <div className="min-h-screen bg-white px-6 py-12 lg:flex items-center justify-center gap-30">
            {}
            <div className="max-w-xl">
                <p className="text-sm text-blue-500 font-medium"> <button className=" bg-blue-200 py-2 px-4 rounded-l-full 
                rounded-r-full"><a href="#">New Collection 2025</a></button></p>
                <h1 style={{ fontFamily: '"Nunito",sans-serif' }} className="text-5xl font-bold text-blue-950 mt-8 
                tracking-wide leading-14">Discover Stylish<br />
                <span className="text-blue-500 underline decoration-blue-200 decoration-5">Fashion</span> For Every <br /> Season</h1>
                <p style={{ fontFamily: 'Poppins,sans-serif' }} className="text-gray-600 mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea ut <br /> praesentium non, iure molestiae cumque officiis, optio natus<br /> minima nemo eos dolor veritatis inventore</p>
                <div className="mt-6 flex gap-4">
                    <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 flex items-center"><a href="#" className=" flex gap-2"><span>Shop Now</span><ArrowRight /></a></button>
                    <button className="border border-gray-400 text-gray-700 px-6 py-3 rounded hover:bg-gray-100">View Collection</button>
                </div>

                <div className="flex gap-6 mt-10 text-sm text-gray-500">
                    <div className="flex items-center gap-2"><span><Truck className="text-blue-600" /></span>Free Shipping</div>
                    <div className="flex items-center gap-2"><span><ShieldCheck className="text-blue-600" /></span>Secure payment</div>
                    <div className="flex items-center gap-2"><span><RefreshCcw className="text-blue-600" /></span>Easy return</div>
                </div>
            </div>

             {/*right side*/} 
            <div className="relative mt-10">
                <img src="/images/woman.webp" alt="Woman model" className="w-[300px] lg:w-[540px] mx-auto" />

                <div className="absolute top-30 left-[-2px] bg-white px-2 py-1 rounded-md shadow-lg text-sm text-gray-800 flex gap-4 items-center">
                    <div><img src="/images/colar.webp" alt="Clothes" className="w-16 h-16 object-contain" /></div>

                    <div>
                        <p className="text-gray-700 font-semibold">Summer Collection</p>
                        <p className="font-bold text-blue-500">$89.99</p>
                    </div>
                </div>
                {/*blue circle*/}
                <div className="absolute top-14 right-12 bg-blue-600 text-white px-5 py-3 rounded-full font-bold">30% <br />OFF</div>
                   { /*card with glass*/} 
                <div className="flex items-center gap-4 mt-6 ml-8 shadow text-sm absolute right-[-2px] bg-white bottom-22 py-1 px-2 rounded-md">
                    <div><img src="/images/glass.webp" alt="eyeglass" className="w-16 h-16 object-contain" /></div>

                    <div>
                        <p className="text-gray-700 font-semibold">Casual Wear</p>
                        <p className="text-blue-500 font-bold">$79.99</p>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Hero