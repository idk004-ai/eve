package com.group3.eve.dto;

import com.group3.eve.common.Constants;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TicketDTO {
    private Integer id;

    @NotNull(message = "{ME004}")
    private Integer userId;

    @NotNull(message = "{ME004}")
    private Integer tripId;

    @NotNull(message = "{ME004}")
    private Integer seatId;

    @NotNull(message = "{ME004}")
    private Integer pickUpRouteStopId;

    @NotNull(message = "{ME004}")
    private Integer dropOffRouteStopId;

    @Size(max = 255, message = "{ME005}")
    private String passengerName;

    @Size(max = 50, message = "{ME005.5}")
    @Pattern(regexp = Constants.PHONE_REGEX, message = Constants.PHONE_ERROR)
    private String passengerPhone;

    @NotNull(message = "{ME004}")
    private String ticketCode;

    @NotNull(message = "{ME004}")
    private String status;

    private Instant createdAt;

    private Instant modifiedAt;

}
