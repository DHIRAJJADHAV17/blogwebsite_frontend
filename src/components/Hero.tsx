import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <Image
        className="w-full max-h-[500px] rounded"
        src="/hero1.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
};

export default Hero;
