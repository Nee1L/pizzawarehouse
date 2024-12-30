package com.srp.user.converters;

import com.srp.common.dto.ProjectAttachmentDTO;
import com.srp.user.entities.ProjectAttachment;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ProjectAttachmentConverter {

    public ProjectAttachmentDTO toDTO(ProjectAttachment projectAttachment) {
        ProjectAttachmentDTO result = new ProjectAttachmentDTO();
        result.setId(projectAttachment.getId());
        result.setImg(projectAttachment.getImg());
        return result;
    }

    public ProjectAttachment fromDTO(ProjectAttachmentDTO projectAttachmentDTO) {
        ProjectAttachment result = new ProjectAttachment();
        result.setId(projectAttachmentDTO.getId());
        result.setImg(projectAttachmentDTO.getImg());
        return result;
    }
}
