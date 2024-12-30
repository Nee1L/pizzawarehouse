import React, { useEffect, useRef, useState } from "react";

const Sort = () => {
  const sortRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sortRef.current &&
        !sortRef.current.contains(event.target as Node) &&
        (event.target as HTMLElement).id !== "sortButton"
      ) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <div className=" relative">
      <button
        className="flex items-center justify-center border-solid border border-[#ddd] rounded-[51px] py-4 px-7 w-[120px] h-11 bg-[#efefef] text-base text-black cursor-pointer hover:border-black"
        onClick={() => setIsVisible(!isVisible)}
        id="sortButton"
      >
        Sort
      </button>
      {isVisible && (
        <div
          ref={sortRef}
          className=" absolute top-11 right-0 z-10 w-[248px] border-solid border border-[#e0e0e0] p-4 shadow-[0_4px_9px_0_rgba(0,0,0,0.25)] rounded bg-[#f8f8f8]"
        ></div>
      )}
    </div>
  );
};

export default Sort;
