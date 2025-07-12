import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Reviews() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full mx-0 p-1">
      <div
        className="relative rounded-md w-full h-[320px] bg-cover bg-center"
        style={{ backgroundImage: "url('/books.jpg')" }}
      >
        {/* Cyan Overlay */}
        <div className="absolute inset-0  bg-opacity-100 shadow-lg flex flex-col lg:flex-row justify-between items-center px-10 py-12">
          {/* Welcome Text */}
          <div className="text-white mx-auto max-w-xl">
            <h2 className="font-light text-4xl font-serif text-yellow-300 pt-4 lg:text-left px-4 lg:px-24">
              FAQ `&apos;`S
            </h2>
          </div>
        </div>
      </div>

      <div className="pt-12">
        <h1 className="px-2 text-3xl text-center text-cyan-600 font-bold">
          FREQUENTLY ASKED QUESTION
        </h1>
        <div className="bg-yellow-400 w-28  h-1 m-2 mx-auto"></div>
      </div>
      {/*faqs section */}

      <section className="text-black">
        <div className="mt-8  shadow-sm mx-4 sm:mx-12 lg:mx-24">
          <button
            onClick={() => setOpen(!open)}
            className="w-full sm:w-2/3 lg:w-1/2 flex justify-between text-lg font-light"
          >
            <span className="text-lg font-serif">What Do I Need to Start?</span>
            {open ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {open && (
            <div className="space-y-2 mt-3 text-sm sm:text-base">
              <p>
                ✔️ All you need is a smart device (PC, tablet, or phone)
                connected to the internet.
              </p>
              <p>
                ✔️ Download Zoom or Skype on your device and sign in with your
                Darul Ilm Online Quran Academy account.
              </p>
              <p>
                ✔️ Your teacher will then contact you at the scheduled class
                time.
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 shadow-sm mx-4 sm:mx-12 lg:mx-24">
          <button
            onClick={() => setOpen(!open)}
            className="w-full sm:w-2/3 lg:w-1/2 flex justify-between text-lg font-light"
          >
            <span className="text-lg font-serif">
              Do We Have Any Course Materials?
            </span>
            {open ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {open && (
            <div className="space-y-2 mt-3 text-sm sm:text-base">
              <p>
                ✔️ Yes, at Darul Ilm Online Quran Academy, we offer a variety of
                resources, including digital Qurans, Tajweed materials, and
                books on Arabic and Islamic studies. Once you join the academy,
                in sha Allah, we will provide you with all the necessary
                materials.
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 shadow-sm mx-4 sm:mx-12 lg:mx-24">
          <button
            onClick={() => setOpen(!open)}
            className="w-full sm:w-2/3 lg:w-1/2 flex justify-between text-lg font-light"
          >
            <span className="text-lg font-serif">
              How Many Students Are There in Each Class?
            </span>
            {open ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {open && (
            <div className="space-y-2 mt-3 text-sm sm:text-base">
              <p>
                ✔️ At Darul Ilm Online Quran Academy, our classes are conducted
                in a one-on-one format. Each student has a dedicated session
                with the tutor, ensuring personalized attention and tailored
                instruction for effective learning.
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 shadow-sm mx-4 sm:mx-12 lg:mx-24">
          <button
            onClick={() => setOpen(!open)}
            className="w-full sm:w-2/3 lg:w-1/2 flex justify-between text-lg font-light"
          >
            <span className="text-lg font-serif">
              Why Do Online Islamic Classes Have Charges?
            </span>
            {open ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {open && (
            <div className="space-y-2 mt-3 text-sm sm:text-base">
              <p>
                ✔️ When something is offered for free, students may not take it
                seriously. Paying for online classes motivates students to
                commit fully and learn the Quran with dedication.
              </p>
              <p>
                ✔️ Running Darul Ilm Online Quran Academy online requires
                substantial resources to ensure the best services and the latest
                technologies. We have also hired well-qualified tutors who
                devote their time and expertise to teaching Quran and Arabic.
              </p>
              <p>
                ✔️ The study fees cover various costs, including teachers’
                salaries, website development, and maintenance. This enables us
                to provide a purpose-built classroom for effective Quran
                learning.
              </p>
            </div>
          )}
        </div>
      </section>

      <div className="bg-gray-200 w-full mt-10 h-1 m-8 mx-auto"></div>
      <div className="pt-6">
        <h1 className="text-center text-xs text-gray-500 ">
          Copyright © 2025 Darul Ilm Online Quran Academy |
        </h1>
      </div>
    </div>
  );
}
