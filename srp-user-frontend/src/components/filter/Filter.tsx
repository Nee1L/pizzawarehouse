import DoneIcon from "@mui/icons-material/Done";
import Checkbox from "@mui/material/Checkbox";
import React, { useEffect, useRef, useState } from "react";
import FilterSection from "../filterSection/FilterSection";

interface FilterSectionData {
  title: string;
  items: string[];
}

interface FilterProps {
  data: FilterSectionData[];
}

const Filter: React.FC<FilterProps> = ({ data = [] }) => {
  const filterRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheck = (item: string) => {
    setCheckedItems((prevItems) =>
      prevItems.includes(item)
        ? prevItems.filter((i) => i !== item)
        : [...prevItems, item]
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node) &&
        (event.target as HTMLElement).id !== "filterRefButton" &&
        (event.target as HTMLElement).id !== "filterRefCount"
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
    <div className="relative">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className=" flex items-center justify-center border-solid border-[1px] border-[#ddd] rounded-[51px] py-4 px-7 w-[120px] h-11 bg-[#efefef] text-base text-black cursor-pointer hover:border-black"
        id="filterRefButton"
      >
        Filter
        {checkedItems.length > 0 && (
          <span
            className=" bg-[#40a6ff] min-w-6 h-6 flex items-center justify-center ml-2 rounded-xl text-white"
            id="filterRefCount"
          >
            {checkedItems.length}
          </span>
        )}
      </button>

      {isVisible && (
        <div
          ref={filterRef}
          className=" absolute top-11 w-64 border-solid border-[1px] border-[#e0e0e0] p-6 rounded-[5px] bg-white shadow-[0_4px_9px_0_rgba(0,0,0,0.25)] z-10 "
        >
          <div className=" flex items-center justify-between mb-6">
            <p className=" font-bold text-base text-black">Filter</p>
            <button
              onClick={() => setCheckedItems([])}
              className=" text-xs bg-transparent border-none cursor-pointer"
            >
              Clear Search
            </button>
          </div>
          <div className=" flex flex-col gap-6">
            {data.map((section, index) => (
              <FilterSection key={index} title={section.title}>
                {section.items.map((item, idx) => (
                  <label key={idx} className="h-5 flex gap-2">
                    <Checkbox
                      checked={checkedItems.includes(item)}
                      onChange={() => handleCheck(item)}
                      checkedIcon={
                        <DoneIcon style={{ width: 17, height: 15 }} />
                      }
                      sx={{
                        color: "transparent",
                        border: "1px solid #40A6FF",
                        borderRadius: 1,
                        width: 20,
                        height: 20,
                        "&.Mui-checked": {
                          color: "#40A6FF",
                        },
                      }}
                    />
                    {item}
                  </label>
                ))}
              </FilterSection>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
