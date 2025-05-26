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
@Table(name = "trip")
public class Trip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TripId", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "RouteId")
    private Route route;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BusId")
    private Bus bus;

    @Column(name = "DepartureTime")
    private Instant departureTime;

    @Column(name = "ArrivalTime")
    private Instant arrivalTime;

    @Column(name = "AvailableSeats")
    private Integer availableSeats;

    @Column(name = "TotalSeats")
    private Integer totalSeats;

    @Column(name = "MinPassengers")
    private Integer minPassengers;

    @Size(max = 20)
    @Column(name = "Status", length = 20)
    private String status;

    @Lob
    @Column(name = "Note")
    private String note;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "CreatedAt")
    private Instant createdAt;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "ModifiedAt")
    private Instant modifiedAt;

}