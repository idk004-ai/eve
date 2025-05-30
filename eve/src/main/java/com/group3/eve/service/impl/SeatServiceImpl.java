package com.group3.eve.service.impl;

import com.group3.eve.dto.SeatDTO;
import com.group3.eve.model.Bus;
import com.group3.eve.model.Seat;
import com.group3.eve.repository.BusRepository;
import com.group3.eve.repository.SeatRepository;
import com.group3.eve.service.AbstractCRUDService;
import com.group3.eve.service.BusService;
import com.group3.eve.service.SeatService;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class SeatServiceImpl extends AbstractCRUDService<Seat, Integer, SeatDTO> implements SeatService {
    private final SeatRepository seatRepository;
    private final MessageSource messageSource;
    private final BusService busService;

    public SeatServiceImpl(
            SeatRepository seatRepository,
            MessageSource messageSource,
            @Lazy BusService busService) {
        this.seatRepository = seatRepository;
        this.messageSource = messageSource;
        this.busService = busService;
    }


    /**
     * @param entity
     */
    @Override
    protected void markEntityAsDeleted(Seat entity) {
        return;
    }

    /**
     * @param entity
     */
    @Override
    protected void markEntityAsDisabled(Seat entity) {
        entity.setIsActive(false);
    }

    /**
     * @param seatDTO
     * @param errors
     */
    @Override
    protected void validateEntity(SeatDTO seatDTO, Map<String, String> errors) {
        // TODO: Implement validation logic for SeatDTO
    }

    /**
     * @param entity
     * @return
     */
    @Override
    public SeatDTO mapToDTO(Seat entity) {
        if (entity == null) {
            return null;
        }
        SeatDTO seatDTO = new SeatDTO();
        seatDTO.setId(entity.getId());
        seatDTO.setBusId(entity.getBus() != null ? entity.getBus().getId() : null);
        seatDTO.setSeatNumber(entity.getSeatNumber());
        seatDTO.setSeatFloor(entity.getSeatFloor());
        seatDTO.setBasePrice(entity.getBasePrice());
        seatDTO.setIsActive(entity.getIsActive());
        seatDTO.setIsBooked(entity.getIsBooked());
        seatDTO.setCreatedAt(entity.getCreatedAt() != null ? entity.getCreatedAt().atZone(ZoneId.systemDefault()).toLocalDate() : null);
        seatDTO.setModifiedAt(entity.getModifiedAt() != null ? entity.getModifiedAt().atZone(ZoneId.systemDefault()).toLocalDate() : null);

        return seatDTO;
    }

    /**
     * @param seatDTO
     * @return
     */
    @Override
    public Seat mapToEntity(SeatDTO seatDTO) {
        if (seatDTO == null) {
            return null;
        }
        Seat seat = new Seat();
        seat.setId(seatDTO.getId());
        if (seatDTO.getBusId() != null) {
            Bus bus = busService.findByIdEntity(seatDTO.getBusId());
            seat.setBus(bus);
        }
        seat.setSeatNumber(seatDTO.getSeatNumber());
        seat.setSeatFloor(seatDTO.getSeatFloor());
        seat.setBasePrice(seatDTO.getBasePrice());
        seat.setIsActive(seatDTO.getIsActive());
        seat.setIsBooked(seatDTO.getIsBooked());
        if (seatDTO.getId() == null) {
            seat.setCreatedAt(java.time.Instant.now());
        } else {
            seatRepository.findById(seatDTO.getId())
                    .ifPresent(existingSeat -> {
                        seat.setCreatedAt(existingSeat.getCreatedAt());
                    });
        }
        seat.setModifiedAt(LocalDate.now().atStartOfDay(ZoneId.systemDefault()).toInstant());

        return seat;
    }

    /**
     * Checks if the entity is marked as deleted
     *
     * @param entity the entity to check
     * @return true if the entity is deleted, false otherwise
     */
    @Override
    public boolean isDeleted(Seat entity) {
        return false;
    }

    /**
     * Checks if the entity is disabled
     *
     * @param entity the entity to check
     * @return true if the entity is disabled, false otherwise
     */
    @Override
    public boolean isDisabled(Seat entity) {
        return !entity.getIsActive();
    }

    /**
     * Retrieves the message source for internationalization.
     *
     * @return the MessageSource instance
     */
    @Override
    public MessageSource getMessageSource() {
        return this.messageSource;
    }

    /**
     * Gets the JpaRepository instance for the entity type.
     *
     * @return the JpaRepository instance
     */
    @Override
    public JpaRepository<Seat, Integer> getRepository() {
        return this.seatRepository;
    }

    /**
     * Find all active seats for a specific bus
     *
     * @param busId the bus id
     * @return List of SeatDTO for the bus
     */
    @Override
    public List<SeatDTO> findSeatsByBusId(Integer busId) {
        List<Seat> seats = seatRepository.findByBusId(busId);
        return seats.stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

}
