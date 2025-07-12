
export default function Reviews() {
  return (
    <div className="w-full mx-0 p-1">

     <div className="relative rounded-md w-full h-[320px] bg-cover bg-center" style={{ backgroundImage: "url('/books.jpg')" }}>
  {/* Cyan Overlay */}
  <div className="absolute inset-0   bg-opacity-100 shadow-lg flex flex-col lg:flex-row justify-between items-center px-10 py-12">

    {/* Welcome Text */}
    <div className="text-white max-w-xl">
      <h2 className="font-semibold text-3xl font-serif text-yellow-300 pt-4 lg:text-left px-4 lg:px-24">
        STUDENT REVIEWS
      </h2>
     
    </div>


  </div>
</div>


      <div className="pt-12">
        <h1 className="px-2 text-3xl text-center text-cyan-600 font-bold">Dar ul Quran Academy Reviews</h1>
      </div>
{/*Revies section */}
    <div className="main mt-6 flex flex-wrap justify-center gap-6 px-4">
        <div className="px-4 text-black shadow-md hover:shadow-lg hover:shadow-cyan-500 shadow-cyan-400 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h1 className="text-center pt-4 font-semibold">Best for Quran Memorization</h1>
            <div className="text-2xl text-center">⭐️⭐️⭐️⭐️⭐️</div>
            <p className="text-center text-ellipsis p-4">The <b>Quran Memorization Course </b>is well-structured and the
            teachers are very supportive.I`&apos;`m making great progress, Alhamdulillah!</p>
            <p className="text-center font-sans text-xs">Ayesha</p>
            <p className="text-center font-sans text-xs">04 Days Ago!</p>
          </div>

        <div className="px-4 text-black shadow-md hover:shadow-lg hover:shadow-cyan-500 shadow-cyan-400 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h1 className="text-center pt-4 font-semibold">Amazing Quran Reading Classes</h1>
            <div className="text-2xl text-center">⭐️⭐️⭐️⭐️⭐️</div>
            <p className="text-center text-ellipsis p-4">I improved my recitation with <b>Quran Reading Course </b>the 
            teachers correct mistakes with patience and focus on proper Tajwee. Excellent experience!</p>
             <p className="text-center font-sans text-xs">Ahmed Ali</p>
            <p className="text-center font-sans text-xs">01 Days Ago!</p>
        </div>

        <div className="px-4 text-black shadow-md hover:shadow-lg hover:shadow-cyan-500 shadow-cyan-400 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h1 className="text-center pt-4  font-semibold">Quran Learining Experience!</h1>
            <div className="text-2xl text-center">⭐️⭐️⭐️⭐️⭐️</div>
            <p className="text-center text-ellipsis p-4">Darul Ilm Online Quran Academy has excellent coursese.The <b>Noorani Qaida Course </b>helped me learn Arabic
         easily. Highly recommended!</p>
            <p className="text-center font-sans text-xs">Talha Nazim</p>
            <p className="text-center font-sans text-xs">09 Days Ago!</p>
        </div>

      </div>  

        <div className="pt-10">
        <h1 className="text-center text-xs text-gray-500 ">Copyright © 2025 Darul Ilm Online Quran Academy |</h1>
      </div>



      
    </div>
  );
}
