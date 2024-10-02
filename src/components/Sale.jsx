import React from 'react'

function Sale() {
    return (
        <div>
            <div className="sale-offers-section p-6 bg-gray-100 space-y-6">
                <div className="text-2xl font-semibold text-center mb-6">Current Sale Offers</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="offer-card bg-white p-4 rounded-lg shadow-md">
                        <img src="https://via.placeholder.com/300x200" alt="50% Off on All Electronics" class="w-full h-48 object-cover rounded" />
                        <h3 className="text-xl font-semibold mt-2">50% Off on All Electronics</h3>
                        <p className="text-gray-600">Grab the best deals on electronics. Limited time offer!</p>
                        <button className="mt-4 bg-[#7DB800] text-white py-2 px-4 rounded">Shop Now</button>
                    </div>
                    <div className="offer-card bg-white p-4 rounded-lg shadow-md">
                        <img src="https://via.placeholder.com/300x200" alt="Buy One Get One Free on Shoes" class="w-full h-48 object-cover rounded" />
                        <h3 className="text-xl font-semibold mt-2">Buy One Get One Free on Shoes</h3>
                        <p className="text-gray-600">Shop your favorite shoes with our BOGO offer.</p>
                        <button className="mt-4 bg-[#7DB800] text-white py-2 px-4 rounded">Shop Now</button>
                    </div>
                    <div className="offer-card bg-white p-4 rounded-lg shadow-md">
                        <img src="https://via.placeholder.com/300x200" alt="30% Off on Summer Clothing" class="w-full h-48 object-cover rounded" />
                        <h3 className="text-xl font-semibold mt-2">30% Off on Summer Clothing</h3>
                        <p className="text-gray-600">Refresh your wardrobe with our summer sale!</p>
                        <button className="mt-4 bg-[#7DB800] text-white py-2 px-4 rounded">Shop Now</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="offer-card bg-white p-4 rounded-lg shadow-md">
                        <img src="https://via.placeholder.com/300x200" alt="50% Off on All Electronics" class="w-full h-48 object-cover rounded" />
                        <h3 className="text-xl font-semibold mt-2">50% Off on All Electronics</h3>
                        <p className="text-gray-600">Grab the best deals on electronics. Limited time offer!</p>
                        <button className="mt-4 bg-[#7DB800] text-white py-2 px-4 rounded">Shop Now</button>
                    </div>
                    <div className="offer-card bg-white p-4 rounded-lg shadow-md">
                        <img src="https://via.placeholder.com/300x200" alt="Buy One Get One Free on Shoes" class="w-full h-48 object-cover rounded" />
                        <h3 className="text-xl font-semibold mt-2">Buy One Get One Free on Shoes</h3>
                        <p className="text-gray-600">Shop your favorite shoes with our BOGO offer.</p>
                        <button className="mt-4 bg-[#7DB800] text-white py-2 px-4 rounded">Shop Now</button>
                    </div>
                    <div className="offer-card bg-white p-4 rounded-lg shadow-md">
                        <img src="https://via.placeholder.com/300x200" alt="30% Off on Summer Clothing" class="w-full h-48 object-cover rounded" />
                        <h3 className="text-xl font-semibold mt-2">30% Off on Summer Clothing</h3>
                        <p className="text-gray-600">Refresh your wardrobe with our summer sale!</p>
                        <button className="mt-4 bg-[#7DB800] text-white py-2 px-4 rounded">Shop Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sale
