import React from "react";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container flex mx-[5%] py-5">
        <img
          src="/images/dphi.svg"
          alt="dp"
          className="w-20 h-auto md:w-26 lg:w-32 xl:w-38"
        />
      </div>
    </header>
  );
};

export default Header;
