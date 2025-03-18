import glenyz_logo from "/glenyztcg.jpg";

function About() {
  return (
      <div id="about" className="flex flex-col justify-around items-center m-4 p-6 h-auto w-auto max-w-256 bg-opacity-50 backdrop-blur-xs shadow-[16px_16px_16px_rgba(0,0,0,0.6)] rounded-lg scroll-mt-42 border-2">
        <div className="flex justify-center items-center space-x-4">
          {/* Image Placeholder */}
          <img src={glenyz_logo} alt="Glenyz" className="w-32 h-32 rounded-full shadow-[8px_8px_8px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-in-out hover:scale-106" />
          
          {/* Title */}
          <h2 className="text-4xl font-bold">About</h2>
        </div>

          {/* Description Text */}
          <div className="text-center">
            <p className="text-xl mt-4">Small pokemon card business based in Burnaby, Canada. Buying/Selling anything Pokémon</p>
          </div>
      </div>


  );
}

export default About;