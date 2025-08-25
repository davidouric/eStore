import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
{/Arrays/}
const items=[
  {
    id:1,
    image:<img src="/images/product-f-1.webp" alt="product1" className="mx-auto w-40 h-40 object-cover mb-4 transition-transform duration-300 ease-in-out hover:-translate-y-2"/>,
    name:"Ladies Wear",
    count:12
  },
  {
    id:2,
    image:<img src="/images/product-10.webp" alt="product2" className="mx-auto w-40 h-40 object-cover mb-4 transition-transform duration-300 ease-in-out hover:-translate-y-2"/>,
    name:"T-Shirt",
    count:4
  },
  {
    id:3,
    image:<img src="/images/product-m-1.webp" alt="product3" className="mx-auto w-40 h-40 object-cover mb-4 transition-transform duration-300 ease-in-out hover:-translate-y-2"/>,
    name:"Office Wear",
    count:11
  },
  {
    id:4,
    image:<img src="/images/product-2.webp" alt="product4" className="mx-auto w-40 h-40 object-cover mb-4 transition-transform duration-300 ease-in-out hover:-translate-y-2"/>,
    name:"Wooden Chair",
    count:6
  },
  {
    id:5,
    image:<img src="/images/product-1.webp" alt="product5" className="mx-auto w-40 h-40 object-cover mb-4 transition-transform duration-300 ease-in-out hover:-translate-y-2"/>,
    name:"Ladies Bag",
    count:7
  },
  {
    id:6,
    image:<img src="/images/product-6.webp" alt="product6" className="mx-auto w-40 h-40 object-cover mb-4 transition-transform duration-300 ease-in-out hover:-translate-y-2"/>,
    name:"Back Pack",
    count:2
  },
  {
    id:7,
    image:<img src="/images/product-7.webp" alt="product7" className="mx-auto w-40 h-40 object-cover mb-4 transition-transform duration-300 ease-in-out hover:-translate-y-2"/>,
    name:"Jean Jacket",
    count:4
  },
  {
    id:8,
    image:<img src="/images/product-4-variant.webp" alt="product8" className="mx-auto w-40 h-40 object-cover mb-4 transition-transform duration-300 ease-in-out hover:-translate-y-2"/>,
    name:"Men Jacket",
    count:6
  },
  {
    id:9,
    image:<img src="/images/product-5.webp" alt="product9" className="mx-auto w-40 h-40 object-cover mb-4 transition-transform duration-300 ease-in-out hover:-translate-y-2"/>,
    name:"Ladies Heels",
    count:2
  },
  {
    id:10,
    image:<img src="/images/product-11.webp" alt="product10" className="mx-auto w-40 h-40 object-cover mb-4 transition-transform duration-300 ease-in-out hover:-translate-y-2"/>,
    name:"Snikers",
    count:8
  },
  {
    id:11,
    image:<img src="/images/product-3.webp" alt="product11" className="mx-auto w-40 h-40 object-cover mb-4 transition-transform duration-300 ease-in-out hover:-translate-y-2"/>,
    name:"Glass",
    count:4
  },
  {
    id:12,
    image:<img src="/images/product-m-4.webp" alt="product11" className="mx-auto w-40 h-40 object-cover mb-4 transition-transform duration-300 ease-in-out hover:-translate-y-2"/>,
    name:"Men Fashion",
    count:6
  }

]
let Products = ()=>{
  useEffect(() => {
      Aos.init({
        duration: 1000,
        delay: 50,
      });
    }, [])
    var settings = {
    
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings:
        { slidesToShow: 3,
          slidesToScroll: 1,
         }
      },
      { breakpoint: 768, settings:
        { slideToShow: 1,
          slidesToScroll: 1,
         }
      },
    ],
  };
     
          return(
          <div className="w-full overflow-hidden px-4 py-5 bg-white text-center max-w-[90%]  mx-auto">
          {/* <h1 className="font-bold text-blue-950 md:text-4xl mb-10 text-center text-xl">Available products are listed here</h1> */}
          <Slider {...settings}>
          {items.map((item, index) => (
          <div key={index} className="px-[4px]">
          <div className="w-[220px] mx-auto bg-gray-100 rounded-2xl p-4 shadow-md" data-aos="zoom-in">
          {item.image}
          {/*<img src="{item.image}" alt="{item.name}" className="mx-auto w-40 h-40 object-cover"/>*/}
          <h3 className="text-gray-800 font-semibold text-md">{item.name}</h3>
          <p className="text-gray-500 text-sm mt-1">{item.count} products</p>
          </div>
          </div>
          ))}

          {/*<div className="grid gap-5 grid-cols-12 mx-10 ">
            {
        items.map(item=>(
          <div key={item.id} data-aos="zoom-in" className="col-span-3 bg-gray-100 rounded-2xl text-center pt-5 pb-5">
            <div>{item.image}</div>
            <div className="font-bold text-blue-950 hover:text-blue-800">{item.name}</div>
            <div className="text-gray-400">{item.count} Products</div>
          </div>
        ))
      }
      </div>*/}
      </Slider>
      {/* <PauseOnHover/> */}
    </div>
  )
}

export default Products


// function PauseOnHover() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 5.5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>               
//              <h3>1</h3>  
//          </div>

//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//         <div>
//           <h3>7</h3>
//         </div>
//         <div>
//           <h3>8</h3>
//         </div>
//         <div>
//           <h3>9</h3>
//         </div>
//         <div>
//           <h3>10</h3>
//         </div>
//         </Slider>
//     </div>
//   );
// }