import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { ReactNode, useState } from "react";

interface FilterSectionProps {
  title: string;
  children: ReactNode;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className=" flex justify-between items-center cursor-pointer mb-[18px]"
        onClick={toggleSection}
      >
        <h3 className=" font-bold text-base">{title}</h3>
        <ArrowForwardIosIcon
          style={{ width: 16, height: 16 }}
          className={`transition-transform duration-[0.3s] ${isOpen ? " rotate-90" : ""}`}
        />
      </div>
      {isOpen && <div className=" flex flex-col gap-3">{children}</div>}
    </div>
  );
};

export default FilterSection;
