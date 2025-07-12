import { BsCheckCircleFill } from "react-icons/bs";

export default function Pricing() {
  return (
    <div className="w-full mx-0 p-1">
      <div
        className="relative rounded-md w-full h-[320px] bg-cover bg-center"
        style={{ backgroundImage: "url('/books.jpg')" }}
      >
        {/* Cyan Overlay */}
        <div className="absolute inset-0  bg-opacity-100 flex flex-col lg:flex-row justify-between items-center px-10 py-8">
          {/* Welcome Text */}
          <div className="text-white ml-8">
            <h2 className="font-bold text-3xl  font-sans  text-white pt-2">
              PRICING
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-6">
        {/*packages section */}
        <div className=" px-4 text-center">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                title: "2 days/week",
                price: "$39 / £25 / $45 CAD",
                lessons: 8,
              },
              {
                title: "3 days/week",
                price: "$49 / £35 / $55 CAD",
                lessons: 12,
              },
              {
                title: "4 days/week",
                price: "$59 / £42 / $65 CAD",
                lessons: 16,
              },
              {
                title: "5 days/week",
                price: "$69 / £49 / $75 CAD",
                lessons: 20,
              },
            ].map((pkg, idx) => (
              <div
                key={idx}
                className="bg-gray-100 text-black  w-[260px] rounded-sm p-4 shadow"
              >
                <h1 className="bg-[#13B4B6] text-white text-2xl text-center py-3 rounded">
                  {pkg.title}
                </h1>
                <p className="text-center pt-6 font-bold text-xl">
                  {pkg.price}
                </p>
                <p className="text-center py-4">Per Month</p>
                <p className="text-start flex">
                  <BsCheckCircleFill className="text-[#13B4B6] w-4 mx-1 h-6" />{" "}
                  30 minutes each lesson
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

        <div className="pt-10">
          <h1 className="text-center text-xs text-gray-500 ">
            Copyright © 2025 Darul Quran Academy |
          </h1>
        </div>
      </div>
    </div>
  );
}
