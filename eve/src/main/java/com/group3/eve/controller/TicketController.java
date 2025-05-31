package com.group3.eve.controller;

import com.group3.eve.common.Constants;
import com.group3.eve.common.CustomResponse;
import com.group3.eve.dto.TicketDTO;
import com.group3.eve.model.Ticket;
import com.group3.eve.service.TicketService;
import org.springframework.context.MessageSource;
import org.springframework.web.bind.annotation.*;

import java.util.Locale;

@RestController
@RequestMapping("/api")
public class TicketController {
    private final TicketService ticketService;
    private final MessageSource messageSource;

    public TicketController(TicketService ticketService, MessageSource messageSource) {
        this.ticketService = ticketService;
        this.messageSource = messageSource;
    }

    @GetMapping("/ticket/{userId}/{tripId}/{seatId}/{pickUpRouteStopId}/{dropOffRouteStopId}")
    public CustomResponse<TicketDTO> creatTicket(@PathVariable Integer userId,@PathVariable Integer tripId,@PathVariable Integer seatId,@PathVariable Integer pickUpRouteStopId,@PathVariable Integer dropOffRouteStopId ){

        TicketDTO ticketDTO = new TicketDTO();
        ticketDTO.setUserId(userId);
        ticketDTO.setTripId(tripId);
        ticketDTO.setSeatId(seatId);
        ticketDTO.setPickUpRouteStopId(pickUpRouteStopId);
        ticketDTO.setDropOffRouteStopId(dropOffRouteStopId);
        ticketDTO.setPassengerName("123");
        ticketDTO.setPassengerPhone("123");
        ticketDTO.setTicketCode("123");
        ticketDTO.setStatus("123");
        ticketDTO.setCreatedAt(null);
        ticketDTO.setModifiedAt(null);
        System.out.println(ticketDTO);
        return new CustomResponse<>(
                true,
                messageSource.getMessage(Constants.SUC001, null, Locale.getDefault()),
                ticketDTO,
                null);
    }

    @PostMapping("/ticket/creat")
    public CustomResponse<Ticket> createTicket(@RequestBody TicketDTO ticketDTO){
        Ticket ticket = ticketService.mapToEntity(ticketDTO);

        return new CustomResponse<>(
                true,
                messageSource.getMessage(Constants.SUC002, null, Locale.getDefault()),
                ticket,
                null);
    }
}
