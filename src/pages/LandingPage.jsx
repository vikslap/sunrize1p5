import blogBanner from '../assets/blog-banner.webp'
import { courseStructure } from "../data/courseStructure";
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="w-full">
      {/* ✅ FULL-WIDTH BANNER */}
      <div
        className="w-screen h-[50vh] relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${blogBanner})` }}
      >
          {/* Dark overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-4xl">
            Power and Pride: The Origins of Pride Month
          </h1>
        </div>
      </div>


      {/* ✅ COURSE INTRO TEXT */}
      <div className="w-[90%] max-w-5xl mx-auto py-10 space-y-5 text-base sm:text-lg text-gray-800">
          <div className="text-red-500 font-bold">Tailwind test text</div>
        <p>
          June 28, 1969, was a pivotal day in history. In the early hours of the morning, police raided the Stonewall Inn, a popular Greenwich Village bar catering to LGBTQ+ customers. Decades of escalating, state-sanctioned harassment led officers to expect everyone to leave quietly as usual.
        </p>
        <p>
          But if that had happened, it wouldn’t have made history.
        </p>
        <p>
          Decades of oppression of the LGBTQ+ community, cultural shifts in the 1960s, and good troublemaking led to that fateful night at Stonewall. You’ll learn how the events on June 28 became a catalyst for change and a symbol for LGBTQ+ rights that evolved into today’s Pride festivals and marches. This course explores the key events and personalities in the United States that ultimately shaped a global movement.
        </p>
        <p>
          Click on the first lesson below—or the <i>“Start Course”</i> button above—when you’re ready to begin.
        </p>
      </div>

      {/* ✅ MODULE & LESSON INDEX */}
      <div className="w-[90%] max-w-5xl mx-auto">
        {courseStructure.map((module) => (
          <div key={module.moduleId} className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">{module.title}</h2>
            <ul className="space-y-2">
              {module.lessons.map((lesson) => (
                <li key={lesson.id}>
                  <Link
                    to={lesson.path}
                    className="block px-4 py-3 border border-gray-300 rounded bg-white shadow-sm hover:bg-blue-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 text-sm sm:text-base"
                  >
                    {lesson.title}
                  </Link>


                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
