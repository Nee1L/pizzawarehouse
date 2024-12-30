// Import React
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import Banner from "components/banner/Banner";
import SearchBar from "components/searchBar/SearchBar";
import React, { FC } from "react";
import BannerVacancy from "../../img/banner-vacancy.jpg";
import BrightPixel from "../../img/BrightPixel.jpg";
import Point from "../../img/icon/Point";
import Pointblack from "../../img/icon/Point_black";
import Share from "../../img/icon/Share";
import NovaCraft from "../../img/NovaCraft.jpg";
import Skyline from "../../img/Skyline.jpg";
import Visionary from "../../img/Visionary.jpg";
import { VacancyCard } from "../../types/vacancies";
// Css
import "./vacanciesPage.css";

const truncateText = (text: string, maxLength: number) => {
  const lines = text.split("\n");
  let truncatedText = "";

  for (const line of lines) {
    if (truncatedText.length + line.length <= maxLength) {
      truncatedText += line + "\n";
    } else {
      const remainingLength = maxLength - truncatedText.length;
      if (remainingLength > 0) {
        truncatedText += line.slice(0, remainingLength) + "...\n";
      }
      break;
    }
  }

  return truncatedText.trim();
};

const VacanciesPage: FC = () => {
  const vacancies: VacancyCard[] = [
    {
      id: "1",
      title: "Graphic Designer",
      imageUrl: BrightPixel,
      postedDate: "One hour ago",
      location: "Location",
      company: "BrightPixel Studios",
      jobType: "Full-time",
      description:
        "We are seeking a creative graphic designer who can bring our ideas to life with vibrant and unique\n visual solutions. You will work on a variety of projects, including branding, packaging, and digital\n media, ensuring that each design aligns with our brand identity. Your role will involve collaborating with cross-functional teams to understand project requirements and deliver compelling graphics. Proficiency in Adobe Creative Suite, particularly Photoshop, Illustrator, and InDesign, is required. A strong portfolio showcasing your design skills and creativity is essential for this position.",
      applyLink: "#",
      saved: false,
      shareLink: "#",
    },
    {
      id: "2",
      title: "Content Strategist",
      imageUrl: NovaCraft,
      postedDate: "One hour ago",
      location: "Location",
      company: "NovaCraft Solutions",
      jobType: "Full-time",
      description:
        "This position is for a content strategist who will develop and implement effective content\n strategies across various platforms. You will analyze the target audience and market trends to\n create engaging and relevant content that resonates with our users. Your responsibilities will include optimizing content for SEO and measuring its performance using analytics tools. Collaboration with designers, writers, and marketing teams will be key to ensure a cohesive brand message. Experience in copywriting, social media management, and a deep understanding of content marketing best practices are preferred.",
      applyLink: "#",
      saved: false,
      shareLink: "#",
    },
    {
      id: "3",
      title: "Digital Marketing Specialist",
      imageUrl: Skyline,
      postedDate: "One hour ago",
      location: "Location",
      company: "Skyline Innovations",
      jobType: "Full-time",
      description:
        "We are looking for a digital marketing specialist to manage and optimize advertising campaigns\n across social media platforms, SEO, and email marketing channels. Your main objective will be to\n enhance the company's online presence and attract new customers through innovative marketing strategies. You will conduct market research and analyze consumer behavior to refine our marketing tactics and improve campaign performance. Strong skills in Google Analytics and experience with various campaign management platforms are necessary for this role. A passion for digital marketing trends and a results-driven mindset will be essential to succeed.",
      applyLink: "#",
      saved: false,
      shareLink: "#",
    },
    {
      id: "4",
      title: "Art Director",
      imageUrl: Visionary,
      postedDate: "One hour ago",
      location: "Location",
      company: "Visionary Labs",
      jobType: "Full-time",
      description:
        "We have an opening for an art director who will inspire the creative team and develop the visual\n concept of various projects. In this role, you will be responsible for leading the design process\n from concept to execution, ensuring that the final output meets high-quality standards. You will collaborate closely with clients and stakeholders to understand their vision and translate it into compelling visual solutions. Strong leadership skills and the ability to mentor junior designers will be crucial for fostering a productive creative environment. A robust portfolio demonstrating your design expertise and innovative thinking is essential for this position.",
      applyLink: "#",
      saved: false,
      shareLink: "#",
    },
    {
      id: "5",
      title: "Graphic Designer",
      imageUrl: BrightPixel,
      postedDate: "One hour ago",
      location: "Location",
      company: "BrightPixel Studios",
      jobType: "Full-time",
      description:
        "We are seeking a creative graphic designer who can bring our ideas to life with vibrant and unique\n visual solutions. You will work on a variety of projects, including branding, packaging, and digital\n media, ensuring that each design aligns with our brand identity. Your role will involve collaborating with cross-functional teams to understand project requirements and deliver compelling graphics. Proficiency in Adobe Creative Suite, particularly Photoshop, Illustrator, and InDesign, is required. A strong portfolio showcasing your design skills and creativity is essential for this position.",
      applyLink: "#",
      saved: false,
      shareLink: "#",
    },
    {
      id: "6",
      title: "Content Strategist",
      imageUrl: NovaCraft,
      postedDate: "One hour ago",
      location: "Location",
      company: "NovaCraft Solutions",
      jobType: "Full-time",
      description:
        "This position is for a content strategist who will develop and implement effective content\n strategies across various platforms. You will analyze the target audience and market trends to\n create engaging and relevant content that resonates with our users. Your responsibilities will include optimizing content for SEO and measuring its performance using analytics tools. Collaboration with designers, writers, and marketing teams will be key to ensure a cohesive brand message. Experience in copywriting, social media management, and a deep understanding of content marketing best practices are preferred.",
      applyLink: "#",
      saved: false,
      shareLink: "#",
    },
    {
      id: "7",
      title: "Digital Marketing Specialist",
      imageUrl: Skyline,
      postedDate: "One hour ago",
      location: "Location",
      company: "Skyline Innovations",
      jobType: "Full-time",
      description:
        "We are looking for a digital marketing specialist to manage and optimize advertising campaigns\n across social media platforms, SEO, and email marketing channels. Your main objective will be to\n enhance the company's online presence and attract new customers through innovative marketing strategies. You will conduct market research and analyze consumer behavior to refine our marketing tactics and improve campaign performance. Strong skills in Google Analytics and experience with various campaign management platforms are necessary for this role. A passion for digital marketing trends and a results-driven mindset will be essential to succeed.",
      applyLink: "#",
      saved: false,
      shareLink: "#",
    },
    {
      id: "8",
      title: "Art Director",
      imageUrl: Visionary,
      postedDate: "One hour ago",
      location: "Location",
      company: "Visionary Labs",
      jobType: "Full-time",
      description:
        "We have an opening for an art director who will inspire the creative team and develop the visual\n concept of various projects. In this role, you will be responsible for leading the design process\n from concept to execution, ensuring that the final output meets high-quality standards. You will collaborate closely with clients and stakeholders to understand their vision and translate it into compelling visual solutions. Strong leadership skills and the ability to mentor junior designers will be crucial for fostering a productive creative environment. A robust portfolio demonstrating your design expertise and innovative thinking is essential for this position.",
      applyLink: "#",
      saved: false,
      shareLink: "#",
    },
  ];

  const renderVacanciesContent = (data: VacancyCard[]) => (
    <div className="vacancies-container">
      {data.map((item) => (
        <div key={item.id} className="vacancie-item">
          <div className="vacancie-title-and-icon">
            <div className="vacancie-header-wrapper">
              <img
                className="vacancie-logo"
                src={item.imageUrl}
                alt={item.company}
              />
              <div className="vacancie-header">
                <h2>{item.company}</h2>
                <Pointblack />
                <h2>{item.title}</h2>
              </div>
            </div>
            <div className="vacancie-info">
              <div className="vacancie-header">
                <span>{item.location}</span>
                <Point />
                <span>{item.jobType}</span>
                <Point />
                <span>{item.postedDate}</span>
              </div>
              <p>
                {truncateText(item.description, 284)
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </p>
              <div className="vacancie-icons">
                <a href={item.applyLink} className="button-see">
                  See more
                </a>
                <button>
                  <TurnedInNotIcon />
                </button>
                <button>
                  <Share />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Banner
        title={"Vacancies"}
        text={
          "Step into a world of creativity and innovation, where\n your career can become an impressive success story!"
        }
        img={BannerVacancy}
      />
      <main className="main">
        <SearchBar />
        <section>
          <div className="vacancies-section">
            {renderVacanciesContent(vacancies)}
          </div>
        </section>
        <section className="relative flex justify-center items-center my-9">
          <div className="absolute top-1/2 left-9 right-9 h-px bg-gray-300 z-0"></div>
          <button className="relative z-10 w-[116px] h-[44px] rounded-full bg-gray-200 border border-gray-300 text-[16px] font-medium hover:border-gray-500 border-2 transition-colors">
            View all
          </button>
        </section>
      </main>
    </>
  );
};

export default VacanciesPage;
