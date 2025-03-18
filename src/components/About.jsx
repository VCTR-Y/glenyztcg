import glenyz_logo from "/glenyztcg.jpg";

function About() {
  return (
      <div id="about" className="flex flex-col justify-around items-center m-4 p-6 h-auto w-auto max-w-256 bg-opacity-50 backdrop-blur-xs shadow-2xl rounded-lg scroll-mt-42 border-2">
        <div className="flex justify-center items-center space-x-4">
          {/* Image Placeholder */}
          <img src={glenyz_logo} alt="Glenyz" className="w-32 h-32 rounded-full shadow-[8px_8px_8px_rgba(0,0,0,0.3)]" />
          
          {/* Title */}
          <h2 className="text-4xl font-bold">About</h2>
    </div>

      {/* Description Text */}
      <div className="text-center">
        <p className="text-lg mt-4">DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION</p>
      </div>
  </div>


  );
}

export default About;