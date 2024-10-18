import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const sofasData = [
  {
    id: '01',
    image: 'https://cdn.shopify.com/s/files/1/0581/2213/0065/products/sofa1.jpg?v=1625829501',
    name: 'Classic Sofa',
    price: '$499',
  },
  {
    id: '02',
    image: 'https://cdn.shopify.com/s/files/1/0581/2213/0065/products/sofa2.jpg?v=1625829501',
    name: 'Modern Sofa',
    price: '$599',
  },
  {
    id: '03',
    image: 'https://cdn.shopify.com/s/files/1/0581/2213/0065/products/sofa3.jpg?v=1625829501',
    name: 'Luxury Sofa',
    price: '$899',
  },
  {
    id: '04',
    image: 'https://cdn.shopify.com/s/files/1/0581/2213/0065/products/sofa4.jpg?v=1625829501',
    name: 'Minimalist Sofa',
    price: '$399',
  },
  {
    id: '05',
    image: 'https://cdn.shopify.com/s/files/1/0581/2213/0065/products/sofa5.jpg?v=1625829501',
    name: 'Convertible Sofa',
    price: '$699',
  },
  {
    id: '06',
    image: 'https://cdn.shopify.com/s/files/1/0581/2213/0065/products/sofa6.jpg?v=1625829501',
    name: 'Chesterfield Sofa',
    price: '$799',
  },
];

function Sofa({ image, name, price }) {
  return (
    <div className="border rounded-lg p-4">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-gray-600">{price}</p>
      <button className="mt-4 flex items-center bg-[#7DB800] text-white px-4 py-2 rounded">
        <FaCartPlus className="mr-2" /> Add to Cart
      </button>
    </div>
  );
}

function SofaCollection() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Our Sofa Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sofasData.map((sofa) => (
          <Sofa key={sofa.id} image={sofa.image} name={sofa.name} price={sofa.price} />
        ))}
      </div>
    </div>
  );
}

export default SofaCollection;
