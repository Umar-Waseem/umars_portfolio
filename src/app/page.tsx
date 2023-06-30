import React from "react";
import SocialLink from "../components/social_media_icon";

import Image from "next/image";


const App = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center lg:text-left text-center min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col lg:mr-10">

        <div className="text-2xl">Muhammad Umar Waseem</div>
        <div className="mb-4 text-gray-500">Self Taught Software Dev</div>
        <div className="flex lg:items-start items-center lg:justify-start justify-center mb-4 text-gray-500">
          Checkout my projects at: &nbsp;
          <SocialLink
            href="https://github.com/Umar-Waseem"
            src="/images/github.svg"
          />
        </div>
        <div className="text-2xl font-bold mb-8">
          This website is under construction
        </div>
        <div className="flex flex-row mb-8 lg:justify-start justify-center lg:items-start items-center">
          <SocialLink
            href="https://www.instagram.com/the_umar_waseem/"
            src="/images/insta.svg"
          />
          <SocialLink
            href="https://medium.com/@umar.waseem"
            src="/images/medium.svg"
          />
          <SocialLink
            href="mailto:umar.waseeme@gmail.com"
            src="/images/gmail.svg"
          />

          <SocialLink
            href="https://youtube.com/@umar-waseem"
            src="/images/youtube.svg"
          />
          <SocialLink
            href="https://twitter.com/umar_terminator"
            src="/images/twitter.svg"
          />
        </div>
      </div>
      <div className="w-200 h-200 mb-8">
        <Image
          src="https://www.animatedimages.org/data/media/695/animated-under-construction-image-0035.gif"
          alt=""
          width="200"
          height="200"
        />
      </div>
    </div>
  );
};

export default App;
