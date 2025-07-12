import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { MdEmail } from "react-icons/md";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openList, setListOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      {/* Top Email + Flag Row */}
      <div className="hidden sm:flex justify-between">
        <div className="place-content-start py-8">
          <MdEmail className="text-blue-500 mx-20 text-3xl" />
          <p className="font-b text-base font-sans text-gray-700 mx-24 font-extrabold">
            info@darulilmacademy.com
          </p>
        </div>

        <div className="mr-24 py-1">
          <Image src="/pk.png" alt="Pakistan Flag" width={32} height={16} />
          <p className="py-1 text-black text-sm font-bold">+92 319 5338897</p>
          <Image src="/usa.png" alt="UK Flag" width={32} height={16} />
          <p className="py-1 text-black text-sm font-bold">+44 7808 715763</p>
        </div>
      </div>

      {/* Main Nav */}
      <div className="w-full mx-auto py-6 flex items-center gap-16">
        {/* Desktop Menu */}
        <nav className="hidden text-black md:flex font-sans space-x-8 items-center">
          {/* Logo */}
          <div className="mx-24">
            <Link href="/">
              <Image
                src="/logo1.png"
                alt="Darul Quran Academy"
                width={120}
                height={40}
              />
            </Link>
          </div>

          <Link href="/" className="text-gray-700 pl-28 hover:text-blue-500">
            Home
          </Link>

          {/* Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setListOpen(true)}
            onMouseLeave={() => setListOpen(false)}
          >
            <button className="flex items-center text-gray-700 hover:text-blue-500">
              Courses
              <FaChevronDown
                className={`ml-1 transition-transform duration-300 ${
                  openList ? "rotate-90" : ""
                }`}
              />
            </button>

            {openList && (
              <ul className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md z-50">
                {[
                  { href: "/courses/noorani", label: "Noorani Qaida Course" },
                  { href: "/courses/reading", label: "Quran Reading Course" },
                  {
                    href: "/courses/memorization",
                    label: "Quran Memorization",
                  },
                  {
                    href: "/courses/translate",
                    label: "Quran Translation Course",
                  },
                  { href: "/courses/tajweed", label: "Quran Tajweed Course" },
                  { href: "/courses/tafseer", label: "Quran Tafseer Course" },
                  { href: "/courses/arabic", label: "Arabic Language Course" },
                  {
                    href: "/courses/islamic_studies",
                    label: "Islamic Studies Course",
                  },
                ].map((item, i) => (
                  <li key={i} className="px-4 py-2 hover:bg-gray-100">
                    <Link href={item.href} onClick={() => setListOpen(false)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link href="/pricing" className="text-gray-700 hover:text-blue-500">
            Pricing
          </Link>
          <Link href="/reviews" className="text-gray-700 hover:text-blue-500">
            Reviews
          </Link>
          <Link href="/faqs" className="text-gray-700 hover:text-blue-500">
            FAQs
          </Link>
          <Link
            href="/contact_us"
            className="text-gray-700 hover:text-blue-500"
          >
            Contact Us
          </Link>
          <Link
            href="/islamic_blog"
            className="text-gray-700 hover:text-blue-500"
          >
            Islamic Blog
          </Link>
        </nav>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden text-black mt-2 px-4 pb-4">
          <ul className="flex flex-col space-y-3">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => setListOpen(!openList)}
                className="flex items-center text-gray-700 hover:text-blue-500"
              >
                Courses
                <FaChevronDown
                  className={`ml-2 transition-transform ${
                    openList ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openList && (
                <ul className="pl-4 mt-2 space-y-1 bg-white rounded shadow">
                  {[
                    { href: "/courses/noorani", label: "Noorani Qaida Course" },
                    { href: "/courses/reading", label: "Quran Reading Course" },
                    {
                      href: "/courses/memorization",
                      label: "Quran Memorization",
                    },
                    {
                      href: "/courses/translate",
                      label: "Quran Translation Course",
                    },
                    { href: "/courses/tajweed", label: "Quran Tajweed Course" },
                    { href: "/courses/tafseer", label: "Quran Tafseer Course" },
                    {
                      href: "/courses/arabic",
                      label: "Arabic Language Course",
                    },
                    {
                      href: "/courses/islamic_studies",
                      label: "Islamic Studies Course",
                    },
                  ].map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        onClick={() => {
                          setListOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link href="/pricing" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/reviews" onClick={() => setIsOpen(false)}>
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/faqs" onClick={() => setIsOpen(false)}>
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/contact_us" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/islamic_blog" onClick={() => setIsOpen(false)}>
                Islamic Blog
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
