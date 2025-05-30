package com.group3.eve.dto;

import java.time.Instant;

public class TicketDTO {
    private Integer id;

    private Integer userId;

    private Integer tripId;

    private Integer seatId;

    private Integer pickUpRouteStopId;

    private Integer dropOffRouteStopId;

    private String passengerName;

    private String passengerPhone;

    private String ticketCode;

    private String status;

    private Instant createdAt;

    private Instant modifiedAt;

}
