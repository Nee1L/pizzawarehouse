package org.example.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@Table(name = "PIZZA")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Pizza {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "PRODUCTID")
    private Long productId;

    @Column(name = "PRODUCTTYPE")
    private String productType;
}
