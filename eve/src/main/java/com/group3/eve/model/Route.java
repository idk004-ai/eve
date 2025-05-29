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
@Table(name = "routes")
public class Route {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "RouteId", nullable = false)
    private Integer id;

    @Size(max = 255)
    @Column(name = "Name")
    private String name;

    @Column(name = "Distance", precision = 10, scale = 2)
    private BigDecimal distance;

    @Size(max = 50)
    @Column(name = "EstimatedDuration", length = 50)
    private String estimatedDuration;

    @Lob
    @Column(name = "Description")
    private String description;

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
