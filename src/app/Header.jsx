import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 bg-blue-800 w-full flex space-x-5 items-center ">
      <Link className="p-2 bg-white text-black rounded-lg" href={`/`}>
        Home
      </Link>
      <Link className="p-2 bg-white text-black rounded-lg" href={`todos`}>
        Todos
      </Link>
      <Link className="p-2 bg-white text-black rounded-lg" href={`search`}>
        Search
      </Link>
    </div>
  );
};

export default Header;
