import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL

  // Sample product data (replace with real data or API call)
  const product = {
    id: 1,
    title: "Camera",
    price: "$199",
    description: "A high-quality DSLR camera for professionals.",
    image: "https://cdn.pixabay.com/photo/2014/10/31/10/01/camera-510530_1280.jpg",
    reviews: ["Great product!", "Excellent quality.", "Worth the price."],
  };

  return (
    <div className="p-8">
      <div className="flex">
        <img
          src={product.image}
          alt={product.title}
          className="w-1/2 h-auto rounded-lg"
        />
        <div className="ml-8 w-1/2">
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <p className="text-xl text-gray-600">{product.price}</p>
          <p className="mt-4">{product.description}</p>
          <button className="mt-6 py-2 px-4 bg-blue-600 text-white rounded-lg">Add to Cart</button>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold">Customer Reviews</h3>
        <ul className="list-disc pl-8">
          {product.reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
