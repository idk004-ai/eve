package com.group3.eve.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.math.BigDecimal;
import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "location")
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "LocationId", nullable = false)
    private Integer id;

    @Size(max = 255)
    @Column(name = "Name")
    private String name;

    @Lob
    @Column(name = "DetailAddress")
    private String detailAddress;

    @ColumnDefault("1")
    @Column(name = "IsActive")
    private Boolean isActive;

    @Column(name = "Longitude", precision = 11, scale = 8)
    private BigDecimal longitude;

    @Column(name = "Latitude", precision = 10, scale = 8)
    private BigDecimal latitude;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "CreatedAt")
    private Instant createdAt;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "ModifiedAt")
    private Instant modifiedAt;

}