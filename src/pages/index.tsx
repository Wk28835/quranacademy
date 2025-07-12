import Image from "next/image";
import {
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaHeadset,
  FaCertificate,
  FaRedoAlt,
  FaMoneyCheckAlt,
  FaUserFriends,
  FaChartBar,
  FaLanguage,
} from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: JSX.Element;
}

export default function Home() {
  const features = [
    {
      icon: <FaCalendarAlt size={40} className="text-purple-600" />,
      title: "Flexible Schedule",
      desc: "Enjoy a flexible schedule tailored to your needs",
    },
    {
      icon: <FaChalkboardTeacher size={40} className="text-blue-600" />,
      title: "Male & Female Tutors",
      desc: "Male and female tutors available to meet your learning needs.",
    },
    {
      icon: <FaHeadset size={40} className="text-pink-600" />,
      title: "24/7 Support",
      desc: "Customer support available 24/7 for your convenience..",
    },
    {
      icon: <FaCertificate size={40} className="text-yellow-600" />,
      title: "Completion Certificate",
      desc: "Receive certification upon course completion.",
    },
    {
      icon: <FaRedoAlt size={40} className="text-red-600" />,
      title: "Reschedule Classes",
      desc: "Options available for rescheduling or makeup classes.",
    },
    {
      icon: <FaMoneyCheckAlt size={40} className="text-green-600" />,
      title: "Easy Payments",
      desc: "Multiple online payment options supported.",
    },
    {
      icon: <FaUserFriends size={40} className="text-teal-600" />,
      title: "One-on-One Classes",
      desc: "Personalized one-on-one classes tailored to your goals.",
    },
    {
      icon: <FaChartBar size={40} className="text-indigo-600" />,
      title: "Monthly Report",
      desc: "Receive a detailed monthly evaluation report of your progress.",
    },
    {
      icon: <FaLanguage size={40} className="text-orange-600" />,
      title: "Multi-language Support",
      desc: "Courses available in multiple languages.",
    },
  ];

  const reviews = [
    {
      title: "Exceptional Quran Learning Experience!",
      rating: "★★★★★",
      content:
        "Darul Quran Academy has excellent courses with professional teachers. The Noorani Qaida Course helped me learn Arabic pronunciation easily. Highly recommended!",
      time: "11 Days Ago",
      student: "Ahmad",
      role: "Student",
    },
    {
      title: "Best for Quran Memorization",
      rating: "★★★★★",
      content:
        "The Quran Memorization Course is well-structured, and the teachers are very supportive. I'm making great progress, Alhamdullilah!",
      time: "7 Days Ago",
      student: "Talha Nazim",
      role: "Student",
    },

    {
      title: "Excellent Tajweed Course",
      rating: "★★★★★",
      content:
        "The Tajweed rules are explained so clearly. My Quran recitation has improved tremendously in just a few weeks.",
      time: "3 Days Ago",
      student: "Fatima",
      role: "Student",
    },
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
    reviews[(currentIndex + 1) % reviews.length],
  ];

  const faqData: FAQItem[] = [
    {
      question: "What Do I Need to Start?",
      answer: (
        <>
          <p>
            &bull; All you need is a smart device (PC, tablet, or phone)
            connected to the internet.
          </p>
          <p>
            &bull; Download Zoom or Skype on your device and sign in with your
            Darul Ilm Online Quran Academy account.
          </p>
          <p>
            &bull; Your teacher will then contact you at the scheduled class
            time.
          </p>
        </>
      ),
    },
    {
      question: "Do We Have Any Course Materials?",
      answer: (
        <p>
          &bull; Yes, at Darul Ilm Online Quran Academy, we offer a variety of
          resources, including digital Qurans, Tajweed materials, and books on
          Arabic and Islamic studies. Once you join the academy, in sha Allah,
          we will provide you with all the necessary materials.
        </p>
      ),
    },
    {
      question: "How Many Students Are There in Each Class?",
      answer: (
        <p>
          &bull; At Darul Ilm Online Quran Academy, our classes are conducted in
          a one-on-one format. Each student has a dedicated session with the
          tutor, ensuring personalized attention and tailored instruction for
          effective learning.
        </p>
      ),
    },
    {
      question: "Why Do Online Islamic Classes Have Charges?",
      answer: (
        <>
          <p>
            &bull; When something is offered for free, students may not take it
            seriously. Paying for online classes motivates students to commit
            fully and learn the Quran with dedication.
          </p>
          <p>
            &bull; Running Darul Ilm Online Quran Academy requires substantial
            resources to ensure the best services and the latest technologies.
            We have also hired well-qualified tutors.
          </p>
          <p>
            &bull; The study fees cover various costs including teachers’
            salaries, website development, and maintenance.
          </p>
        </>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full px-2 sm:px-4">
      {/* Hero Section */}
      <div
        className="relative w-full  min-h-[500px] lg:min-h-[450px] bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div
          className="absolute inset-0  bg-opacity-40 rounded-md flex flex-col lg:flex-row sm:flex-row justify-between items-center px-4 sm:px-6 py-2 gap-2 sm:gap-5"
          style={{ backgroundColor: "#1AB0BA", opacity: "90%" }}
        >
          <div className="text-white w-full lg:max-w-xl text-center px-2 sm:mx-0">
            <h2 className="font-semibold text-white text-xl font-sans sm:text-2xl pt-2">
              Welcome to Darul Ilm Online Quran Academy
            </h2>
            <h1 className="pt-1 sm:pt-4 text-white font-bold font-serif text-xl sm:text-3xl lg:text-4xl">
              Join Free Trial Classes
            </h1>
          </div>

          <div className="w-full lg:max-w-xs sm:max-w-md">
            <form className="space-y-2 sm:space-y-3">
              <input
                style={{ backgroundColor: "#1AB0BA" }}
                type="text"
                placeholder="Your Name"
                className="w-full border border-white rounded-md p-2 sm:p-3 placeholder-white text-white text-sm sm:text-base"
              />
              <input
                style={{ backgroundColor: "#1AB0BA", opacity: "90%" }}
                type="email"
                placeholder="Email Address"
                className="w-full border border-white rounded-md p-2 sm:p-3 placeholder-white text-white text-sm sm:text-base"
              />
              <input
                style={{ backgroundColor: "#1AB0BA", opacity: "90%" }}
                type="text"
                placeholder="Contact No"
                className="w-full border border-white rounded-md p-2 sm:p-3 placeholder-white text-white text-sm sm:text-base"
              />
              <input
                style={{ backgroundColor: "#1AB0BA", opacity: "90%" }}
                type="text"
                placeholder="Your Country"
                className="w-full border border-white rounded-md p-2 sm:p-3 placeholder-white text-white text-sm sm:text-base"
              />
              <textarea
                style={{ backgroundColor: "#1AB0BA", opacity: "90%" }}
                rows={4}
                placeholder="Your Message"
                className="w-full border border-white rounded-md p-2 sm:p-3 placeholder-white text-white text-sm sm:text-base"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-100 py-2 sm:py-2 rounded-md transition text-sm sm:text-base"
              >
                Apply Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Courses Header */}
      <div className="mt-12 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 sm:mt-16 mx-auto w-full max-w-screen-lg text-center px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Explore Our Courses
        </h1>
        <p className="pt-3 font-sans sm:pt-4 text-black pb-4 sm:pb-6 text-sm sm:text-base md:text-base">
          Explore our online courses, including Noorani Qaida, Quran Reading,
          Tajweed, Tafseer, Memorization, Arabic Language, and Islamic Studies.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 text-black mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {[
          {
            img: "/norani_qaida.jpg",
            title: "Quran Reading",
            desc: "Learn Noorani Qaida with expert guidance to master accurate Quranic pronunciation. Build a strong foundation in Arabic reading and improve your recitation skills. Gain the confidence to read the Quran correctly with proper articulation and understanding.",
          },
          {
            img: "/reading.jpg",
            title: "Quran Reading",
            desc: "Master Quran reading with proper pronunciation and fluency through expert guidance. Improve your recitation skills with personalized lessons from experienced tutors. Gain confidence in reading the Quran with precise articulation and accuracy.",
          },
          {
            img: "/tafseer.jpg",
            title: "Noorani Qaida",
            desc: "Understand the meanings of the Quran with in-depth Tafseer and explore the wisdom behind its verses.  Connection to the Quran by learning its historical context and spiritual lessons. Enhance your comprehension of the Quran and apply its teachings to your daily life.",
          },
          {
            img: "/memory.jpg",
            title: "Quran Memorization",
            desc: "Memorize the Quran with expert guidance and proven techniques to enhance your retention. Strengthen your memory through consistent daily practice and personalized support. Achieve your goal of Quranic memorization with focus, dedication, and expert strategies.",
          },
          {
            img: "/translate.jpg",
            title: "Quran Translation",
            desc: "Learn Quranic translation with clear and detailed explanations to understand the message of the Quran in your own language. Gain deeper insight into the meanings and teachings of the Quran. Bridge the gap between Arabic and your language for a more meaningful connection with the Quran.",
          },
          {
            img: "/tajweed.jpg",
            title: "Quran Tajweed",
            desc: "Perfect your Quran recitation by mastering the Tajweed rules for proper pronunciation and articulation. Learn the essential techniques to ensure accurate and beautiful recitation of the Quran. Enhance your skills through expert guidance and consistent practice for flawless delivery.",
          },
          {
            img: "/language.jpg",
            title: "Arabic Language",
            desc: "Learn Arabic reading, writing, and speaking skills to master the language of the Quran. Enhance your understanding and communication with expert tutors who guide you through every step. Build a strong foundation in Arabic to deepen your connection with the Quranic teachings.",
          },
          {
            img: "/language.jpg",
            title: "Islamic Studies Courses",
            desc: "Study a variety of Islamic Studies courses to deepen your understanding of the Quran, Hadith, Fiqh, and Aqidah. Gain a comprehensive understanding of Islamic history, ethics, and philosophy through expert guidance. Master the essential teachings of Islam and apply them to your daily life with clarity and confidence.",
          },
        ].map((course, idx) => (
          <div
            key={idx}
            className="shadow-md hover:shadow-lg hover:shadow-cyan-500 shadow-cyan-400 border-2 rounded-md"
          >
            <Image
              className="h-56 w-full p-4 object-cover"
              src={course.img}
              alt="Course Image"
              width={400}
              height={200}
            />
            <div className="p-4">
              <h2 className="font-bold  text-xl mb-2">{course.title}</h2>
              <p className="text-sm text-justify text-gray-700">
                {course.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Why Academy Section */}
      <div className="text-center mt-20 px-4">
        <h1 className="text-black text-3xl font-bold">
          Why <span className="text-cyan-600">Darul Ilm Online Quran</span>{" "}
          Academy
        </h1>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center shadow-2xl bg-white p-4 rounded-md"
            >
              <div className="mr-4">{feature.icon}</div>
              <div className="ml-4 text-start">
                <p className="font-semibold text-black text-lg">
                  {feature.title}
                </p>
                <p className="text-sm text-black">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* student review section */}
      <div className="max-w-6xl  mt-8 mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Student&apos;s Reviews
        </h1>

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

      {/*packages section */}
      <div className="mt-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-black mb-8">
          Packages for Weekdays Lessons
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { title: "2 days/week", price: "$39 / £25 / $45 CAD", lessons: 8 },
            { title: "3 days/week", price: "$49 / £35 / $55 CAD", lessons: 12 },
            { title: "4 days/week", price: "$59 / £42 / $65 CAD", lessons: 16 },
            { title: "5 days/week", price: "$69 / £49 / $75 CAD", lessons: 20 },
          ].map((pkg, idx) => (
            <div
              key={idx}
              className="bg-gray-100 text-black  w-[260px] rounded-sm p-4 shadow"
            >
              <h1 className="bg-[#13B4B6] text-white text-2xl text-center py-3 rounded">
                {pkg.title}
              </h1>
              <p className="text-center pt-6 font-bold text-xl">{pkg.price}</p>
              <p className="text-center py-4">Per Month</p>
              <p className="text-start flex">
                <BsCheckCircleFill className="text-[#13B4B6] w-4 mx-1 h-6" /> 30
                minutes each lesson
              </p>
              <div className="bg-cyan-400 mt-2 w-full h-0.5"></div>
              <p className="flex text-start pt-2">
                <BsCheckCircleFill className="text-[#13B4B6] w-4 mx-1 h-6" />{" "}
                {pkg.lessons} lessons per month
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Terms and Trial Form */}
      <div className="flex text-black  flex-wrap justify-center gap-8 px-4 mt-16">
        <div className="bg-white shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 p-6 w-full md:w-[600px] rounded-md">
          <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-justify text-gray-700">
            <b>Darul Ilm Online Quran Academy</b> maintains the privacy of both
            students and teachers. All personal information is treated as
            confidential.
          </p>

          <h2 className="mt-6 text-xl font-bold">FAQ&apos;s</h2>
          <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-800">
            {faqData.map((item, index) => (
              <li key={index} className="transition-all ">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left text-base font-medium flex justify-between items-center py-2"
                >
                  {item.question}
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? "max-h-[500px] mt-2" : "max-h-0"
                  } text-gray-700`}
                >
                  {openIndex === index && (
                    <div className="space-y-2 text-sm sm:text-base">
                      {item.answer}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 p-6 w-full md:w-[400px] rounded-md">
          <h1 className="text-2xl font-bold mb-4">Join Free Trial Classes</h1>
          <p className="mb-4 text-gray-700">
            Male & Female Teachers Are Available
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md p-3"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md p-3"
            />
            <input
              type="text"
              placeholder="Contact No"
              className="w-full border border-gray-300 rounded-md p-3"
            />
            <input
              type="text"
              placeholder="Your Country"
              className="w-full border border-gray-300 rounded-md p-3"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md p-3"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-md font-semibold"
            >
              Apply Now
            </button>
          </form>
        </div>
      </div>

      <div className="pt-10">
        <h1 className="text-center text-xs text-gray-500 ">
          Copyright © 2025 Darul Quran Academy |
        </h1>
      </div>
    </div>
  );
}
