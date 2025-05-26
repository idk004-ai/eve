package com.group3.eve.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "busoperators")
public class Busoperator {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "OperatorId", nullable = false)
    private Integer id;

    @Size(max = 255)
    @Column(name = "Name")
    private String name;

    @Lob
    @Column(name = "Description")
    private String description;

    @Size(max = 255)
    @Column(name = "Email")
    private String email;

    @Lob
    @Column(name = "Address")
    private String address;

    @Size(max = 50)
    @Column(name = "Phone", length = 50)
    private String phone;

    @Size(max = 255)
    @Column(name = "LogoUrl")
    private String logoUrl;

    @ColumnDefault("1")
    @Column(name = "IsActive")
    private Boolean isActive;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "CreatedAt")
    private Instant createdAt;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "ModifiedAt")
    private Instant modifiedAt;

}