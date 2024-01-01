'use client'
import React,{ useState, useEffect } from 'react'
import Link from 'next/link'


async function getData() {
  const res = await fetch('https://dummyjson.com/products');
 
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

const page = () => {
	const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setData(data.products);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold capitalize">All Products</h1>
      <div className="flex gap-5 items-center justify-center flex-wrap">
        <div className="container px-4">
          <div className="grid grid-cols-4 gap-5">
            {
              data && data.map((product, key) => (
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-8">
                  <div className="md:flex flex-col">
                    <div className="md:flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover"
                        src={product.thumbnail} // Placeholder image, replace with actual image source
                        alt="Blog Image"
                      />
                    </div>
                    <div className="p-8">
                      <Link href={`/products/${product.id}`}>
                        <h2 className="text-2xl font-bold mb-4 text-black">{product.title}</h2>
                      </Link>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="flex items-center justify-center">
                        <p className="text-sm text-gray-500">Price: {product.price}</p>
                        <p className="text-sm text-gray-500 ml-4">Category: {product.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>  
      </div>
    </div>
  );
};
export default page