package com.srp.user.converters;

import com.srp.common.dto.ProjectAttachmentDTO;
import com.srp.common.dto.ProjectDTO;
import com.srp.common.dto.TagDTO;
import com.srp.user.entities.Project;
import com.srp.user.entities.ProjectAttachment;
import com.srp.user.entities.ProjectTagLink;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class ProjectConverter {

    private final ProjectAttachmentConverter projectAttachmentConverter;

    private final TagConverter tagConverter;

    public ProjectDTO toDTO(Project project) {
        ProjectDTO result = new ProjectDTO();
        result.setId(project.getId());
//        result.setUserId(SecurityContextHolder.getContext().getAuthentication().getName());
        result.setTitle(project.getTitle());
        result.setDescription(project.getDescription());
        result.setCreateDate(project.getCreateDate());
        result.setViews(project.getViews());
        result.setLikes(project.getLikes());

        List<ProjectAttachmentDTO> attachments = new ArrayList<>();
        if (project.getProjectAttachments() != null) {
            for (ProjectAttachment item : project.getProjectAttachments()) {
                attachments.add(projectAttachmentConverter.toDTO(item));
            }
            result.setProjectAttachments(attachments);
        }

        List<TagDTO> tags = new ArrayList<>();
        if (project.getProjectTagLinks() != null) {
            for (ProjectTagLink item : project.getProjectTagLinks()) {
                tags.add(tagConverter.toDTO(item.getTag()));
            }
            result.setTags(tags);
        }
        return result;
    }

    public Project fromDTO(ProjectDTO projectDTO) {
        Project result = new Project();
        result.setId(projectDTO.getId());
//        result.setUserId(SecurityContextHolder.getContext().getAuthentication().getName());
        result.setTitle(projectDTO.getTitle());
        result.setDescription(projectDTO.getDescription());
        result.setCreateDate(projectDTO.getCreateDate());
        result.setViews(projectDTO.getViews());
        result.setLikes(projectDTO.getLikes());

        if (projectDTO.getProjectAttachments() != null) {
            List<ProjectAttachment> projectAttachments = new ArrayList<>();
            for (ProjectAttachmentDTO item : projectDTO.getProjectAttachments()) {
                projectAttachments.add(projectAttachmentConverter.fromDTO(item));
            }
            result.setProjectAttachments(projectAttachments);
        }
        return result;
    }
}
