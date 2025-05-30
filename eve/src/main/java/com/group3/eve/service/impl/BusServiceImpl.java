package com.group3.eve.service.impl;

import com.group3.eve.dto.BusDTO;
import com.group3.eve.dto.SeatDTO;
import com.group3.eve.model.Bus;
import com.group3.eve.model.Seat;
import com.group3.eve.repository.BusRepository;
import com.group3.eve.repository.SeatRepository;
import com.group3.eve.repository.UserRepository;
import com.group3.eve.service.AbstractCRUDService;
import com.group3.eve.service.BusService;
import com.group3.eve.service.SeatService;
import org.springframework.context.MessageSource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.time.ZoneId;
import java.util.List;
import java.util.Map;

@Service
public class BusServiceImpl extends AbstractCRUDService<Bus, Integer, BusDTO> implements BusService {
    private final BusRepository busRepository;
    private final MessageSource messageSource;
    private final SeatService seatService;
    private final UserRepository userRepository;


    public BusServiceImpl(BusRepository busRepository, MessageSource messageSource, SeatService seatService, UserRepository userRepository) {
        this.busRepository = busRepository;
        this.messageSource = messageSource;
        this.seatService = seatService;
        this.userRepository = userRepository;
    }


    /**
     * @param entity
     */
    @Override
    protected void markEntityAsDeleted(Bus entity) {
        return;
    }

    /**
     * @param entity
     */
    @Override
    protected void markEntityAsDisabled(Bus entity) {
        entity.setIsActive(false);
    }

    /**
     * @param busDTO
     * @param errors
     */
    @Override
    protected void validateEntity(BusDTO busDTO, Map<String, String> errors) {
        // TODO: Implement validation logic for BusDTO
    }

    /**
     * @param entity
     * @return
     */
    @Override
    public BusDTO mapToDTO(Bus entity) {
        if (entity == null) return new BusDTO();

        BusDTO busDTO = new BusDTO();
        busDTO.setId(entity.getId());
        busDTO.setOperatorUserId(entity.getOperatorUser() != null ? entity.getOperatorUser().getId() : null);
        busDTO.setLicensePlate(entity.getLicensePlate());
        busDTO.setBusType(entity.getBusType());
        busDTO.setSeatCount(entity.getSeatCount());
        busDTO.setSeatMapData(entity.getSeatMapData());
        busDTO.setDescription(entity.getDescription());
        busDTO.setIsActive(entity.getIsActive());
        busDTO.setLastMaintenanceDate(entity.getLastMaintenanceDate());
        busDTO.setNextMaintenanceDate(entity.getNextMaintenanceDate());
        busDTO.setCreatedAt(
                entity.getCreatedAt() != null ? entity.getCreatedAt().atZone(ZoneId.systemDefault()).toLocalDate() : null);
        busDTO.setModifiedAt(
                entity.getModifiedAt() != null ? entity.getModifiedAt().atZone(ZoneId.systemDefault()).toLocalDate() : null);

        List<SeatDTO> seatDTOS = seatService.findSeatsByBusId(entity.getId());
        busDTO.setSeats(seatDTOS);

        return busDTO;
    }

    /**
     * @param busDTO
     * @return
     */
    @Override
    public Bus mapToEntity(BusDTO busDTO) {
        if (busDTO == null) return new Bus();

        Bus bus = new Bus();
        bus.setId(busDTO.getId());
        if (busDTO.getOperatorUserId() != null) {
            userRepository.findById(busDTO.getOperatorUserId())
                    .ifPresent(bus::setOperatorUser);
        }

        bus.setLicensePlate(busDTO.getLicensePlate());
        bus.setBusType(busDTO.getBusType());
        bus.setSeatCount(busDTO.getSeatCount());
        bus.setSeatMapData(busDTO.getSeatMapData());
        bus.setDescription(busDTO.getDescription());
        bus.setIsActive(busDTO.getIsActive());
        bus.setLastMaintenanceDate(busDTO.getLastMaintenanceDate());
        bus.setNextMaintenanceDate(busDTO.getNextMaintenanceDate());

        if (busDTO.getId() == null) {
            bus.setCreatedAt(java.time.Instant.now());
        } else {
            busRepository.findById(busDTO.getId())
                    .ifPresent(existingBus -> {
                        bus.setCreatedAt(existingBus.getCreatedAt());
                    });
        }
        bus.setModifiedAt(java.time.Instant.now());
        return bus;
    }

    /**
     * Checks if the entity is marked as deleted
     *
     * @param entity the entity to check
     * @return true if the entity is deleted, false otherwise
     */
    @Override
    public boolean isDeleted(Bus entity) {
        return false;
    }

    /**
     * Checks if the entity is disabled
     *
     * @param entity the entity to check
     * @return true if the entity is disabled, false otherwise
     */
    @Override
    public boolean isDisabled(Bus entity) {
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
    public JpaRepository<Bus, Integer> getRepository() {
        return this.busRepository;
    }
}
