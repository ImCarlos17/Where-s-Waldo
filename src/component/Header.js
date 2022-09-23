import React from "react";
import NavBar from "./NavBar";
import Timer from "./Timer";

const Header = () => {
  return (
    <div className="flex items-center justify-evenly max-w-full bg-black opacity-90 px-3 py-3 justify-center sticky top-0">
      <NavBar />
      //<Timer />
    </div>
  );
};

export default Header;
