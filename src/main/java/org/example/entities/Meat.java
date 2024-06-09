package org.example.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@Table(name = "MEAT")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Meat {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "TYPE")
    private String type;

    @Column(name = "PRICE")
    private Double cost;

    @Column(name = "QUANTITY")
    private  Integer quantity;

    @Column(name = "MEASURE")
    private String measure;



}
