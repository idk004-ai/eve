package com.group3.eve.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.time.Instant;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "buses", indexes = {
        @Index(name = "OperatorUserId", columnList = "OperatorUserId")
}, uniqueConstraints = {
        @UniqueConstraint(name = "LicensePlate", columnNames = {"LicensePlate"})
})
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BusId", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "OperatorUserId")
    private User operatorUser;

    @Size(max = 50)
    @Column(name = "LicensePlate", length = 50)
    private String licensePlate;

    @Size(max = 100)
    @Column(name = "BusType", length = 100)
    private String busType;

    @Column(name = "SeatCount")
    private Integer seatCount;

    @Lob
    @Column(name = "SeatMapData")
    private String seatMapData;

    @ColumnDefault("1")
    @Column(name = "IsActive")
    private Boolean isActive;

    @Column(name = "LastMaintenanceDate")
    private LocalDate lastMaintenanceDate;

    @Column(name = "NextMaintenanceDate")
    private LocalDate nextMaintenanceDate;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "CreatedAt")
    private Instant createdAt;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "ModifiedAt")
    private Instant modifiedAt;

}
