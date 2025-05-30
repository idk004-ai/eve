package com.group3.eve.dto;

import jakarta.validation.constraints.*;
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

    @NotNull(message = "{ME004}")
    private Integer busId;

    @NotBlank(message = "{ME004}")
    @Size(max = 10, message = "{ME005.5}")
    private String seatNumber;

    @NotNull(message = "{ME004}")
    @Min(value = 1, message = "{VAL004}")
    private Integer seatFloor;

    @NotNull(message = "{ME004}")
    @DecimalMin(value = "0.0", inclusive = false, message = "{VAL004}")
    private BigDecimal basePrice;

    @NotNull(message = "{ME004}")
    private Boolean isActive;

    @NotNull(message = "{ME004}")
    private Boolean isBooked;

    private LocalDate createdAt;
    private LocalDate modifiedAt;
}