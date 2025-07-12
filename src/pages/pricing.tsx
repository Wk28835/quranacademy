

export default function Pricing() {
  return (
    <div className="w-full mx-0 p-1">

     <div className="relative rounded-md w-full h-[320px] bg-cover bg-center" style={{ backgroundImage: "url('/books.jpg')" }}>
  {/* Cyan Overlay */}
  <div className="absolute inset-0   bg-opacity-100 shadow-lg flex flex-col lg:flex-row justify-between items-center px-10 py-12">

    {/* Welcome Text */}
    <div className="text-white mx-auto max-w-xl">
      <h2 className="font-semibold text-4xl  font-serif text-yellow-300 pt-10 mx-auto">
        PRICING
      </h2>
     
    </div>


  </div>
</div>

      
      
      <div className="mt-16">
        

        {/* Container for 4 cards */}
        <div className="flex text-black flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="bg-gray-100 w-[260px] rounded-sm p-4">
            <h1 className="bg-cyan-600 text-white text-2xl text-center py-3 rounded">
              2 days/week
            </h1>
            <p className="text-center pt-6 font-bold text-xl">
              $39 / £25 / $45 CAD
            </p>
            <p className="text-center py-4 text-base">Per Month</p>
            <p className="text-start pt-4 text-medium">
              ✔️ 30 minutes each lesson
            </p>
            <div className="bg-cyan-400 mt-2 w-full h-0.5"></div>
            <p className="text-start pt-2 text-medium">
              ✔️ 8 lessons per month
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 w-[260px] rounded-sm p-4">
            <h1 className="bg-cyan-600 text-white text-2xl text-center py-3 rounded">
              3 days/week
            </h1>
            <p className="text-center pt-6 font-bold text-xl">
              $49 / £35 / $55 CAD
            </p>
            <p className="text-center py-4 text-base">Per Month</p>
            <p className="text-start pt-4 text-medium">
              ✔️ 30 minutes each lesson
            </p>
            <div className="bg-cyan-400 mt-2 w-full h-0.5"></div>
            <p className="text-start pt-2 text-medium">
              ✔️ 12 lessons per month
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 w-[260px] rounded-sm p-4">
            <h1 className="bg-cyan-600 text-white text-2xl text-center py-3 rounded">
              4 days/week
            </h1>
            <p className="text-center pt-6 font-bold text-xl">
              $59 / £42 / $65 CAD
            </p>
            <p className="text-center py-4 text-base">Per Month</p>
            <p className="text-start pt-4 text-medium">
              ✔️ 30 minutes each lesson
            </p>
            <div className="bg-cyan-400 mt-2 w-full h-0.5"></div>
            <p className="text-start pt-2 text-medium">
              ✔️ 16 lessons per month
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-100 w-[260px] rounded-sm p-4">
            <h1 className="bg-cyan-600 text-white text-2xl text-center py-3 rounded">
              5 days/week
            </h1>
            <p className="text-center pt-6 font-bold text-xl">
              $69 / £49 / $75 CAD
            </p>
            <p className="text-center py-4 text-base">Per Month</p>
            <p className="text-start pt-4 text-medium">
              ✔️ 30 minutes each lesson
            </p>
            <div className="bg-cyan-400 mt-2 w-full h-0.5"></div>
            <p className="text-start pt-2 text-medium">
              ✔️ 20 lessons per month
            </p>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <h1 className="text-center text-xs text-gray-500 ">Copyright © 2025 Darul Quran Academy |</h1>
      </div>


      
    </div>
  );
}
