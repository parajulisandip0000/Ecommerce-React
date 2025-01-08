import React from "react";

const Slider = () => {
  return (
    <div className="relative">
      <div className="w-full h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2019/06/15/16/06/online-4275963_1280.jpg')" }}>
        <div className="absolute bottom-0 left-0 p-8 bg-black bg-opacity-50 text-white w-full">
          <h2 className="text-4xl font-bold mb-4">Exclusive Deals on Electronics</h2>
          <p className="text-lg">Shop the latest electronics with discounts up to 50%</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
