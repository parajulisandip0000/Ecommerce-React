import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaStar, FaStarHalfAlt, FaTrash } from "react-icons/fa"; // For Wishlist, Cart, Star, and Delete icons

const SingleProductPage = () => {
  const [reviews, setReviews] = useState([
    { text: "This camera has great features and is very user-friendly!", rating: 5 },
    { text: "Excellent quality, worth the price!", rating: 4 },
  ]);
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [isRatingSubmitted, setIsRatingSubmitted] = useState(false); // To check if the rating was submitted

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview && newRating > 0) {
      setReviews([...reviews, { text: newReview, rating: newRating }]);
      setNewReview(""); // Reset the input after submission
      setNewRating(0);  // Reset the rating after submission
      setIsRatingSubmitted(true); // Mark the rating as submitted
    }
  };

  const handleDeleteReview = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
  };

  const product = {
    id: 1,
    title: "Pei Mei Natural Brightening Vitamin C Serum Anti-acne",
    description:
      "Illuminate your skin with the Pei Mei Natural Brightening Vitamin C Serum! Packed with powerful Vitamin C, this serum targets dark spots, acne scars, and uneven skin tone, leaving you with a glowing, youthful complexion. Its lightweight, fast-absorbing formula deeply nourishes while reducing acne and blemishes for clearer, smoother skin. Perfect for all skin types, this serum is your go-to solution for brighter, healthier-looking skin every day.",
    specifications: {
      brand: "No Brand",
      sku: "174988559_NP-1196902943",
      skinType: "All Skin Types",
      volume: "30ml",
    },
    image: "https://np-live-21.slatic.net/kf/S96b97e17204244a39ea7fda99ca62929G.jpg", // Replace with actual product image
    price: "$29.99",
  };

  // Sample related products
  const relatedProducts = [
    {
      id: 2,
      title: "Nikon D3500 DSLR Camera",
      price: "$499",
      image: "https://cdn.pixabay.com/photo/2017/09/07/08/31/nikon-2720740_1280.jpg",
    },
    {
      id: 3,
      title: "Sony Alpha A6000 Mirrorless Camera",
      price: "$549",
      image: "https://cdn.pixabay.com/photo/2016/11/04/19/28/sony-1807747_1280.jpg",
    },
    {
      id: 4,
      title: "Fujifilm X-T30 Mirrorless Camera",
      price: "$899",
      image: "https://cdn.pixabay.com/photo/2018/05/07/11/06/fujifilm-3371672_1280.jpg",
    },
  ];

  const renderStars = (rating, editable = false, onClick = () => {}, glowing = false) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const isActive = rating >= i + 1;
      const isHalf = rating > i && rating < i + 1;
      const isGlowing = glowing && isActive;
      stars.push(
        <span
          key={i}
          className={`cursor-pointer ${isActive ? "text-yellow-500" : isHalf ? "text-yellow-300" : "text-gray-300"} ${editable ? (isGlowing ? "animate-pulse" : "hover:text-yellow-400") : ""}`}
          onClick={() => editable && onClick(i + 1)}
        >
          {isHalf ? <FaStarHalfAlt /> : <FaStar />}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto px-4">
      {/* Product Details Section */}
      <div className="flex flex-wrap py-16">
        {/* Product Images */}
        <div className="w-full md:w-1/2 px-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[512px] object-cover rounded-lg"
            style={{ width: '683px', height: '512px' }} // Fixed width and height for uniformity
                  />
        </div>

        {/* Product Information */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-semibold mb-4">{product.title}</h2>
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-xl font-bold text-red-600">{product.price}</span>
          </div>
          <p className="text-lg mb-6">{product.description}</p>

          {/* Product Specifications */}
          <h4 className="text-2xl font-semibold mb-4">Product Specifications:</h4>
          <ul className="space-y-2 mb-6">
            {Object.entries(product.specifications).map(([key, value]) => (
              <li key={key} className="flex">
                <span className="font-semibold capitalize">{key}:</span> &nbsp;&nbsp;
                <span>{value}</span>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center space-x-2">
              <FaShoppingCart />
              <span>Add to Cart</span>
            </button>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg flex items-center space-x-2">
              <FaShoppingCart />
              <span>Buy Now</span>
            </button>
            <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg flex items-center space-x-2">
              <FaHeart />
              <span>Wishlist</span>
            </button>
          </div>
        </div>
      </div>

      {/* Star Rating Section */}
      <section className="py-8">
        <h3 className="text-3xl font-semibold text-center mb-4">Product Rating</h3>
        <div className="flex justify-center items-center space-x-2 mb-4">
          {/* Render the star rating, passing editable as false */}
          {renderStars(4, false)} {/* Display the current product rating */}
        </div>
        <p className="text-center text-lg text-gray-600">4.0 out of 5 stars</p>
      </section>

      {/* Reviews Section */}
      <section className="py-12 bg-gray-100 rounded-lg shadow-lg mb-12">
        <h3 className="text-3xl font-semibold text-center mb-8">Customer Reviews</h3>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {reviews.map((review, index) => (
              <li key={index} className="p-4 bg-white rounded-lg shadow-sm flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    {/* Render the star rating for each review */}
                    {renderStars(review.rating, false)}
                  </div>
                  <p>{review.text}</p>
                </div>
                <button
                  className="text-red-600 flex items-center space-x-2"
                  onClick={() => handleDeleteReview(index)}
                >
                  <FaTrash />
                  <span>Delete</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Add a Review */}
          <div className="mt-8">
            <h4 className="text-2xl font-semibold mb-4">Add a Review</h4>
            <form onSubmit={handleReviewSubmit} className="flex flex-col space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {/* Render the star rating input for the new review */}
                  {renderStars(newRating, true, setNewRating, !isRatingSubmitted)}
                </div>
              </div>
              <textarea
                className="border p-4 rounded-lg"
                rows="4"
                placeholder="Write your review here..."
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
              />
              <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-12">
        <h3 className="text-3xl font-semibold text-center mb-8">Related Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          {relatedProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">{product.title}</h4>
                <p className="text-lg text-red-600">{product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SingleProductPage;
