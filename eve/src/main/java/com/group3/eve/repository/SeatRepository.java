package com.group3.eve.repository;

import com.group3.eve.model.Seat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SeatRepository extends JpaRepository<Seat, Integer> {

    /**
     * Finds all active seats for a given bus ID.
     *
     * @param busId the ID of the bus
     * @return a list of active seats for the specified bus
     */
    @Query("""
        SELECT s
        FROM Seat s
        WHERE s.bus.id = :busId AND s.isActive = true
        """)
    List<Seat> findByBusId(Integer busId);


    /**
     * Finds a seat by its bus ID and seat number.
     *
     * @param busId the ID of the bus
     * @param seatNumber the seat number to search for
     * @return an Optional containing the Seat if found, or empty if not found
     */
    @Query("""
        SELECT s
        FROM Seat s
        WHERE s.bus.id = :busId AND s.isActive = true AND s.seatNumber = :seatNumber
        """)
    Optional<Seat> findByBusIdAndSeatNumber(Integer busId, String seatNumber);

    /**
     * Counts the number of active seats for a given bus ID.
     *
     * @param busId the ID of the bus
     * @return the count of active seats for the specified bus
     */
    @Query("""
        SELECT COUNT(s)
        FROM Seat s
        WHERE s.bus.id = :busId AND s.isActive = true
        """)
    long countActiveSeatsByBusId(Integer busId);
}
