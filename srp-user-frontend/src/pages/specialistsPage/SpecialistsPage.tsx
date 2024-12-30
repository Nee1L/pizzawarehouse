import Banner from "../../components/banner/Banner";
import Filter from "../../components/filter/Filter";
import SearchBar from "../../components/searchBar/SearchBar";
import SpecialistsList from "../../components/specialistsList/SpecialistsList";
import logoOne from "../../img/expertise_1.jpg";
import logoTwo from "../../img/expertise_2.jpg";
import logoThree from "../../img/expertise_3.jpg";
import logoFour from "../../img/expertise_4.jpg";
import avatar from "../../img/specialist-avatar.png";

const SpecialistsPage = () => {
  const filterData = [
    {
      title: "By employment type",
      items: ["Full-time", "Part-time", "Temporary", "Remote"],
    },
    {
      title: "By industry",
      items: [
        "IT and Technology",
        "Finance",
        "Marketing",
        "Healthcare",
        "Education",
      ],
    },
    {
      title: "By experience level",
      items: ["Entry level", "Mid level", "Senior level"],
    },
    {
      title: "By location",
      items: ["City", "Region", "Country"],
    },
    {
      title: "By salary range",
      items: ["300$", "700$", "1000$"],
    },
  ];

  const specialists = [
    {
      name: "John Doe",
      location: "New York, USA",
      avatar,
      topRated: true,
      quickResponse: true,
      title: "3D Designer",
      description:
        "Specializes in product design and architectural rendering. Certified in advanced 3D modeling software.",
      reviews: 5,
      projects: 8,
      expertise: [
        {
          id: 1,
          logo: logoOne,
          alt: "Model A",
        },
        {
          id: 2,
          logo: logoTwo,
          alt: "Model B",
        },
        {
          id: 3,
          logo: logoThree,
          alt: "Model C",
        },
        {
          id: 4,
          logo: logoFour,
          alt: "Model D",
        },
      ],
    },
    {
      name: "John Doe",
      location: "New York, USA",
      avatar,
      topRated: true,
      quickResponse: true,
      title: "3D Designer",
      description:
        "Specializes in product design and architectural rendering. Certified in advanced 3D modeling software.",
      reviews: 5,
      projects: 8,
      expertise: [
        {
          id: 1,
          logo: logoOne,
          alt: "Model A",
        },
        {
          id: 2,
          logo: logoTwo,
          alt: "Model B",
        },
        {
          id: 3,
          logo: logoThree,
          alt: "Model C",
        },
        {
          id: 4,
          logo: logoFour,
          alt: "Model D",
        },
      ],
    },
    {
      name: "John Doe",
      location: "New York, USA",
      avatar,
      topRated: true,
      quickResponse: true,
      title: "3D Designer",
      description:
        "Specializes in product design and architectural rendering. Certified in advanced 3D modeling software.",
      reviews: 5,
      projects: 8,
      expertise: [
        {
          id: 1,
          logo: logoOne,
          alt: "Model A",
        },
        {
          id: 2,
          logo: logoTwo,
          alt: "Model B",
        },
        {
          id: 3,
          logo: logoThree,
          alt: "Model C",
        },
        {
          id: 4,
          logo: logoFour,
          alt: "Model D",
        },
      ],
    },
    {
      name: "John Doe",
      location: "New York, USA",
      avatar,
      topRated: true,
      quickResponse: true,
      title: "3D Designer",
      description:
        "Specializes in product design and architectural rendering. Certified in advanced 3D modeling software.",
      reviews: 5,
      projects: 8,
      expertise: [
        {
          id: 1,
          logo: logoOne,
          alt: "Model A",
        },
        {
          id: 2,
          logo: logoTwo,
          alt: "Model B",
        },
        {
          id: 3,
          logo: logoThree,
          alt: "Model C",
        },
        {
          id: 4,
          logo: logoFour,
          alt: "Model D",
        },
      ],
    },
    {
      name: "John Doe",
      location: "New York, USA",
      avatar,
      topRated: true,
      quickResponse: true,
      title: "3D Designer",
      description:
        "Specializes in product design and architectural rendering. Certified in advanced 3D modeling software.",
      reviews: 5,
      projects: 8,
      expertise: [
        {
          id: 1,
          logo: logoOne,
          alt: "Model A",
        },
        {
          id: 2,
          logo: logoTwo,
          alt: "Model B",
        },
        {
          id: 3,
          logo: logoThree,
          alt: "Model C",
        },
        {
          id: 4,
          logo: logoFour,
          alt: "Model D",
        },
      ],
    },
    {
      name: "John Doe",
      location: "New York, USA",
      avatar,
      topRated: true,
      quickResponse: true,
      title: "3D Designer",
      description:
        "Specializes in product design and architectural rendering. Certified in advanced 3D modeling software.",
      reviews: 5,
      projects: 8,
      expertise: [
        {
          id: 1,
          logo: logoOne,
          alt: "Model A",
        },
        {
          id: 2,
          logo: logoTwo,
          alt: "Model B",
        },
        {
          id: 3,
          logo: logoThree,
          alt: "Model C",
        },
        {
          id: 4,
          logo: logoFour,
          alt: "Model D",
        },
      ],
    },
  ];

  return (
    <>
      <Banner text="You are capable of amazing things" />
      <SearchBar nameSort="Sort expert" />
      <main className="main">
        <div className="container container--flex">
          <aside className="aside">
            <Filter sections={filterData} />
          </aside>
          <section className="section">
            <p className="results-count">{` ${specialists.length} results`}</p>
            <SpecialistsList specialists={specialists} />
          </section>
        </div>
      </main>
    </>
  );
};

export default SpecialistsPage;
