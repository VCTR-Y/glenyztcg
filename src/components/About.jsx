import glenyz_logo from "/glenyztcg.jpg";
import book_logo from "/info_book.png";


function About() {
  return (
      <div id="about" className="flex flex-col justify-around items-center m-4 p-6 w-full max-w-2xl lg:max-w-4xl xl:max-w-6xl bg-opacity-50 backdrop-blur-xs shadow-[16px_16px_16px_rgba(0,0,0,0.6)] rounded-lg scroll-mt-42 border-2">
        <div className="flex justify-center items-center space-x-4">
          {/* Image Placeholder */}
          <img src={glenyz_logo} alt="Glenyz" className="w-32 h-32 rounded-full shadow-[8px_8px_8px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-in-out hover:scale-106" />
          
          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">About</h2>
        </div>

          {/* Description Text */}
          <div className="text-center">
          <p className="text-xl mt-4">Small pokemon card business based in Burnaby, Canada. Buying/Selling anything Pokémon</p>
          <p className="text-xl mt-4"> To buy anything from this site, please contact me through my Instagram or Facebook account.</p>
          <p className="text-xl mt-4"> Below is my collector's guide for new collectors. Currently the guide contains simple but important tips that people should know when first starting their collection.</p>
          </div>

          {/* Guide */}
            <a
              href="https://docs.google.com/document/d/1YBdYiGFLRX4q5fJjwIal8wum2KDmoJ2jRrJXYhGALrI/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg m-2 w-36 h-18 shadow-2xl border-1 hover:bg-amber-600 transition duration-300"
            >
              <img src={book_logo} alt="Guide" className="w-15 h-15 mr-3" />
              <span className="text-xl md:text-lg lg:text-xl font-semibold">Guide</span>
            </a>
      </div>
  );
}

export default About;