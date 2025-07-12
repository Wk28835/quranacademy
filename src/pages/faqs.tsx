import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string[];
}

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What Do I Need to Start?",
      answer: [
        "\u2714\ufe0f All you need is a smart device (PC, tablet, or phone) connected to the internet.",
        "\u2714\ufe0f Download Zoom or Skype on your device and sign in with your Darul Ilm Online Quran Academy account.",
        "\u2714\ufe0f Your teacher will then contact you at the scheduled class time.",
      ],
    },
    {
      question: "Do We Have Any Course Materials?",
      answer: [
        "\u2714\ufe0f Yes, we offer digital Qurans, Tajweed materials, and Arabic/Islamic studies books. All are provided after joining.",
      ],
    },
    {
      question: "How Many Students Are There in Each Class?",
      answer: [
        "\u2714\ufe0f Each class is one-on-one, so every student gets individual attention from their teacher.",
      ],
    },
    {
      question: "Why Do Online Islamic Classes Have Charges?",
      answer: [
        "\u2714\ufe0f Free classes may not be taken seriously. Paid ones encourage commitment.",
        "\u2714\ufe0f We use resources and qualified teachers to offer quality education.",
        "\u2714\ufe0f Fees cover teacher salaries, website, and classroom tools.",
      ],
    },
  ];

  return (
    <div className="w-full mx-0 p-1">
      <div
        className="relative rounded-md w-full h-[320px] bg-cover bg-center"
        style={{ backgroundImage: "url('/books.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-100 shadow-lg flex flex-col lg:flex-row justify-between items-center px-4 py-2">
          <div className="text-white ">
            <h2 className="font-bold  text-3xl text-white pt-4 lg:text-left px-2 lg:px-24">
              FAQ&apos;S
            </h2>
          </div>
        </div>
      </div>

      <div className="pt-12">
        <h1 className="px-2 text-3xl text-center text-[#13B4B6] font-bold">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <div className="bg-yellow-400 w-28 h-1 m-2 mx-auto"></div>
      </div>

      <section className="text-black">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="mt-8 shadow-sm mx-4 sm:mx-12 lg:mx-24"
          >
            <button
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="w-full sm:w-2/3 lg:w-1/2 flex justify-between text-lg font-light"
            >
              <span className="text-lg font-serif">{item.question}</span>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
              } text-sm sm:text-base`}
            >
              <div className="space-y-2">
                {item.answer.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="bg-gray-200 w-full mt-10 h-1 m-8 mx-auto"></div>
      <div className="pt-6">
        <h1 className="text-center text-xs text-gray-500">
          Copyright © 2025 Darul Ilm Online Quran Academy |
        </h1>
      </div>
    </div>
  );
}
