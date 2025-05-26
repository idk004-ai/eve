package com.group3.eve.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "routestops")
public class Routestop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "RouteStopId", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "RouteId")
    private Route route;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "LocationId")
    private Location location;

    @Column(name = "StopOrder")
    private Integer stopOrder;

    @Lob
    @Column(name = "StopType")
    private String stopType;

    @Size(max = 50)
    @Column(name = "EstimatedArrivalOffset", length = 50)
    private String estimatedArrivalOffset;

    @ColumnDefault("1")
    @Column(name = "IsPickUpAllowed")
    private Boolean isPickUpAllowed;

    @ColumnDefault("1")
    @Column(name = "IsDropOffAllowed")
    private Boolean isDropOffAllowed;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "CreatedAt")
    private Instant createdAt;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "ModifiedAt")
    private Instant modifiedAt;

}