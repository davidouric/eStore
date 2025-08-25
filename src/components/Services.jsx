import { Headset, Percent, PiggyBank, Truck } from "lucide-react";
import React from "react";
import 'aos/dist/aos.css'
import Aos from 'aos'
import { useEffect } from "react";

const Services = () => {
    useEffect(() => {
        Aos.init({ duration: 1000,
            delay:50
        });
    }, []);

    return (
        <div className=" bg-gray-100">
            <div className=" grid grid-cols-12 mx-10 gap-5 py-8 ">
                <div className=" col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-center justify-center p-3 text-gray-600" data-aos="zoom-in">
                    <Truck className="hover:text-blue-800 my-5" size={36}/>
                    <h1 className="text-xl mb-3">Free Shipping</h1>
                    <p className="text-center">Nulla sit morbi vestibulum eros duis amet, consectetur vitae lacus. Ut quis tempor felis sed nunc viverra.</p>
                </div>
                <div className=" col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-center justify-center p-3 text-gray-600" data-aos="zoom-in">
                    <PiggyBank className="hover:text-blue-800 my-5" size={36}/>
                    <h1  className="text-xl mb-3">Money Back Guarantee</h1>
                    <p className="text-center">Nulla sit morbi vestibulum eros duis amet, consectetur vitae lacus. Ut quis tempor felis sed nunc viverra.</p>
                </div>
                <div className=" col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-center justify-center p-3 text-gray-600" data-aos="zoom-in">
                    <Percent className="hover:text-blue-800 my-5" size={36}/>
                    <h1 className="text-xl mb-3">Discount offers</h1>
                    <p className="text-center">Nulla sit morbi vestibulum eros duis amet, consectetur vitae lacus. Ut quis tempor felis sed nunc viverra.</p>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-center justify-center p-3 text-gray-600" data-aos="zoom-in">
                    <Headset className="hover:text-blue-800 my-5" size={36}/>
                    <h1 className="text-xl mb-3">24/7 Support</h1>
                    <p className="text-center">Ipsum dolor amet sit consectetur adipiscing, nullam vitae euismod tempor nunc felis vestibulum ornare.</p>
                </div>
            </div>
        </div>

    )

}

export default Services;