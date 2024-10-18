import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useCart } from './CartContext'; // Adjust the path as needed

function Sofa({ image, name, price }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id: name, image, name, price }); // Assuming 'name' is unique for each item
  };

  return (
    <div className="border rounded-lg p-4">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-gray-600">{price}</p>
      <button onClick={handleAddToCart} className="mt-4 flex items-center bg-[#7DB800] text-white px-4 py-2 rounded">
        <FaCartPlus className="mr-2" /> Add to Cart
      </button>
    </div>
  );
}

export default Sofa;
