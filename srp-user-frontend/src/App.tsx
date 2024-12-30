import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ContactPage from "./pages/contactPage/ContactPage";
import EducationPage from "./pages/educationPage/educationPage";
import HomePage from "./pages/homePage/HomePage";
import SpecialistsPage from "./pages/specialistsPage/SpecialistsPage";
import SupportPage from "./pages/supportPage/SupportPage";
import VacanciesPage from "./pages/vacanciesPage/VacanciesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/vacancies" element={<VacanciesPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/specialists" element={<SpecialistsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
