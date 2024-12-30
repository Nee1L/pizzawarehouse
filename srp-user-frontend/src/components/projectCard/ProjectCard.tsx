import React, { useEffect, useRef, useState } from "react";
import MoreOptionsIcon from "../../img/icon/MoreOptionsIcon";
import { Project } from "../../types/project";
import { daysAgo } from "../vacancyCard/VacancyCard";

interface ProjectCardProps extends Project {
  category: string;
}

const ProjectCard = ({
  title,
  views,
  userId,
  createDate,
  projectAttachments: [{ img }],
  category,
}: ProjectCardProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const formattedDate = daysAgo(createDate);
  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsMenuOpen((prevState) => !prevState);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" group flex flex-col cursor-pointer rounded relative w-[318px]">
      <div className=" overflow-hidden rounded mb-3 ">
        <img
          className="w-[318px] h-[244px] group-hover:scale-110 ease-in duration-200 "
          src={img[0]}
          alt="image"
        />
      </div>
      {category === "new" ? (
        <p className=" absolute top-1.5 right-1.5 w-14 px-2.5 py-2 bg-[#01A053] text-base text-white uppercase rounded-sm text-center">
          {category}
        </p>
      ) : (
        <p className=" absolute top-1.5 right-1.5 w-14 px-2.5 py-2 bg-[#7321FF] text-base text-white uppercase rounded-sm text-center">
          {category}
        </p>
      )}

      <div className="flex justify-between items-center relative">
        <h3 className="font-bold text-base text-black">{title}</h3>
        <button
          ref={buttonRef}
          className="bg-transparent border-none cursor-pointer flex justify-center items-center w-6 h-6"
          onClick={toggleMenu}
        >
          <MoreOptionsIcon />
        </button>
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-6 right-0 p-4 max-w-[184px] w-full bg-white rounded shadow-md z-10"
          >
            <ul>
              <li>Save</li>
              <li>Share</li>
              <li>Do not recommend work from this category</li>
              <li>Block the author</li>
              <li>Report</li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center gap-1.5 text-xs">
        <span className=" text-sm text-[#676767]">{userId}</span>
        <span className="w-0.5 h-0.5 bg-[#676767] rounded-full "></span>
        <span className="text-sm text-[#676767]">{formattedDate}</span>
        <span className="w-0.5 h-0.5 bg-[#676767] rounded-full "></span>
        <span className=" text-sm text-[#676767]">{views} views</span>
      </div>
    </div>
  );
};

export default ProjectCard;
