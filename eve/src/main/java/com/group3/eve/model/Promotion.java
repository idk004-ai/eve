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
@Table(name = "promotions", uniqueConstraints = {
        @UniqueConstraint(name = "Code", columnNames = {"Code"})
})
public class Promotion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PromotionId", nullable = false)
    private Integer id;

    @Size(max = 50)
    @Column(name = "Code", length = 50)
    private String code;

    @Size(max = 255)
    @Column(name = "Name")
    private String name;

    @Lob
    @Column(name = "Description")
    private String description;

    @Size(max = 50)
    @Column(name = "DiscountType", length = 50)
    private String discountType;

    @Column(name = "DiscountValue", precision = 10, scale = 2)
    private BigDecimal discountValue;

    @Column(name = "ValidFrom")
    private Instant validFrom;

    @Column(name = "ValidTo")
    private Instant validTo;

    @Column(name = "UsageLimit")
    private Integer usageLimit;

    @ColumnDefault("0")
    @Column(name = "UsageCount")
    private Integer usageCount;

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
