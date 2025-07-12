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
          <div className="text-white ">
            <h2 className="font-semibold text-2xl lg:text-3xl text-wrap font-serif text-yellow-300 pt-4 lg:text-left px-4 lg:px-24">
              Learn Noorani Qaida Online
            </h2>
            <p className="text-xl text-justify font-serif text-white pt-4 lg:text-left px-4 lg:px-24">
              Learn Online Noorani Qaida Course with expert tutors.
               Join our flexible Quran classes to master Noorani Qaida
              with Tajweed in Urdu, Arabic, and English.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-2 mt-16">
        <div className="bg-gray-100 shadow-md p-6 w-full md:w-2/3 sm:w-1/4 rounded-md">
          <h1 className="text-2xl text-cyan-500 font-bold mb-4">
            Learn Noorani Qaida Online – Join Our Course in the USA, UK, Canada,
            & Europe
          </h1>
          <p className="text-justify  text-gray-700">
            Welcome to Darul Ilm Online Quran Academy! Our online Noorani Qaida
            course is designed to help beginners, children, and adults learn
            Quranic reading from scratch. With expert guidance, you’ll master
            the Arabic alphabet, pronunciation marks, and essential Tajweed
            rules. Whether you’re in the USA, UK, Canada, or Europe, our course
            provides a structured and enjoyable approach to learning the Quran.
          </p>
          <h1 className="text-2xl text-cyan-500 font-bold my-6">
            Want to Learn Noorani Qaida?
          </h1>

          <p className="text-justify my-2  text-gray-700">
            Great news! Darul Ilm Online Quran Academy offers an excellent
            online course for beginners, designed to help you or your child
            master Noorani Qaida with ease. Our experienced teachers guide you
            step-by-step through the Arabic alphabet, pronunciation, and
            essential Tajweed rules, all with English translations. Whether
            you’re a parent looking to teach your child or an adult starting
            your Quranic journey, our online classes make learning the Noorani
            Qaida simple and enjoyable. Don’t wait – enroll today and start
            reading the Noorani Qaida with confidence!.
          </p>

          <h1 className="text-2xl text-cyan-500 font-bold my-6">
            Why Choose Noorani Qaida Course?
          </h1>

          <p className="text-justify my-2  text-gray-700">
            The Noorani Qaida course is the perfect foundation for anyone
            starting their journey to read the Quran correctly. It provides a
            structured approach to learning Arabic letters and their
            pronunciation, laying the groundwork for mastering Tajweed rules and
            Quranic recitation. With step-by-step lessons and a focus on
            consistent practice, this course is ideal for both beginners and
            those looking to refine their skills. It helps students build a
            stronger connection with the Quran, enhancing their understanding
            and spiritual growth. Start your Quranic learning with the Noorani
            Qaida course today!
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
            <b>Class Duration:</b> One-one Classes
          </p>

          <p className="text-lg  mb-4">
            <b>Course:</b> One-one Classes
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

          <Image className="w-full" alt="image" width={400} height={50} src={"/enroll.jpg"} />
        </div>

        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-stretch gap-6 mt-10 px-2">
          <div className="flex mx-auto border-2 border-gray-300 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 items-center bg-white p-4 rounded-md">
            <div className="mx-2 text-start">
              <p className="text-cyan-500 font-semibold text-lg">
                What You Will Learn In This Course?
              </p>
              <ul className="list-disc text-wrap mt-4 space-y-2 text-gray-800">
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
                Noorani Qaida Course Outline:
              </p>
              <ul className="list-disc text-wrap mt-4 space-y-2 text-gray-800">
                <li>Learn the shapes of Arabic alphabets</li>
                <li>Understand Compound Letters (Huroof e Murakkabat) and Harakaat</li>
                <li>Study Standing Movements (Vertical Harakaat)</li>
                <li>Explore Maddah Letters, Leen Letters, and Sukoon (Jazm)</li>
                <li>Learn the Rules of Noon Sakin, Meem Sakin, and Waqf (Rules of Stop)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-300  shadow-md p-6 w-full md:w-10/12 sm:w-1/4 rounded-md">
          <h1 className="text-2xl text-cyan-500 font-bold mb-4">
            Learn Noorani Qaida Online in the USA
          </h1>
          <p className="text-justify  text-gray-700">
            Are you based in the USA and eager to learn Noorani Qaida? Our
            online course is perfect for students across different time zones in
            the USA. Whether you’re a busy parent looking to teach your child or
            an adult starting your Quranic journey, we offer flexible class
            schedules and expert teachers.
          </p>
          <h1 className="text-2xl text-cyan-500 font-bold my-6">
            Learn Noorani Qaida Online in the UK
          </h1>

          <p className="text-justify my-2  text-gray-700">
            Join our Noorani Qaida course online in the UK! Designed for
            beginners, our program helps you or your child master the Arabic
            alphabet and basic Quranic pronunciation in a fun and engaging way.
            Our teachers are ready to guide you step by step through each
            lesson, making Quranic learning accessible for all ages.
          </p>

          <h1 className="text-2xl text-cyan-500 font-bold my-6">
            Learn Noorani Qaida Online in Canada
          </h1>

          <p className="text-justify my-2  text-gray-700">
            Discover the joy of learning the Noorani Qaida course online, right
            from Canada! Whether you’re a beginner or looking to refine your
            skills, Darul Ilm Online Quran Academy offers live, interactive
            classes. Our course is suitable for students of all ages and helps
            build a strong foundation for Quranic recitation.
          </p>
        </div>

        {/* Why Academy Section */}
        <div className="text-center mt-20 px-4">
          <h1 className="text-black text-3xl font-bold">
            Why <span className="text-cyan-600">Darul Ilm Online Quran</span>{" "}
            Academy
          </h1>
          <div className="grid text-black grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
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
        <div className="bg-white border-2 text-black border-gray-300 shadow-sm hover:shadow-md hover:shadow-cyan-500 shadow-cyan-400 p-6 w-full md:w-[600px] rounded-md">
          <h1 className="text-2xl font-bold text-black mb-4">Terms & Conditions</h1>
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
