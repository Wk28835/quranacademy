import { MdEmail } from "react-icons/md";      // Material Design

import { MdPhone } from "react-icons/md";      // Material Design



export default function Contact() {
  return (
    <div className="w-full mx-0 p-1">

     <div className="relative rounded-md w-full h-[320px] bg-cover bg-center" style={{ backgroundImage: "url('/books.jpg')" }}>
  {/* Cyan Overlay */}
  <div className="absolute inset-0   bg-opacity-100 shadow-lg flex flex-col lg:flex-row justify-between items-center px-10 py-12">

    {/* Welcome Text */}
    <div className="text-white mx-auto max-w-xl">
      <h2 className="font-semibold text-3xl font-serif text-yellow-300 pt-4 lg:text-left px-4 lg:px-24">
        CONTACT US
      </h2>
     
    </div>


  </div>
</div>


      <div className="pt-12">
        <h1 className="px-2 text-5xl text-center text-cyan-600 font-bold">Learn the Quran Verse by Verse with Us</h1>
          <div className="bg-yellow-400 w-1/5  h-1 m-5 mx-auto"></div>
       <h2 className="px-2 text-xl text-center text-gray-700 font-serif">Contact us by phone or complete the form, and we’ll get in touch with you shortly.</h2>   
      </div>

{/*Contact form*/}

 <div className="flex flex-wrap justify-center gap-8 px-4 mt-10 ">
        {/* form */}
         <div className="bg-white shadow-sm shadow-cyan-400 hover:shadow-lg hover:shadow-cyan-500 rounded-md p-6 w-full md:w-[600px]">
          <h1 className="mb-4 text-center font-serif font-semibold text-3xl">Get Free Trial Classes</h1>
          <p className="text-center mb-6 text-gray-700">
            Trial Class at Darul Ilm Online Quran Academy Now!
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md p-3 placeholder:text-start placeholder:text-gray-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md p-3 placeholder:text-start placeholder:text-gray-400"
            />
            <input
              type="text"
              placeholder="Contact No"
              className="w-full border border-gray-300 rounded-md p-3 placeholder:text-start placeholder:text-gray-400"
            />
            <input
              type="text"
              placeholder="Your Country"
              className="w-full border border-gray-300 rounded-md p-3 placeholder:text-start placeholder:text-gray-400"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md p-3 placeholder:text-start placeholder:text-gray-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-md font-semibold"
            >
              Apply Now
            </button>
          </form>
        </div>
        
        
    <div className="bg-white shadow-sm rounded-md p-6 w-full md:w-[600px] shadow-cyan-400 hover:shadow-lg hover:shadow-cyan-500">
          <h1 className="mb-4 font-bold text-2xl">Contact Info</h1>
         <div className="flex">
          <MdPhone className="text-cyan-600 text-2xl mx-2" />
          <h2 className="text-justify text-xl font-bold mb-1 text-cyan-600">USA CONTACT</h2>
        </div>
          <p className=" pl-10 text-xl text-gray-700 font-bold">+ 1 512 576 7126</p>
        <div className="flex mt-2">
          <MdPhone className="text-cyan-600 text-2xl mx-2" />
          <h2 className=" text-justify text-xl font-bold mb-1 text-cyan-600">UK CONTACT</h2>
        </div>
          <p className=" pl-10 text-xl text-gray-700 font-bold">+44 7808 715763</p>

          <div className="flex mt-2">
            <MdEmail className="text-cyan-600 mx-2 text-2xl" />      
            <h2 className="text-justify text-xl font-bold mb-1 text-cyan-600">Email</h2>
            </div>
            <p className=" pl-10 text-xl text-gray-700 font-bold">info@darulilmonlinequranacademy.com</p>
        
    </div>

        {/* Form Card */}
       
      </div>
    
       <div className="pt-10">
        <h1 className="text-center text-xs text-gray-500 ">Copyright © 2025 Darul Ilm Online Quran Academy |</h1>
      </div>



      
    </div>
  );
}
