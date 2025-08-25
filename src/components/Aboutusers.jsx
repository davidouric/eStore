import React from 'react';
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";


 let Bestseller = ()=>{
      useEffect(() => {
      Aos.init({
      duration: 1000,
      delay: 50,
      });
      }, []);
      const {ref, inView } = useInView({
        triggerOnce: false
      });

  return(
    <div>
      {/* {/users section/} */}
<div className="grid gap-16 grid-cols-12 mt-10 w-full max-w-[90%] mx-25 h-auto py-8 bg-white">
  <div className='col-span-3 flex'>
    <div><img src='/images/person-m-3.webp' alt='Male User' className='rounded-full border-3 border-blue-600'/></div>
    <div className='-ml-4'><img src='/images/person-f-7.webp' alt='Female User' className='rounded-full border-3 border-blue-600'/></div>
    <div className='-ml-4'><img src='/images/person-m-5.webp' alt='Male User' className='rounded-full border-3 border-blue-600'/></div>
    <div className='-ml-4'><img src='/images/person-f-5.webp' alt='Female User' className='rounded-full border-3 border-blue-600'/></div>
  </div>

  <div className='col-span-3' ref={ref}>
   <h1 className="font-bold text-5xl text-blue-950">{inView && <CountUp start={0} end={185} duration={3}/>}+</h1>
    
    <p className='text-gray-600 font-semibold mt-4'>Nemo enim ipsam</p>
  </div>

  <div className='col-span-3'> 
    
    <h1 className="font-bold text-5xl text-blue-950">{inView && <CountUp start={0} end={42} duration={3}/>}+</h1>
    <p className='text-gray-600 font-semibold mt-4'>Voluptate explicabo</p></div>

  <div className='col-span-3'> 
    <h1 className="font-bold text-5xl text-blue-950">{inView && <CountUp start={0} end={170} duration={3}/>}+</h1>
    <p className='text-gray-600 font-semibold mt-4'>Dolor sit consectetur</p></div>
</div>
    </div>
  )}

  export default Bestseller