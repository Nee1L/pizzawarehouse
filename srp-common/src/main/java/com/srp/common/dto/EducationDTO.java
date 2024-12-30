package com.srp.common.dto;

import com.srp.common.enums.EducationType;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class EducationDTO {

    private Long id;

    private String title;

    private Integer reviews;

    private EducationType educationType;

    private Date publishDate;

    private byte[] img;
}
