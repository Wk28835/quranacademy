import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full mx-0 p-1">

      <div className="flex flex-col lg:flex-row justify-center gap-8 px-4 mt-10">
        {/* Blog Content */}
        <div className="bg-white shadow-sm rounded-md p-6 w-full lg:w-[60%] shadow-cyan-400 hover:shadow-lg hover:shadow-cyan-500">
          <h1 className="mb-4 font-bold text-2xl">The Importance of Sabr in Islam: A Journey of Patience and Faith</h1>
          <h2 className="mb-4 font-semibold text-xl">The Concept of Sabr in Islam</h2>
          <p className="text-justify mb-6 text-gray-700">
            Sabr, or patience, is a virtue in Islam that represents perseverance, self-control, and steadfastness in the face of challenges. It is a quality every believer is encouraged to embody because it reflects trust in Allah’s wisdom and timing. The Quran emphasizes the importance of Sabr repeatedly, showing its role in achieving success both in this world and the Hereafter.
          </p>

          <h3 className="mt-2 text-xl text-center font-serif">“Indeed, Allah is with the patient.” (Quran 2:153)</h3>
          <p className="text-justify mt-4 text-gray-700">
            Sabr is not only about enduring hardships; it also includes patience in worship, avoiding sins, and waiting for Allah’s plans to unfold.
          </p>

          <h2 className="mt-6 mb-2 font-semibold text-xl">A Short Story of Patience and Faith</h2>
          <p className="text-justify text-gray-700">
            Fatima was a young woman who always aspired to be a doctor. She had to juggle family duties with academic studies, but she put in hard work. But then, her father became ill and could not care for himself; thus, Fatima suspended her education to care for him. The years rolled by, and her dream slipped further away.
          </p>
          <p className="text-justify mt-3 text-gray-700">
            Despite the setbacks, Fatima held onto her faith. She prayed fervently, performed her duties with love, and trusted that Allah had a greater plan for her. After her father’s recovery, she resumed her studies with renewed determination. Fatima not only graduated with honors but also realized how her patience had strengthened her character and faith.
          </p>

          <h2 className="mt-6 mb-2 font-semibold text-xl">Rewards of Sabr</h2>
          <p className="text-justify text-gray-700">
            The Quran and Hadith promise great rewards for those who practice patience.
          </p>
          <p className="text-justify mt-2 text-gray-700">
            “And We will surely give those who were patient their reward according to the best of what they used to do.” (Quran 16:96)
          </p>
          <p className="text-justify mt-2 text-gray-700">
            The Prophet Muhammad (peace be upon him) also said:
          </p>
          <p className="text-justify mt-2 text-gray-700">
            “No fatigue, nor disease, nor sorrow, nor sadness, nor hurt, nor distress befalls a Muslim, even if it were the prick he receives from a thorn, but that Allah expiates some of his sins for that.” (Bukhari and Muslim)
          </p>

          <Image
            className="w-full h-auto my-6 rounded-md object-cover"
            src="/blog4.jpg"
            alt="Quran Image"
            width={800}
            height={400}
          />

          <h2 className="mt-6 mb-2 font-semibold text-xl">Conclusion: The Power of Sabr</h2>
          <p className="text-justify mt-2 text-gray-700">
            Sabr is a deep expression of faith and reliance on Allah. It teaches believers to navigate life’s trials with grace, trust, and hope. The story of Fatima, like countless others, reminds us that patience leads to growth, rewards, and a deeper connection with Allah.
          </p>
        </div>

        {/* Comment Form */}
        <div className="bg-white shadow-sm shadow-cyan-400 hover:shadow-lg hover:shadow-cyan-500 rounded-md p-6 w-full lg:w-[35%]">
          <h2 className="mb-4 font-bold text-2xl">Leave a Comment</h2>
          <p className="text-justify mb-6 text-gray-700">
            Your email address will not be published. Required fields are marked *
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md p-3 placeholder:text-gray-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md p-3 placeholder:text-gray-400"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md p-3 placeholder:text-gray-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-md font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10">
        <p className="text-center text-xs text-gray-500">Copyright © 2025 Darul Ilm Online Quran Academy |</p>
      </div>
    </div>
  );
}
