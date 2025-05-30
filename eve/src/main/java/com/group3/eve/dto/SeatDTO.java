package com.group3.eve.dto;

import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SeatDTO {
    private Integer id;

    @Size(max = 10)
    private String seatNumber;

    private Integer seatFloor;

    private BigDecimal basePrice;

    private Boolean isActive;

    private LocalDate createdAt;

    private Instant modifiedAt;

}
