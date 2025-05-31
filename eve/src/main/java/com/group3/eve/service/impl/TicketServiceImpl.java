package com.group3.eve.service.impl;

import com.group3.eve.dto.SeatDTO;
import com.group3.eve.dto.TicketDTO;
import com.group3.eve.model.Seat;
import com.group3.eve.model.Ticket;
import com.group3.eve.repository.*;
import com.group3.eve.service.AbstractCRUDService;
import com.group3.eve.service.SeatService;
import com.group3.eve.service.TicketService;
import org.springframework.context.MessageSource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.time.ZoneId;
import java.util.Map;

@Service
public class TicketServiceImpl extends AbstractCRUDService<Ticket, Integer, TicketDTO> implements TicketService {
    private final MessageSource messageSource;
    private final UserRepository userRepository;
    private final SeatRepository seatRepository;
    private final TicketRepository ticketRepository;
    private final RoutestopRepository routestopRepository;
    private final TripRepository tripRepository;

    public TicketServiceImpl(MessageSource messageSource, UserRepository userRepository, SeatRepository seatRepository, TicketRepository ticketRepository, RoutestopRepository routestopRepository, TripRepository tripRepository) {
        this.messageSource = messageSource;
        this.userRepository = userRepository;
        this.seatRepository = seatRepository;
        this.ticketRepository = ticketRepository;
        this.routestopRepository = routestopRepository;
        this.tripRepository = tripRepository;
    }

    @Override
    protected void markEntityAsDeleted(Ticket entity) {

    }

    @Override
    protected void markEntityAsDisabled(Ticket entity) {

    }

    @Override
    protected void validateEntity(TicketDTO ticketDTO, Map<String, String> errors) {

    }

    @Override
    public TicketDTO mapToDTO(Ticket entity) {
        return null;
    }

    @Override
    public Ticket mapToEntity(TicketDTO ticketDTO) {
        if(ticketDTO == null) return new Ticket();

        Ticket ticket = new Ticket();
        ticket.setUser(userRepository.findById(ticketDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found")));
        ticket.setTrip(tripRepository.findById(ticketDTO.getTripId())
                .orElseThrow(() -> new RuntimeException("Trip not found")));
        ticket.setSeat(seatRepository.findById(ticketDTO.getSeatId())
                .orElseThrow(() -> new RuntimeException("Seat not found")));
        ticket.setPickUpRouteStop(routestopRepository.findById(ticketDTO.getPickUpRouteStopId())
                .orElseThrow(() -> new RuntimeException("Routestop not found")));
        ticket.setDropOffRouteStop(routestopRepository.findById(ticketDTO.getDropOffRouteStopId())
                .orElseThrow(() -> new RuntimeException("Routestop not found")));
        ticket.setPassengerName(ticketDTO.getPassengerName());
        ticket.setPassengerPhone(ticketDTO.getPassengerPhone());
        ticket.setTicketCode(ticket.getTicketCode());
        ticket.setStatus(ticket.getStatus());
        ticket.setCreatedAt(java.time.Instant.now());
        ticket.setModifiedAt(java.time.Instant.now());
        return null;
    }

    @Override
    public boolean isDeleted(Ticket entity) {
        return false;
    }

    @Override
    public boolean isDisabled(Ticket entity) {
        return false;
    }

    @Override
    public MessageSource getMessageSource() {
        return null;
    }

    @Override
    public JpaRepository<Ticket, Integer> getRepository() {
        return null;
    }
}
