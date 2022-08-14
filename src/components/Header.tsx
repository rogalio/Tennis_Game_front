import React from "react";

const Header = () => {
  return (
    <div className="bg-[#213177]">
      <div className="flex items-center justify-between h-16 max-w-5xl px-4 py-4 mx-auto">
        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-[#f6a54b] to-[#2bd3cb]">
          Tennis App <span className="text-xl">🎾</span>
        </p>

        <button className="text-md  h-full text-white bg-gradient-to-br from-[#f6a54b] to-[#2bd3cb] rounded-full px-4 hover:opacity-80 hover:shadow-lg transition duration-200  ease-out">
          Launch App 🚀
        </button>
      </div>
    </div>
  );
};

export default Header;
