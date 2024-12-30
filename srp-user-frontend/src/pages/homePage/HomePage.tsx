import { useAuth0 } from "@auth0/auth0-react";
import Banner from "components/banner/Banner";
import Filter from "components/filter/Filter";
import InfoModal from "components/infoModal/InfoModal";
import ProjectList from "components/projectList/ProjectsList";
import Sort from "components/sort/Sort";
import VacanciesList from "components/vacanciesList/VacanciesList";
import ViewAll from "components/viewAll/ViewAll";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getNewProjects, getTopProjects } from "../../api/api";
import { AppDispatch, RootState } from "../../store/store";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const newProjects = useSelector(
    (state: RootState) => state.homePage.newProjects
  );
  const topProject = useSelector(
    (state: RootState) => state.homePage.topProjects
  );
  const status = useSelector(
    (state: RootState) => state.homePage.allRequestsComplete
  );

  const [newVacancies, setNewVacancies] = useState([]);

  const socket = new WebSocket('ws://localhost:9071/websocket-endpoint');
  socket.onopen = () => {
    console.log('WebSocket connected');
    const message = JSON.stringify({ type: 'greeting', content: 'Hello, WebSocket!' });
    socket.send(message);
  };
  socket.onmessage = (event) => {
    console.log('Received message:', event.data);
  };
  socket.onclose = () => {
    console.log('WebSocket closed');
  };
  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };


  const vcancies = async () => {
    try {
      const response = await fetch("/vacancy.json");
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }
      const data = await response.json();
      setNewVacancies(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const { user } = useAuth0();

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check user authentication and fetch projects
  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
    dispatch(getNewProjects());
    dispatch(getTopProjects());
    vcancies();
  }, [dispatch, navigate, user]);

  // Show info modal if first visit
  useEffect(() => {
    if (!localStorage.getItem("hasVisited")) {
      setIsModalOpen(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filterData = [
    {
      title: "By content type",
      items: ["Photographs", "Video", "Vector", "Drawings", "3D"],
    },
    {
      title: "Projects",
      items: ["New projects", "Top projects", "All projects"],
    },
  ];

  const tags = [
    "SEO Strategies",
    "Data Analysis with Python",
    "Content Strategy",
    "Photography Techniques",
    "Typography",
  ];

  return (
    <>
      <Banner text="You are capable of amazing things" title={""} img={""} />
      <main className="pt-7 pb-28">
        <div className="container flex flex-col">
          <section className="w-full">
            <div className="flex items-start justify-between mb-8 min-[1180px]:items-center">
              <Filter data={filterData} />
              <div className="flex flex-wrap items-center justify-center gap-2 whitespace-nowrap">
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    className="inline-flex items-center text-sm border rounded-3xl px-[18px] py-[11px] cursor-pointer max-h-[32px] bg-[#EFEFEF] hover:border-slate-600"
                  >
                    # {tag}
                  </button>
                ))}
              </div>
              <Sort />
            </div>
            <h2 className="font-normal text-2xl text-black leading-none mb-8 text-center">
              New works
            </h2>

            {!status ? (
              <p>Loading new projects...</p>
            ) : (
              <>
                <p>PR 1</p>
                {/*<ProjectList projects={newProjects} category="new" />*/}
              </>
            )}
            <div className="mt-11">
              <ViewAll />
            </div>
            <h2 className="font-normal text-2xl text-black leading-none mb-8 text-center mt-[68px]">
              Top works
            </h2>
            {!status ? (
              <p>Loading top projects...</p>
            ) : (
              <>
                <p>PR 2</p>
                {/*<ProjectList projects={topProject} category="top" />*/}
              </>
            )}
            <div className="mt-11">
              <ViewAll />
            </div>
          </section>
          <section className="w-full mt-14">
            <h2 className="font-normal text-2xl text-black leading-none text-center mb-8">
              New vacancies
            </h2>
            <VacanciesList vacancies={newVacancies} onVacancyClick={null} />
            <div className="mt-11">
              <ViewAll />
            </div>
          </section>
        </div>
      </main>

      <InfoModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default HomePage;
