import React from "react";
import Slider from "../components/Slider"; // Hero Section
import ProductCard from "../components/ProductCard"; // Featured Products Section

const Home = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      title: "Camera",
      price: "$199",
      originalPrice: "$299",
      image: "https://cdn.pixabay.com/photo/2014/10/31/10/01/camera-510530_1280.jpg",
    },
    {
      id: 2,
      title: "Smartphone",
      price: "$499",
      originalPrice: "$599",
      image: "https://cdn.pixabay.com/photo/2017/11/05/15/06/phone-2920775_1280.jpg",
    },
    {
      id: 3,
      title: "Arduino Kit",
      price: "$79",
      originalPrice: "$99",
      image: "https://cdn.pixabay.com/photo/2015/12/07/01/38/arduino-1080213_1280.jpg",
    },
    {
        id: 4,
        title: "Arduino Kit",
        price: "$79",
        originalPrice: "$99",
        image: "https://cdn.pixabay.com/photo/2017/11/05/15/06/phone-2920775_1280.jpg",
      },
      {
        id: 5,
        title: "Arduino Kit",
        price: "$79",
        originalPrice: "$99",
        image: "https://cdn.pixabay.com/photo/2015/12/07/01/38/arduino-1080213_1280.jpg",
      },
      {
        id: 6,
        title: "Camera",
        price: "$199",
        originalPrice: "$299",
        image: "https://cdn.pixabay.com/photo/2014/10/31/10/01/camera-510530_1280.jpg",
      },
      {
        id: 7,
        title: "Smartphone",
        price: "$499",
        originalPrice: "$599",
        image: "https://cdn.pixabay.com/photo/2017/11/05/15/06/phone-2920775_1280.jpg",
      },
  ];

  return (
    <div>
      {/* Hero Section / Banner */}
      <section className=" bg-gray-200">
        <Slider />
      </section>

      {/* Flash Sale Section */}
      <section className="py-12 bg-red-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Flash Sale - Up to 50% Off!</h2>
        <p className="text-xl">Hurry, limited time offers on selected products!</p>
      </section>

      {/* Flash Products Section */}
      <section className="py-12 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-8">Flash Sale</h3>
        <div className="grid grid-cols-4 gap-8 px-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
        {/* Flash Products Section */}
    <section className="py-12 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-8">Best Sellers in Books</h3>
        <div className="grid grid-cols-4 gap-8 px-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section> {/* Flash Products Section */}
      <section className="py-12 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-8">Gaming merchandise</h3>
        <div className="grid grid-cols-4 gap-8 px-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
