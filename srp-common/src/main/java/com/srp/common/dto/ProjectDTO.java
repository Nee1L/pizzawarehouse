package com.srp.common.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.ZonedDateTime;
import java.util.List;

@Getter
@Setter
public class ProjectDTO {

    private Long id;

    private String userId;

    private String title;

    private String description;

    private ZonedDateTime createDate;

    private Integer views;

    private Integer likes;

    private List<ProjectAttachmentDTO> projectAttachments;

    private List<TagDTO> tags;
}