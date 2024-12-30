package com.srp.user.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "PROJECT_ATTACHMENT")
public class ProjectAttachment {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "IMG")
    private Byte img;

    @ManyToOne
    @JoinColumn(name = "PROJECT_ID")
    private Project project;
}
