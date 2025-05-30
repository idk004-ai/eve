package com.group3.eve.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BusDTO {

    private Integer id;

    private Integer operatorUserId;

    @NotBlank(message = "{ME004}")
    @Size(max = 50, message = "{ME005.5}")
    private String licensePlate;

    @Size(max = 100, message = "{ME005}")
    private String busType;

    @Min(value = 1, message = "{ME008}")
    private Integer seatCount;

    private String seatMapData;

    private String description;

    @NotNull(message = "{ME007}")
    private Boolean isActive = true;

    @PastOrPresent(message = "{ME007.1}")
    private LocalDate lastMaintenanceDate;

    @FutureOrPresent(message = "{ME009}")
    private LocalDate nextMaintenanceDate;

    private LocalDate createdAt;
    private LocalDate modifiedAt;

    private List<SeatDTO> seats;

    private String operatorName;
    private String operatorEmail;

}
