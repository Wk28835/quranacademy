import { useState } from "react";

export default function Reviews() {
  const cards = [
    {
      title: "Best for Quran Memorization",
      text: "The Quran Memorization Course is well-structured and the teachers are very supportive. I'm making great progress, Alhamdulillah!",
      user: "Ayesha",
      date: "04 Days Ago!",
    },
    {
      title: "Amazing Quran Reading Classes",
      text: "I improved my recitation with Quran Reading Course. The teachers correct mistakes with patience and focus on proper Tajweed. Excellent experience!",
      user: "Ahmed Ali",
      date: "01 Days Ago!",
    },
    {
      title: "Quran Learning Experience!",
      text: "Darul Ilm Online Quran Academy has excellent courses. The Noorani Qaida Course helped me learn Arabic easily. Highly recommended!",
      user: "Talha Nazim",
      date: "09 Days Ago!",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? cards.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === cards.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="w-full mx-0 p-1">
      <div
        className="relative rounded-md w-full h-[320px] bg-cover bg-center"
        style={{ backgroundImage: "url('/books.jpg')" }}
      >
        {/* Cyan Overlay */}
        <div className="absolute inset-0   bg-opacity-100 shadow-lg flex flex-col lg:flex-row justify-between items-center px-10 py-12">
          {/* Welcome Text */}
          <div className="text-white mx-auto max-w-xl">
            <h2 className="font-semibold text-3xl font-serif text-yellow-300 pt-4 lg:text-left px-4 lg:px-24">
              STUDENT REVIEWS
            </h2>
          </div>
        </div>
      </div>

      <div className="pt-12">
        <h1 className="px-2 text-3xl text-center text-cyan-600 font-bold">
          Dar ul Quran Academy Reviews
        </h1>
      </div>
      {/*Revies section */}
      <div className="main mt-6 flex flex-wrap justify-center gap-6 px-4">
        <div className="px-4 text-black shadow-md hover:shadow-lg hover:shadow-cyan-500 shadow-cyan-400 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h1 className="text-center pt-4 font-semibold">
            {cards[current].title}
          </h1>
          <div className="text-2xl text-center">⭐️⭐️⭐️⭐️⭐️</div>
          <p className="text-center text-ellipsis p-4">{cards[current].text}</p>
          <p className="text-center font-sans text-xs">{cards[current].user}</p>
          <p className="text-center font-sans text-xs">{cards[current].date}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={prevSlide}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-md"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>

      <div className="pt-10">
        <h1 className="text-center text-xs text-gray-500 ">
          Copyright © 2025 Darul Ilm Online Quran Academy |
        </h1>
      </div>
    </div>
  );
}
