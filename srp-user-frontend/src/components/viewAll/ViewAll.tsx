import React from "react";

function ViewAll() {
  return (
    <div className=" relative flex justify-center">
      <div className="w-full h-px bg-[#EFEFEF] absolute top-1/2"></div>
      <button className=" h-11 w-28 rounded-[51px] bg-[#EFEFEF] border-solid border border-[#DDDDDD] z-10 hover:border-[#000000]">
        View all
      </button>
    </div>
  );
}

export default ViewAll;
