import Image from "next/image";
import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";

export default function Blog() {
  return (
    <div className="w-full px-4 py-8">
      <div className="text-center my-10">
        <div className="flex justify-center items-center gap-2 text-cyan-700">
          <FaBookOpen className="text-3xl" />
          <h1 className="text-3xl font-bold font-serif">
            Our Latest Islamic Blog Posts
          </h1>
        </div>
        <div className="bg-yellow-400 w-24 h-1 mt-2 mx-auto"></div>
      </div>

      {/* Cards Row 1 */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <div className="w-full sm:w-[48%] lg:w-[30%] border-2 shadow-md hover:shadow-cyan-500 rounded-md">
          <Image
            src="/blog1.jpg"
            alt="blog image"
            width={300}
            height={200}
            className="mx-auto mt-4 h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">
              The Importance of Sabr in Islam
            </h2>
            <p className="text-sm text-gray-700 text-justify">
              Sabr, or patience, is a virtue in Islam that represents
              perseverance and trust in Allah’s wisdom...
              <Link
                href="/blog_details"
                className="text-cyan-600 hover:underline"
              >
                Read more
              </Link>
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[48%] lg:w-[30%] border-2 shadow-md hover:shadow-cyan-500 rounded-md">
          <Image
            src="/blog2.jpg"
            alt="Quran Image"
            width={300}
            height={200}
            className="mx-auto mt-4 h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">
              Understanding Tawakkul: Trust in Allah
            </h2>
            <p className="text-sm text-gray-700 text-justify">
              Tawakkul is trusting Allah while doing your part. This brings
              peace and reliance on divine help...
              <Link
                href="/blog_details"
                className="text-cyan-600 hover:underline"
              >
                Read more
              </Link>
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[48%] lg:w-[30%] border-2 shadow-md hover:shadow-cyan-500 rounded-md">
          <Image
            src="/blog3.jpg"
            alt="Quran Image"
            width={300}
            height={200}
            className="mx-auto mt-4 h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">Why Does Allah Test Us?</h2>
            <p className="text-sm text-gray-700 text-justify">
              Tests from Allah are a sign of love. The Quran teaches us how
              trials lead to growth and closeness to Him...
              <Link
                href="/blog_details"
                className="text-cyan-600 hover:underline"
              >
                Read more
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Cards Row 2 */}
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {/* Card 4 */}
        <div className="w-full sm:w-[48%] lg:w-[30%] border-2 shadow-md hover:shadow-cyan-500 rounded-md">
          <Image
            src="/blog4.jpg"
            alt="Quran Image"
            width={300}
            height={200}
            className="mx-auto mt-4 h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">Tafsir of Surah Yaseen</h2>
            <p className="text-sm text-gray-700 text-justify">
              Surah Yaseen is the heart of the Quran. Unlock its deeper meanings
              and spiritual lessons...
              <Link
                href="/blog_details"
                className="text-cyan-600 hover:underline"
              >
                Read more
              </Link>
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="w-full sm:w-[48%] lg:w-[30%] border-2 shadow-md hover:shadow-cyan-500 rounded-md">
          <Image
            src="/blog5.jpg"
            alt="Quran Image"
            width={300}
            height={200}
            className="mx-auto mt-4 h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">
              10 Spiritual Benefits of Surah Yaseen
            </h2>
            <p className="text-sm text-gray-700 text-justify">
              Discover why reciting Surah Yaseen daily brings forgiveness,
              blessings, and inner peace...
              <Link
                href="/blog_details"
                className="text-cyan-600 hover:underline"
              >
                Read more
              </Link>
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="w-full sm:w-[48%] lg:w-[30%] border-2 shadow-md hover:shadow-cyan-500 rounded-md">
          <Image
            src="/blog1.jpg"
            alt="Quran Image"
            width={300}
            height={200}
            className="mx-auto mt-4 h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">Islamic Architecture</h2>
            <p className="text-sm text-gray-700 text-justify">
              Islamic architecture is a timeless symbol of beauty, unity, and
              divine geometry. Explore its essence...
              <Link
                href="/blog_details"
                className="text-cyan-600 hover:underline"
              >
                Read more
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Cards Row 3 */}
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {/* Card 7 */}
        <div className="w-full sm:w-[48%] lg:w-[30%] border-2 shadow-md hover:shadow-cyan-500 rounded-md">
          <Image
            src="/blog7.jpg"
            alt="Quran Image"
            width={300}
            height={200}
            className="mx-auto mt-4 h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">
              Why Surah Yaseen is Special
            </h2>
            <p className="text-sm text-gray-700 text-justify">
              Learn the special virtues of Surah Yaseen and why it`&apos;`s
              called the heart of the Quran...
              <Link
                href="/blog_details"
                className="text-cyan-600 hover:underline"
              >
                Read more
              </Link>
            </p>
          </div>
        </div>

        {/* Card 8 */}
        <div className="w-full sm:w-[48%] lg:w-[30%] border-2 shadow-md hover:shadow-cyan-500 rounded-md">
          <Image
            src="/blog8.jpg"
            alt="Quran Image"
            width={300}
            height={200}
            className="mx-auto mt-4 h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">Five Daily Prayers</h2>
            <p className="text-sm text-gray-700 text-justify">
              Salah connects Muslims to Allah five times a day. Discover its
              benefits and deep spiritual impact...
              <Link
                href="/blog_details"
                className="text-cyan-600 hover:underline"
              >
                Read more
              </Link>
            </p>
          </div>
        </div>

        {/* Card 9 */}
        <div className="w-full sm:w-[48%] lg:w-[30%] border-2 shadow-md hover:shadow-cyan-500 rounded-md">
          <Image
            src="/blog9.jpg"
            alt="Quran Image"
            width={300}
            height={200}
            className="mx-auto mt-4 h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">
              Umrah: The Lesser Pilgrimage
            </h2>
            <p className="text-sm text-gray-700 text-justify">
              Umrah is a beautiful journey of devotion. Learn about its rituals
              and the spiritual benefits it brings...
              <Link
                href="/blog_details"
                className="text-cyan-600 hover:underline"
              >
                Read more
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-10">
        <h1 className="text-center text-xs text-gray-500">
          Copyright © 2025 Darul Ilm Online Quran Academy
        </h1>
      </div>
    </div>
  );
}
