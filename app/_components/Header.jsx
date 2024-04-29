import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="flex justify-center items-center gap-2 mx-auto mt-8 border-b border-gray-300 shadow-sm pb-4">
      <Image
        src={"/logo.png"}
        alt="Website Logo"
        width={300}
        height={300}
        className="mb-1"
      />
    </div>
  );
}

export default Header;
