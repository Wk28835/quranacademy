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

  return (
    <div className="w-full px-2 sm:px-4">
      {/* Hero Section */}
      <div
        className="relative w-full h-auto min-h-[300px] lg:min-h-[450px] bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-cyan-400 bg-opacity-40 rounded-md flex flex-col lg:flex-row sm:flex-row justify-between items-center px-4 sm:px-6 py-8 gap-6 sm:gap-5">
          <div className="text-white w-full lg:max-w-xl text-center px-2 sm:px-0">
            <h2 className="font-semibold text-xl font-sans sm:text-2xl pt-2">
              Welcome to Darul Ilm Online Quran Academy
            </h2>
            <h1 className="pt-3 sm:pt-4 font-bold font-serif text-2xl sm:text-3xl lg:text-4xl">
              Join Free Trial Classes
            </h1>
          </div>

          <div className="w-full max-w-xs sm:max-w-md">
            <form className="space-y-2 sm:space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-cyan-400 border border-white rounded-md p-2 sm:p-3 placeholder-white text-white text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-cyan-400 border border-white rounded-md p-2 sm:p-3 placeholder-white text-white text-sm sm:text-base"
              />
              <input
                type="text"
                placeholder="Contact No"
                className="w-full bg-cyan-400 border border-white rounded-md p-2 sm:p-3 placeholder-white text-white text-sm sm:text-base"
              />
              <input
                type="text"
                placeholder="Your Country"
                className="w-full bg-cyan-400 border border-white rounded-md p-2 sm:p-3 placeholder-white text-white text-sm sm:text-base"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full bg-cyan-400 border border-white rounded-md p-2 sm:p-3 placeholder-white text-white text-sm sm:text-base"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-cyan-700 hover:bg-gray-100 font-semibold py-2 sm:py-3 rounded-md transition text-sm sm:text-base"
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
        <p className="pt-3  sm:pt-4 pb-4 sm:pb-6 text-sm sm:text-base md:text-lg">
          Explore our online courses, including Noorani Qaida, Quran Reading,
          Tajweed, Tafseer, Memorization, Arabic Language, and Islamic Studies.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {[
          {
            img: "/norani_qaida.jpg",
            title: "Quran Reading",
            desc: "Learn Noorani Qaida with expert guidance to master accurate Quranic pronunciation...",
          },
          {
            img: "/reading.jpg",
            title: "Quran Reading",
            desc: "Master Quran reading with proper pronunciation and fluency through expert guidance...",
          },
          {
            img: "/tafseer.jpg",
            title: "Noorani Qaida",
            desc: "Understand the meanings of the Quran with in-depth Tafseer and explore the wisdom...",
          },
          {
            img: "/memory.jpg",
            title: "Quran Memorization",
            desc: "Memorize the Quran with expert guidance and proven techniques to enhance retention...",
          },
          {
            img: "/translate.jpg",
            title: "Quran Translation",
            desc: "Learn Quranic translation with clear and detailed explanations to understand the message...",
          },
          {
            img: "/tajweed.jpg",
            title: "Quran Tajweed",
            desc: "Perfect your Quran recitation by mastering the Tajweed rules for proper pronunciation...",
          },
        ].map((course, idx) => (
          <div
            key={idx}
            className="shadow-md hover:shadow-lg hover:shadow-cyan-500 shadow-cyan-400 border-2 rounded-md"
          >
            <Image
              className="h-56 w-full object-cover"
              src={course.img}
              alt="Course Image"
              width={400}
              height={200}
            />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{course.title}</h2>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center shadow-2xl bg-white p-4 rounded-md"
            >
              <div className="mr-4">{feature.icon}</div>
              <div className="ml-4 text-start">
                <p className="font-semibold text-lg">{feature.title}</p>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Packages Section */}
      <div className="mt-20 px-4 text-center">
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
              className="bg-gray-100 w-[260px] rounded-sm p-4 shadow"
            >
              <h1 className="bg-cyan-600 text-white text-2xl text-center py-3 rounded">
                {pkg.title}
              </h1>
              <p className="text-center pt-6 font-bold text-xl">{pkg.price}</p>
              <p className="text-center py-4">Per Month</p>
              <p className="text-start">✔️ 30 minutes each lesson</p>
              <div className="bg-cyan-400 mt-2 w-full h-0.5"></div>
              <p className="text-start pt-2">
                ✔️ {pkg.lessons} lessons per month
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Terms and Trial Form */}
      <div className="flex flex-wrap justify-center gap-8 px-4 mt-16">
        <div className="bg-white shadow-md p-6 w-full md:w-[600px] rounded-md">
          <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-justify text-gray-700">
            <b>Darul Ilm Online Quran Academy</b> maintains the privacy of both
            students and teachers. All personal information is treated as
            confidential.
          </p>

          <h2 className="mt-6 text-xl font-bold">FAQ`&apos;`s</h2>
          <ul className="list-decimal ml-6 mt-4 space-y-2 text-gray-800">
            <li>What Do I Need to Start?</li>
            <p className="text-base px-1 text-gray-700">
              All you need is a smart device (PC, tablet, or phone) connected to
              the internet.
            </p>
            <ul className="list-disc px-4 text-base text-gray-700">
              <li>
                Download Zoom or Skype on your device and sign in with your
                Darul Ilm Online Quran Academy account.
              </li>
              <li>
                Your teacher will then contact you at the scheduled class time.
              </li>
            </ul>
            <li>
              How Long Will It Take to Learn Quran, Arabic, or Islamic Studies?
            </li>
            <ul className="list-disc px-4 text-base text-gray-700">
              <li>
                For adults, depending on the intensity of the studies (number of
                classes taken), a Tajweed course can take 8 to 12 weeks.
              </li>
              <li>
                For children, the timeline depends on their age, aptitude, and
                the support provided by parents and teachers.
              </li>
            </ul>
            <li>Do We Have Any Course Materials?</li>
            <ul className="list-disc px-4 text-base text-gray-700">
              <li>
                Yes, at Darul Ilm Online Quran Academy, we offer a variety of
                resources.
              </li>
            </ul>
          </ul>
        </div>

        <div className="bg-white shadow-md p-6 w-full md:w-[400px] rounded-md">
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
