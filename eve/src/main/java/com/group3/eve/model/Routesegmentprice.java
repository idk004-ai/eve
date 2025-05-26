package com.group3.eve.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.math.BigDecimal;
import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "routesegmentprice")
public class Routesegmentprice {
    @Id
    @Column(name = "SegmentPriceId", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "RouteId")
    private Route route;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "OperatorId")
    private Busoperator operator;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "OriginStopId")
    private Routestop originStop;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "DestinationStopId")
    private Routestop destinationStop;

    @Column(name = "Price", precision = 10, scale = 2)
    private BigDecimal price;

    @Column(name = "EffectiveFrom")
    private Instant effectiveFrom;

    @Column(name = "EffectiveTo")
    private Instant effectiveTo;

    @ColumnDefault("1")
    @Column(name = "IsActive")
    private Boolean isActive;

}