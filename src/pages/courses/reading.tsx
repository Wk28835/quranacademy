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

export default function Reading() {
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
    <div className="w-full mx-0 p-1">
      <div
        className="relative rounded-md w-full h-[320px] bg-cover bg-center"
        style={{ backgroundImage: "url('/books.jpg')" }}
      >
        <div className="absolute inset-0   bg-opacity-100 shadow-lg flex flex-col lg:flex-row justify-between items-center px-10 py-12">
          <div className="text-white max-w-xl">
            <h2 className="font-semibold lg:text-3xl text-2xl text-wrap font-serif text-yellow-300 pt-4 lg:text-left px-4 lg:px-24">
              Quran Reading Course Online
            </h2>
            <p className="text-base lg:text-xl text-wrap font-serif text-white pt-4 lg:text-left px-4 lg:px-24">
              Master Quran reading online with expert instructors at Darul Ilm
              Online Quran Academy. Flexible schedules, personalized lessons,
              and Tajweed mastery for kids and adults worldwide. Start your
              journey today!
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-2 mt-16">
        <div className="bg-gray-100 shadow-md p-6 w-full md:w-2/3 sm:w-1/4 rounded-md">
          <h1 className="text-2xl text-cyan-500 font-bold mb-4">
            Quran Reading Course – Learn to Read the Quran Online
          </h1>
          <p className="text-justify  text-gray-700">
            At Darul Ilm Online Quran Academy, we believe that every individual
            deserves the opportunity to read and understand the Quran with
            accuracy, ease, and confidence. Whether you are a beginner or
            someone looking to refine your Quranic recitation skills, our Quran
            Reading Course is designed to cater to students of all ages, from
            children to adults.
          </p>
          <h1 className="text-2xl text-cyan-500 font-bold my-6">
            Why Choose Our Quran Reading Course?
          </h1>

          <p className="text-justify my-2  text-gray-700">
            We understand that each student has a unique learning pace. That’s
            why our course offers customized learning plans based on your
            current level of knowledge and proficiency. Whether you’re just
            beginning your Quranic journey or aiming to master Tajweed (the art
            of proper Quran recitation), we offer step-by-step guidance to help
            you excel. You will receive lessons that are suitable for your
            specific needs.
          </p>

          <h1 className="text-2xl text-cyan-500 font-bold my-6">
            Certified and Experienced Instructors
          </h1>

          <p className="text-justify my-2  text-gray-700">
            At Darul Ilm Online Quran Academy, we are proud to have a team of
            highly qualified instructors who are experts in Quranic studies,
            Tajweed, and recitation. Our instructors are passionate about
            teaching and are dedicated to making your learning experience both
            enjoyable and meaningful. With their deep knowledge and years of
            experience, you will feel supported throughout your learning
            journey.
          </p>

          <button className="w-1/3 bg-cyan-400 hover:animate-bounce hover:bg-cyan-700 text-white py-3 my-4 rounded-md font-semibold">
            Get Enrolled Now
          </button>
        </div>

        <div className="bg-white text-black shadow-md p-6 w-full md:w-[400px] rounded-md">
          <p className="text-lg mb-4">
            <b>Class Type:</b> One-one Classes
          </p>

          <p className="text-lg  mb-4">
            <b>Class Duration:</b> 30 Minutes Per Student
          </p>

          <p className="text-lg  mb-4">
            <b>Course:</b>Quran Reading Course
          </p>

          <p className="text-lg  mb-4">
            <b>Time Period:</b> Flexible, based on the student’s availability
          </p>

          <p className="text-lg  mb-4">
            <b>Age Level:</b>Minmum 05 Years
          </p>

          <p className="text-lg  mb-4">
            <b>Gender:</b>Both Male and Female
          </p>

          <p className="text-lg  mb-4">
            <b>Language:</b>English, Urdu, Hindi, Pashto
          </p>

          <Image alt="image" width={500} height={50} src={"/enroll.jpg"} />

        
        </div>

        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-stretch gap-4 mt-10 px-4">
          <div className="flex mx-auto border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 items-center bg-white p-4 rounded-md">
            <div className="mx-2 text-start">
              <p className="text-cyan-500 font-semibold text-lg">
                What You Will Learn In This Course?
              </p>
              <ul className="list-disc text-wrap ml-6 mt-4 space-y-2 text-gray-800">
                <li>Recognize Arabic letters in different shapes and sounds</li>
                <li>Study the Makharij of letters</li>
                <li>Understand the basic rules of Tajweed</li>
                <li>Read the Quran with accurate pronunciation</li>
                <li>Gain foundational Islamic knowledge</li>
              </ul>
            </div>
          </div>

          <div className="flex mx-auto border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 items-center bg-white p-4 rounded-md">
            <div className="mx-2 text-start">
              <p className="text-cyan-500 font-semibold text-lg">
                Course Outline: Quran Reading Course
              </p>
              <ul className="list-disc text-wrap ml-6 mt-4 space-y-2 text-gray-800">
                <li>Module 1: Introduction to Quranic Studies</li>
                <li>Module 2: Mastering the Arabic Alphabet</li>
                <li>Module 3: Basic Quranic Reading Skills</li>
                <li>Module 4: Introduction to Tajweed</li>
                <li>Module 5: Advanced Quran Reading with Tajweed</li>
                <li>Module 6: Understanding the Meaning of the Quran</li>
                <li>Module 7: Quranic Recitation Practice</li>
                <li>Module 8: Reviewing and Perfecting Your Recitation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-300  shadow-md p-6 w-full md:w-10/12 sm:w-1/4 rounded-md">
          <h1 className="text-2xl text-cyan-500 font-bold mb-4">
            Basic Quran Reading for Beginners
          </h1>
          <p className="text-justify  text-gray-700">
            For those new to the Quran, our course starts with the fundamentals
            of Quran reading. This includes learning to recognize the Arabic
            alphabet, vowels, and how to form basic words. We guide you
            step-by-step from the basics, making it ideal for children and
            adults who are new to Quranic studies.
          </p>
          <h1 className="text-2xl text-cyan-500 font-bold my-6">
            Quran Reading with Urdu Translation and Tafseer
          </h1>

          <p className="text-justify my-2  text-gray-700">
            Our curriculum goes beyond just reading the Quran. We provide
            detailed Urdu translations and Tafseer (exegesis) to help you
            understand the meanings and context of Quranic verses. This deeper
            understanding allows you to connect with the message of the Quran in
            a more meaningful way.
          </p>

          <h1 className="text-2xl text-cyan-500 font-bold my-6">
            Improve Quran Recitation and Fluency
          </h1>

          <p className="text-justify my-2  text-gray-700">
            In addition to basic reading, we focus on improving your fluency in
            reciting the Quran. With practical recitation lessons led by
            experienced instructors, you will gain confidence in reading the
            Quran and perfect your pronunciation.
          </p>

          <h1 className="text-2xl text-cyan-500 font-bold my-6">
            Free Online Quran Reading Trial
          </h1>

          <p className="text-justify my-2  text-gray-700">
            If you are unsure whether online learning is right for you, we offer
            a free trial class where you can experience our teaching methods
            firsthand. This gives you the chance to see how our courses work and
            decide if it’s the best fit for your learning needs.
          </p>
        </div>

        {/* Why Academy Section */}
        <div className="text-center text-black mt-20 px-4">
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
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4 mt-16">
        <div className="bg-white border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 p-6 w-full md:w-[600px] rounded-md">
          <h1 className="text-2xl text-black font-bold mb-4">Terms & Conditions</h1>
          <p className="text-justify text-gray-700">
            <b>Darul Ilm Online Quran Academy</b> maintains the privacy of both
            students and teachers. All personal information is treated as
            confidential.
          </p>
          <h2 className="mt-6 text-black text-xl font-bold">FAQ`&apos;`s</h2>
          <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-800">
            <li>What Do I Need to Start?</li>
            <li>
              How Long Will It Take to Learn Quran, Arabic, or Islamic Studies?
            </li>
            <li>Do We Have Any Course Materials?</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 p-6 w-full md:w-[400px] rounded-md">
          <h1 className="text-2xl text-black font-bold mb-4">Join Free Trial Classes</h1>
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
          Copyright © 2025 Darul Ilm Online Quran Academy |
        </h1>
      </div>
    </div>
  );
}
