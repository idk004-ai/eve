package com.group3.eve.repository;

import com.group3.eve.model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BusRepository extends JpaRepository<Bus, Integer> {

    /**
     * Finds a bus by its license plate if it is active.
     *
     * @param licensePlate the license plate of the bus
     * @return an Optional containing the Bus if found, or empty if not found or inactive
     */
    @Query("""
        select b
        from Bus b
        where b.licensePlate = :licensePlate and b.isActive = true
        """)
    Optional<Bus> findByLicensePlate(String licensePlate);

    /**
     * Finds all active buses operated by a specific operator user ID.
     *
     * @param operatorUserId the ID of the operator user
     * @return a list of active buses operated by the specified operator user
     */
    @Query("""
        select b
        from Bus b
        where b.operatorUser.id = :operatorUserId and b.isActive = true
        """)
    List<Bus> findByOperatorUserId(Integer operatorUserId);

    /**
     * Finds all active buses of a specific type.
     *
     * @param busType the type of the bus
     * @return a list of active buses of the specified type
     */
    @Query("""
        select b
        from Bus b
        where b.busType = :busType and b.isActive = true
        """)
    List<Bus> findByBusType(String busType);

    /**
     * Finds all buses with a seat count within a specified range.
     *
     * @param minSeats the minimum number of seats
     * @param maxSeats the maximum number of seats
     * @return a list of buses that have a seat count within the specified range
     */
    @Query("""
        select b
        from Bus b
        where b.seatCount >= :minSeats and b.seatCount <= :maxSeats and b.isActive = true
        """)
    List<Bus> findBySeatsRange(@Param("minSeats") Integer minSeats,
                               @Param("maxSeats") Integer maxSeats);
}
