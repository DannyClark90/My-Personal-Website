import React from "react";
import "../css/Bio.css";

export default function Bio() {
  return (
    <>
      <article
        id="bioArticle"
        className="absolute w-full flex
      xs:py-4 xs:flex xs:flex-col xs:justify-center xs:items-center xs:px-10
      sm:flex-row sm:justify-start sm:items-start"
      >
        <img
          src="src/assets/profile-pic.jpg"
          alt=""
          className="rounded-full 
            xs:h-28 xs:w-28 xs:mb-5
            sm:w-40 sm:h-40 sm:mt-3
            md:w-60 md:h-60"
        />

        <div className="flex flex-col items-start xs:items-center lg:mt-10">
          <h3
            id="title"
            className="
        xs:text-xs
        sm:text-xs
        md:text-1xs"
          >
            Bio
          </h3>
          <p className="text-7xs md:text-6xs">
            Coming from an extensive engineering background; I have a creative,
            curious, technical, analytical, and methodical mindset. I am
            open-minded and attentive to detail, with a strong problem-solving
            ability. These personality traits, along with the notion that the
            interaction between programs, software, and hardware can solve
            real-world problems and contribute to making people’s lives easier,
            more exciting, and productive are what inspire me to pursue a career
            in software development.
          </p>
        </div>
      </article>
    </>
  );
}
