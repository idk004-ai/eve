package com.group3.eve.service;

import com.group3.eve.dto.SeatDTO;
import com.group3.eve.model.Seat;

import java.util.List;

public interface SeatService extends ICRUDService<Seat, Integer, SeatDTO> {

    /**
     * Find all active seats for a specific bus
     *
     * @param busId the bus id
     * @return List of SeatDTO for the bus
     */
    List<SeatDTO> findSeatsByBusId(Integer busId);

}
