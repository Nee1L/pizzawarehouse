import React from 'react';
import imgBack  from "../../img/newBuner.jpg";

const Banner: React.FC = () => {
  return (
    <div className="relative mt-9 min-h-[370px] bg-cover bg-center style={{ backgroundImage: `url('../../img/newBuner.jpg')` }}">
      <img src={imgBack} alt=".." className="absolute w-full h-full" />
      <div className="relative z-2 flex flex-col justify-start gap-4 h-full w-full pl-11 pt-11">
        <h1 className="text-black text-4xl font-light leading-12">Education</h1>
        <p className="text-black text-xl font-light leading-7">
          Learn, grow, achieve!<br />
          Your dreams start with education, invest in your future.
        </p>
      </div>
    </div>
  );
};

export default Banner;




