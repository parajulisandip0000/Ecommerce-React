import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => {
  const { category } = useParams(); // To get category from URL
  
  // Sample product data (can be replaced with real data)
  const products = [
    {
      id: 1,
      title: "Camera",
      price: "$199",
      image: "https://cdn.pixabay.com/photo/2014/10/31/10/01/camera-510530_1280.jpg",
    },
    {
      id: 2,
      title: "Smartphone",
      price: "$499",
      image: "https://cdn.pixabay.com/photo/2017/11/05/15/06/phone-2920775_1280.jpg",
    },
    {
      id: 3,
      title: "Arduino Kit",
      price: "$79",
      image: "https://cdn.pixabay.com/photo/2015/12/07/01/38/arduino-1080213_1280.jpg",
    },
  ];

  // Filter products based on category (for demo purposes)
  const filteredProducts = products.filter(product => 
    category === "electronics" && product.title.toLowerCase().includes("camera") || 
    category === "food" && product.title.toLowerCase().includes("food")
  );

  return (
    <div>
      <h2 className="text-center text-4xl py-6">{category.toUpperCase()} Products</h2>
      <div className="grid grid-cols-4 gap-6 p-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
