package com.srp.user.services;

import com.srp.common.dto.ProjectDTO;
import com.srp.common.dto.TagDTO;
import com.srp.user.converters.ProjectConverter;
import com.srp.user.converters.TagConverter;
import com.srp.user.entities.Project;
import com.srp.user.entities.ProjectTagLink;
import com.srp.user.entities.Tag;
import com.srp.user.repositories.ProjectRepository;
import com.srp.user.repositories.ProjectTagLinkRepository;
import com.srp.user.repositories.TagRepository;
import com.srp.user.repositories.specifications.ProjectTagLinkSpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;

    private final ProjectConverter projectConverter;

    private final TagRepository tagRepository;

    private final TagConverter tagConverter;

    private final ProjectTagLinkRepository projectTagLinkRepository;

    public ProjectDTO create(ProjectDTO projectDTO) {
        Project project = projectRepository.save(projectConverter.fromDTO(projectDTO));
        List<ProjectTagLink> projectTagLinks = new ArrayList<>();
        for (TagDTO item : projectDTO.getTags()) {
            ProjectTagLink projectTagLink = new ProjectTagLink();
            projectTagLink.setProject(project);
            if (tagRepository.getByName(item.getName()) != null) {
                projectTagLink.setTag(tagRepository.getByName(item.getName()));
            } else {
                projectTagLink.setTag(tagRepository.save(tagConverter.fromDTO(item)));
            }
            projectTagLinks.add(projectTagLinkRepository.save(projectTagLink));
        }
        project.setProjectTagLinks(projectTagLinks);
        return projectConverter.toDTO(project);
    }

    public void delete(Long id) {
        projectRepository.deleteById(id);
    }

    public ProjectDTO update(ProjectDTO projectDTO) {
        Project project = projectRepository.getReferenceById(projectDTO.getId());
        project.setTitle(projectDTO.getTitle());
        project.setTitle(projectDTO.getDescription());
        return projectConverter.toDTO(projectRepository.save(project));
    }

    public ProjectDTO getById(Long id) {
        return projectConverter.toDTO(projectRepository.getReferenceById(id));
    }

    public List<ProjectDTO> findAll(Pageable pageable) {
        return projectRepository.findAll(pageable).stream().map(projectConverter::toDTO).toList();
    }

    public List<ProjectDTO> filterByTag(Pageable pageable, String tag) {
        Tag tagObj = tagRepository.getByName(tag);
        List<Project> projects = projectTagLinkRepository.findAll(ProjectTagLinkSpecification.hasTagId(tagObj), pageable).stream().map(ProjectTagLink::getProject).toList();
        return projects.stream().map(projectConverter::toDTO).toList();
    }
}