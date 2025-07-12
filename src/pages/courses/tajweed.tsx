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

export default function NooraniQaidaCourse() {
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
            <h2 className="font-semibold text-3xl text-nowrap font-serif text-yellow-300 pt-4 lg:text-left px-4 lg:px-24">
              Online Tajweed Course
            </h2>
            <p className="text-xl text-nowrap font-serif text-white pt-4 lg:text-left px-4 lg:px-24">
              Online Tajweed Course – Perfect Your Quran Recitation
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-2 mt-16">
        <div className="bg-gray-100 shadow-md p-6 w-full md:w-2/3 sm:w-1/4 rounded-md">
          <h1 className="text-2xl text-cyan-500 font-bold mb-4">
            Perfect Your Quran Recitation with Our Online Tajweed Course
          </h1>
          <p className="text-justify  text-gray-700">
            The beauty of the Quran lies not only in its profound meanings but
            also in its precise recitation. At Darul Ilm Online Quran Academy,
            we bring you an expertly designed Online Tajweed Course that enables
            learners to recite the Quran with accuracy, fluency, and confidence.
            This course is ideal for anyone eager to learn the art of Tajweed,
            regardless of age or prior experience.
          </p>

          <h1 className="text-2xl text-cyan-500 font-bold mb-4">
            What is Tajweed?
          </h1>
          <p className="text-justify  text-gray-700">
            Tajweed refers to the set of rules governing the proper
            pronunciation of Quranic Arabic during recitation. It ensures that
            every letter is pronounced correctly, maintaining its rightful
            characteristics and avoiding errors that may alter the meaning of
            the Quran. Learning Tajweed helps you honor the Quran’s sanctity and
            recite it as it was revealed to the Prophet Muhammad (peace be upon
            him).
          </p>
          <h1 className="text-2xl text-cyan-500 font-bold my-6">
            Why Enroll in Our Online Tajweed Course?
          </h1>

          <p className="text-justify  text-gray-700">
            Our Online Tajweed Course is meticulously crafted to cater to
            students of all levels, whether you’re a beginner starting from
            scratch or someone seeking to refine their skills. By enrolling in
            our course, you will:
          </p>

          <ul className="list-disc text-nowrap ml-6 mt-4 space-y-2 text-gray-800">
            <li>
              Learn Correct Pronunciation: Master the articulation points
              (makharij) and characteristics (sifaat) of Arabic letters.
            </li>
            <li>
              Understand Tajweed Rules: Familiarize yourself with essential
              Tajweed principles such as ikhfa, idgham, and qalqalah.
            </li>
            <li>
              Improve Fluency: Enhance your recitation flow with guided practice
              and expert feedback.
            </li>
            <li>
              Receive One-on-One Attention: Benefit from personalized
              instruction tailored to your needs and pace.
            </li>
            <li>
              Gain Spiritual Rewards: Perfect your recitation and elevate your
              connection with Allah.
            </li>
          </ul>

          <h1 className="text-2xl text-cyan-500 font-bold my-6">
            Features of Our Online Tajweed Course
          </h1>

          <ul className="list-disc text-nowrap ml-6 mt-4 space-y-2 text-gray-800">
            <li>Theoretical foundations to understand Tajweed rules.</li>
            <li>Practical exercises to apply these rules during recitation.</li>
            <li>
              Strategies to overcome common challenges in Quranic pronunciation.
            </li>
          </ul>

          <h1 className="text-2xl text-cyan-500 font-bold my-6">
            How to Get Started
          </h1>

          <ul className="list-disc text-nowrap ml-6 mt-4 space-y-2 text-gray-800">
            <li>Fill out the registration form on our website.</li>
            <li>
              Schedule your free trial class to experience our teaching style..
            </li>
            <li>
              Select a plan that suits your schedule and start your journey
              towards mastering Tajweed.
            </li>
          </ul>

          <button className="w-1/3 bg-cyan-400 hover:animate-bounce hover:bg-cyan-700 text-white py-3 my-4 rounded-md font-semibold">
            Get Enrolled Now
          </button>
        </div>

        <div className="bg-white shadow-md p-6 w-full md:w-[400px] rounded-md">
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

          <Image alt="image" width={400} height={50} src={"/enroll.jpg"} />
        </div>

        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-stretch gap-6 mt-10 px-4">
          <div className="flex border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 items-center bg-white p-4 rounded-md">
            <div className="mx-2 text-start">
              <p className="text-cyan-500 font-semibold text-lg">
                What You Will Learn In This Course?
              </p>
              <ul className="list-disc text-nowrap ml-6 mt-4 space-y-2 text-gray-800">
                <li>
                  Accessibility: Learn from the comfort of your home, no matter
                  where you are in the world.
                </li>
                <li>Read Quranic Verses with Proper Pronunciation</li>
                <li>Understand and Apply Tajweed Rules</li>
                <li>Gain Understanding of Quranic Meanings and Tafseer</li>
                <li>Receive Personalized Feedback for Improvement</li>
                <li>Continue Your Quranic Learning Journey</li>
              </ul>
            </div>
          </div>

          <div className="flex border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 bg-white p-4 rounded-md">
            <div className="mx-2  text-start">
              <p className="text-cyan-500 font-semibold text-lg">
                Course Outline: Quran Reading Course
              </p>
              <ul className="list-disc text-nowrap ml-6 mt-4 space-y-2 text-gray-800">
                <li>
                  Cost-Effective: Save time and resources with our affordable
                  online classes.
                </li>
                <li>
                  Accessibility: Learn from the comfort of your home, no matter
                  where you are in the world.
                </li>
                <li>
                  Cost-Effective: Save time and resources with our affordable
                  online classes.
                </li>
                <li>
                  Interactive Experience: Engage in live sessions with
                  instructors and participate in group recitations for peer
                  learning.
                </li>
                <li>
                  Spiritual Fulfillment: Develop a deeper connection with the
                  Quran and strengthen your faith.
                </li>
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
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4 mt-16">
        <div className="bg-white border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 p-6 w-full md:w-[600px] rounded-md">
          <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-justify text-gray-700">
            <b>Darul Ilm Online Quran Academy</b> maintains the privacy of both
            students and teachers. All personal information is treated as
            confidential.
          </p>
          <h2 className="mt-6 text-xl font-bold">FAQ`&apos;`s</h2>
          <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-800">
            <li>What Do I Need to Start?</li>
            <li>
              How Long Will It Take to Learn Quran, Arabic, or Islamic Studies?
            </li>
            <li>Do We Have Any Course Materials?</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 p-6 w-full md:w-[400px] rounded-md">
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
          Copyright © 2025 Darul Ilm Online Quran Academy |
        </h1>
      </div>
    </div>
  );
}
