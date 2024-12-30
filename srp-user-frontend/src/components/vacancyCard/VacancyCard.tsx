import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import React from "react";
import "./vacancyCard.css";

interface VacancyCardProps {
  vacancy: {
    company: string;
    jobOverview: string;
    jobPostedDate: string;
    image: string;
    jobType: string;
    jobLocation: string;
  };
  onVacancyClick: any;
}

const daysAgo = (dateString: string) => {
  const date: any = new Date(dateString);
  const now: any = new Date();
  const differenceInMillis = now - date;
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const differenceInDays = Math.floor(differenceInMillis / millisecondsPerDay);

  return `${differenceInDays} days ago`;
};

const VacancyCard: React.FC<VacancyCardProps> = ({
  vacancy,
  onVacancyClick,
}) => {
  const { company, jobOverview, jobPostedDate, image, jobType, jobLocation } =
    vacancy;

  const formattedDate = daysAgo(jobPostedDate);

  return (
    <div className="vacancy-card" onClick={() => onVacancyClick?.(vacancy)}>
      <div className="vacancy-card__header">
        <div className="vacancy-card__header-left">
          <img src={image} alt="company logo" className="vacancy-card__logo" />
          <div className="vacancy-card__company-info">
            <p className="vacancy-card__company">{company}</p>
            <div className=" flex items-center gap-1.5">
              <p className="vacancy-card__department">{jobLocation} </p>
              <span className="w-0.5 h-0.5 bg-[#676767] rounded-full "></span>
              <p className="vacancy-card__department">{jobType}</p>
              <span className="w-0.5 h-0.5 bg-[#676767] rounded-full "></span>
              <p className="vacancy-card__department">{formattedDate}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="vacancy-card__description">
        {jobOverview.length > 300 && jobOverview.slice(0, 300) + "..."}
      </p>
      <div className="button-box">
        <button className="vacancy-card-button vacancy-card-button--see">
          See more
        </button>
        <button className="vacancy-card-button">
          <BookmarkBorderIcon />
        </button>
        <button className="vacancy-card-button">
          <ShareIcon />
        </button>
      </div>
    </div>
  );
};

export { VacancyCard, daysAgo };
