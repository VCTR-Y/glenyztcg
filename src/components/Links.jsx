import instagram_logo from "/instagram.png";
import tiktok_logo from "/tiktok.png";  
import whatnot_logo from "/whatnot.jpg";

function Links() {
  return (
    <div id="links" className="relative w-448 h-auto bg-opacity-50 backdrop-blur-xs rounded-lg shadow-2xl m-4 p-4 scroll-mt-42 border-2">
      <h1 class="text-4xl font-bold text-center">Links</h1>
      <div className="flex justify-center items-center space-x-4 mt-4">
        {/* Instagram Link */}
        <a
          href="https://www.instagram.com/glenyztcg/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-lg p-4 shadow-2xl border-1 hover:bg-orange-100 transition duration-300"
        >
          <img
            src={instagram_logo}
            alt="Instagram"
            className="w-8 h-8 mr-3"
          />
          <span className="text-xl font-semibold">Instagram</span>
        </a>

        {/* TikTok Link */}
        <a
          href="https://www.tiktok.com/@glenyztcg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-lg p-4 shadow-2xl border-1 hover:bg-orange-100 transition duration-300"
        >
          <img
            src={tiktok_logo}
            alt="TikTok"
            className="w-8 h-8 mr-3"
          />
          <span className="text-xl font-semibold">TikTok</span>
        </a>

        {/* Whatnot Link */}
        <a
          href="https://www.whatnot.com/user/glenyz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-lg p-4 shadow-2xl border-1 hover:bg-orange-100 transition duration-300"
        >
          <img
            src={whatnot_logo}
            alt="Whatnot"
            className="w-8 h-8 mr-3"
          />
          <span className="text-xl font-semibold">Whatnot</span>
        </a>
      </div>

    </div>
  )
}

export default Links;