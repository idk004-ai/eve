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
@Table(name = "paymentgateway", uniqueConstraints = {
        @UniqueConstraint(name = "Code", columnNames = {"Code"})
})
public class Paymentgateway {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "GatewayId", nullable = false)
    private Integer id;

    @Size(max = 255)
    @Column(name = "Name")
    private String name;

    @Size(max = 50)
    @Column(name = "Code", length = 50)
    private String code;

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
