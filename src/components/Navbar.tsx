import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openList, setListOpen] = useState(false);

  return (
    <header className="bg-white py-1 pt-0 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* Logo on the left */}
        <div className="text-xl font-bold text-gray-800">
          <Link href="/">
            <Image src="/logo.png" alt="Dar Ul Ilm" width={200} height={50} />
          </Link>
        </div>

        {/* Desktop Menu on the right */}
        <nav className="hidden md:flex mt-10 items-center space-x-6">

          <Link href="/" className="text-gray-700 hover:text-blue-500 transition">
            Home
          </Link>

          <div
            className="relative group"
            onMouseEnter={() => setListOpen(true)}
            onMouseLeave={() => setListOpen(false)}
          >
            <button
              className="flex items-center text-gray-700 hover:text-blue-500 transition"
            >
              Courses
              <FaChevronDown
                className={`ml-1 transition-transform duration-300 ${
                  openList ? "rotate-180" : ""
                }`}
              />
            </button>

            {openList && (
              <ul className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md z-50">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/courses/noorani">Noorani Qaida Course</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/courses/reading">Quran Reading Course</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/courses/memorization">Quran Memorization</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/courses/translate">Quran Translation Course</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/courses/tajweed">Quran Tajweed Course</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/courses/tafseer">Quran Tafseer Course</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/courses/arabic">Arabic Language Course</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/courses/islamic_studies">Islamic Studies Course</Link>
                </li>
              </ul>
            )}
          </div>

          <Link href="/pricing" className="text-gray-700 hover:text-blue-500 transition">
            Pricing
          </Link>

          <Link href="/reviews" className="text-gray-700 hover:text-blue-500 transition">
            Reviews
          </Link>

          <Link href="/faqs" className="text-gray-700 hover:text-blue-500 transition">
            FAQ`&apos;`s
          </Link>

          <Link href="/contact_us" className="text-gray-700 hover:text-blue-500 transition">
            Contact Us
          </Link>

          <Link href="/islamic_blog" className="text-gray-700 hover:text-blue-500 transition">
            Islamic Blog
          </Link>
        </nav>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4">
          <ul className="flex flex-col space-y-3">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>

            <li className="relative group">
              <button
                onClick={() => setListOpen(!openList)}
                className="flex items-center text-gray-700 hover:text-blue-500"
              >
                Courses
                <FaChevronDown className={`ml-2 transition-transform ${openList ? "rotate-180" : ""}`} />
              </button>

              {openList && (
                <ul className="pl-4 mt-2 space-y-1 bg-white rounded shadow">
                  <li><Link href="/courses/noorani">Noorani Qaida Course</Link></li>
                  <li><Link href="/courses/reading">Quran Reading Course</Link></li>
                  <li><Link href="/courses/memorization">Quran Memorization</Link></li>
                  <li><Link href="/courses/translate">Quran Translation Course</Link></li>
                  <li><Link href="/courses/tajweed">Quran Tajweed Course</Link></li>
                  <li><Link href="/courses/tafseer">Quran Tafseer Course</Link></li>
                  <li><Link href="/courses/arabic">Arabic Language Course</Link></li>
                  <li><Link href="/courses/islamic_studies">Islamic Studies Course</Link></li>
                </ul>
              )}
            </li>

            <li><Link href="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link></li>
            <li><Link href="/reviews" onClick={() => setIsOpen(false)}>Reviews</Link></li>
            <li><Link href="/faqs" onClick={() => setIsOpen(false)}>FAQ`&apos;`s</Link></li>
            <li><Link href="/contact_us" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
            <li><Link href="/islamic_blog" onClick={() => setIsOpen(false)}>Islamic Blog</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
