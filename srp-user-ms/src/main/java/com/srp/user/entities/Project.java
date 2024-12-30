package com.srp.user.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.ZonedDateTime;
import java.util.List;

@Getter
@Setter
@Entity(name = "PROJECT")
public class Project {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USER_ID")
    private String userId;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "CREATE_DATE")
    private ZonedDateTime createDate;

    @Column(name = "VIEWS")
    private Integer views;

    @Column(name = "LIKES")
    private Integer likes;

    @OneToMany(mappedBy = "project")
    private List<ProjectAttachment> projectAttachments;

    @OneToMany(mappedBy = "project")
    private List<ProjectTagLink> projectTagLinks;
}
