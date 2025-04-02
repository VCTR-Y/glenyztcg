import instagram_logo from "/instagram.png";
import tiktok_logo from "/tiktok.png";  
import whatnot_logo from "/whatnot.jpg";
import messenger_logo from "/messenger.png";

function MiniLinks() {
  return (
    <div id="links" className="relative w-448 h-auto bg-opacity-50 backdrop-blur-xs rounded-lg shadow-[16px_16px_16px_rgba(0,0,0,0.6)] m-4 p-4 scroll-mt-42">
      <div className="flex flex-col sm:flex-row justify-center items-center space-x-4 mt-4">
        
        {/* Instagram Link */}
        <a
          href="https://www.instagram.com/glenyztcg/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-lg m-2 w-42 h-22 shadow-2xl border-1 hover:bg-amber-600 transition duration-300"
        >
          <img src={instagram_logo} alt="Instagram" className="w-8 h-8 mr-3" />
          <span className="text-xl md:text-lg lg:text-xl font-semibold">Instagram</span>
        </a>

        {/* Facebook Messenger */}
        <a
          href="https://m.me/glen.zhu.921"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-lg m-2 w-42 h-22 shadow-2xl border-1 hover:bg-amber-600 transition duration-300"
        >
          <img src={messenger_logo} alt="Messenger" className="w-8 h-8 mr-3" />
          <span className="text-xl md:text-lg lg:text-xl font-semibold">Messenger</span>
        </a>

        {/* Whatnot Link */}
        <a
          href="https://www.whatnot.com/user/glenyz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-lg m-2 w-42 h-22 shadow-2xl border-1 hover:bg-amber-600 transition duration-300"
        >
          <img src={whatnot_logo} alt="Whatnot" className="w-8 h-8 mr-3" />
          <span className="text-xl md:text-lg lg:text-xl font-semibold">Whatnot</span>
        </a>

        {/* TikTok Link */}
        <a
          href="https://www.tiktok.com/@glenyztcg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-lg m-2 w-42 h-22 shadow-2xl border-1 hover:bg-amber-600 transition duration-300"
        >
          <img src={tiktok_logo} alt="TikTok" className="w-8 h-8 mr-3" />
          <span className="text-xl md:text-lg lg:text-xl font-semibold">TikTok</span>
        </a>
      </div>
    </div>
  );
}

export default MiniLinks;
