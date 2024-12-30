import React from "react";

interface BannerProps {
  title: string;
  text: string;
  img: string;
}

const Banner: React.FC<BannerProps> = ({ title, text, img }) => (
  <div
    className="relative w-full h-[370px] bg-cover bg-center sm:h-[250px] md:h-[300px] lg:h-[370px]"
    style={{
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="absolute inset-0 flex items-start justify-start p-6 sm:p-4">
      <div className="text-left text-black bg-white/70 p-4 rounded-md mt-[10px]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black mb-2">
          {title}
        </h1>
        <p className="text-sm md:text-base lg:text-lg font-light text-black">
          {text.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  </div>
);

export default Banner;
