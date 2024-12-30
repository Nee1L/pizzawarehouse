import { VacancyCard } from "../vacancyCard/VacancyCard";
import "./vacanciesList.css";

const VacanciesList = ({ vacancies, onVacancyClick }) => (
  <div className="vacancies-list">
    {vacancies.map((vacancy) => (
      <VacancyCard
        key={vacancy.id}
        vacancy={vacancy}
        onVacancyClick={onVacancyClick}
      />
    ))}
  </div>
);

export default VacanciesList;
