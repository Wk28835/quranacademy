  
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';



export default function Reviews() {

  const reviews = [
        {
          title: "Exceptional Quran Learning Experience!",
          rating: "★★★★★",
          content: "Darul Quran Academy has excellent courses with professional teachers. The Noorani Qaida Course helped me learn Arabic pronunciation easily. Highly recommended!",
          time: "11 Days Ago",
          student: "Ahmad",
          role: "Student"
        },
        {
          title: "Best for Quran Memorization",
          rating: "★★★★★",
          content: "The Quran Memorization Course is well-structured, and the teachers are very supportive. I'm making great progress, Alhamdullilah!",
          time: "7 Days Ago",
          student: "Talha Nazim",
          role: "Student"
        },
  
        {
        title: "Excellent Tajweed Course",
        rating: "★★★★★",
        content: "The Tajweed rules are explained so clearly. My Quran recitation has improved tremendously in just a few weeks.",
        time: "3 Days Ago",
        student: "Fatima",
        role: "Student"
    }
  ];
  
      const [currentIndex, setCurrentIndex] = useState(0);
  
        const nextReview = () => {
            setCurrentIndex((prevIndex) => 
            prevIndex >= reviews.length - 2 ? 0 : prevIndex + 1
          );
        };
  
        const prevReview = () => {
          setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? reviews.length - 2 : prevIndex - 1
          );
        };
  
        // Get current pair of reviews to display
        const visibleReviews = [
          reviews[currentIndex],
          reviews[(currentIndex + 1) % reviews.length]
        ];


  return (
    <div className="w-full mx-0 p-1">
      <div
        className="relative rounded-md w-full h-[320px] bg-cover bg-center"
        style={{ backgroundImage: "url('/books.jpg')" }}>
        
        
        {/* Review Section*/}        
        <div className="absolute inset-0   bg-opacity-100 shadow-lg flex flex-col lg:flex-row justify-between items-center px-2 py-12">
          {/* Welcome Text */}
          <div className="text-white ">
            <h2 className="font-bold lg:text-3xl text-xl  text-white pt-4 lg:text-left px-4 lg:px-24">
              STUDENT REVIEWS
            </h2>
          </div>
        </div>
      </div>

      <div className="pt-12">
        <h1 className="px-2 lg:text-3xl text-2xl text-center text-[#13B4B6] font-bold">
          Dar ul Quran Academy Reviews
        </h1>
      </div>
      {/*Revies section */}
      {/* student review section */}
      <div className="max-w-6xl  mt-6 mx-auto p-6">
       

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition z-10"
            aria-label="Previous reviews"
          >
            <FiChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition z-10"
            aria-label="Next reviews"
          >
            <FiChevronRight className="h-5 w-5 text-gray-600" />
          </button>

          {/* Reviews Container */}
          <div className="flex gap-6  overflow-hidden">
            {visibleReviews.map((review, index) => (
              <div
                key={index}
                className="flex-1 bg-gray-50 min-w-[calc(50%-12px)] shadow-sm border border-gray-200 p-6"
              >
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {review.title}
                  </h2>
                  <div className="text-yellow-400 text-lg mb-3">
                    {review.rating}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {review.content}
                  </p>
                  <div className="text-gray-500 text-sm mb-4">
                    {review.time}
                  </div>
                  <div className="font-medium text-gray-800">
                    {review.student}
                  </div>
                  <div className="text-gray-500 text-sm">{review.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() =>
                  setCurrentIndex(index > reviews.length - 2 ? 0 : index)
                }
                className={`h-2 w-2 rounded-full ${
                  currentIndex === index ? "bg-gray-600" : "bg-gray-300"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="pt-10">
        <h1 className="text-center text-xs text-gray-500 ">
          Copyright © 2025 Darul Ilm Online Quran Academy |
        </h1>
      </div>
    </div>
  );
}
