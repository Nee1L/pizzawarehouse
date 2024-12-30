package com.srp.user.entities;

import com.srp.common.enums.EducationType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity(name = "EDUCATION")
public class Education {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "EDUCATION_TYPE")
    @Enumerated(EnumType.STRING)
    private EducationType educationType;

    @Column(name = "REVIEWS")
    private Integer reviews;

    @Column(name = "PUBLISH_DATE")
    private Date publishDate;

    @Column(name = "IMG")
    private byte[] img;
}
