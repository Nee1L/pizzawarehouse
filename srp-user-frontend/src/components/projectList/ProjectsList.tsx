import React from "react";
import { Project } from "../../types/project";
import ProjectCard from "../projectCard/ProjectCard";

interface ProjectListProps {
  projects: Project[] | null;
  category: string;
}
const ProjectList = ({ projects, category }: ProjectListProps) => (
  <div className="project-list flex flex-wrap justify-center gap-8">
    {!projects ? (
      <p>No projects available</p>
    ) : (
      projects.map((project: Project) => (
        <ProjectCard key={project.id} {...project} category={category} />
      ))
    )}
  </div>
);

export default ProjectList;
