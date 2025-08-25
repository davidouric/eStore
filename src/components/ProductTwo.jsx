import axios from 'axios';
import React, { useEffect } from 'react'
import Products from './Aboutvideo';


function ProductTwo() {
    const [products, setProducts] = React.useState([]);

    const baseurl = "https://fakestoreapi.com/products";
    const fetchProduct = async () => {
        try {
            const response = await axios.get(baseurl);
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    useEffect(() => {
        fetchProduct();
    }, []);
    console.log(products);
    return (
        <div>
            <h1>producttwo</h1>

            <div className=' grid grid-cols-12 gap-6'>
                {
                    products.map((product) => (
                        <div key={product.id} className=' bg-white p-4 flex rounded shadow mt-2 col-span-4 items-center justify-center flex-col'>
                            <h2 className='font-bold text-lg'>{product.title}</h2>
                            <img src={product.image} alt={product.title} className='w-full h-52 bg-cover mt-2' />
                            <div className=' flex text-emerald-500 font-semibold bg-amber-300 py-4 w-52 text-center items-center'>
                                <p className=' font-bold items-center justify-center mx-auto'>Price: ${product.price}</p>
                            </div>
                            <div>
                                {product.rating ? (
                                    <div>
                                        {Object.entries(product.rating).map(([key, value]) => (
                                            <span key={key} className='text-yellow-500'>{key}:{value}</span>
                                        ))}
                                    </div>
                                ) : (
                                    <div> No rating found</div>
                                )}
                            </div>
                            <p className='mt-2  text-pink-500'>{product.category}</p>
                            <p className='my-2'>{product.description.slice(0, 150)}...</p>
                            <div>
                                <button className='bg-blue-500 text-white py-2 px-4 rounded'>Add to Cart</button>
                                <button className='bg-red-500 text-white py-2 px-4 rounded '>Remove</button>
                            </div>

                        </div>
                    ))}
            </div>

        </div>
    )
}

export default ProductTwo
