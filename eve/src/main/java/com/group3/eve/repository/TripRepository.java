package com.group3.eve.repository;

import com.group3.eve.model.Ticket;
import com.group3.eve.model.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TripRepository extends JpaRepository<Trip, Integer> {
}
