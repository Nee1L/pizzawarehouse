package org.example.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@Table(name = "SUPPLIER")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Supplier {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "PHONENUMBER")
    private String phoneNumber;

}
