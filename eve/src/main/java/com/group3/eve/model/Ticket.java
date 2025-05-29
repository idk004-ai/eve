package com.group3.eve.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "ticket", indexes = {
        @Index(name = "UserId", columnList = "UserId"),
        @Index(name = "TripId", columnList = "TripId"),
        @Index(name = "SeatId", columnList = "SeatId"),
        @Index(name = "PickUpRouteStopId", columnList = "PickUpRouteStopId"),
        @Index(name = "DropOffRouteStopId", columnList = "DropOffRouteStopId")
}, uniqueConstraints = {
        @UniqueConstraint(name = "TicketCode", columnNames = {"TicketCode"})
})
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TicketId", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "UserId")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TripId")
    private Trip trip;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SeatId")
    private Seat seat;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PickUpRouteStopId")
    private Routestop pickUpRouteStop;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "DropOffRouteStopId")
    private Routestop dropOffRouteStop;

    @Size(max = 255)
    @NotNull
    @Column(name = "PassengerName", nullable = false)
    private String passengerName;

    @Size(max = 50)
    @NotNull
    @Column(name = "PassengerPhone", nullable = false, length = 50)
    private String passengerPhone;

    @Size(max = 100)
    @Column(name = "TicketCode", length = 100)
    private String ticketCode;

    @ColumnDefault("'active'")
    @Size(max = 50)
    @Column(name = "Status", length = 50)
    private String status;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "CreatedAt")
    private Instant createdAt;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "ModifiedAt")
    private Instant modifiedAt;

}
