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
@Table(name = "payment")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PaymentId", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TicketId")
    private Ticket ticket;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "GatewayId")
    private Paymentgateway gateway;

    @Column(name = "Amount", precision = 10, scale = 2)
    private BigDecimal amount;

    @Size(max = 255)
    @Column(name = "TransactionCode")
    private String transactionCode;

    @Column(name = "PaymentTime")
    private Instant paymentTime;

    @Size(max = 50)
    @Column(name = "Status", length = 50)
    private String status;

    @Lob
    @Column(name = "PaymentDetails")
    private String paymentDetails;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "CreatedAt")
    private Instant createdAt;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "ModifiedAt")
    private Instant modifiedAt;

}