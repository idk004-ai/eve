package com.group3.eve.repository;

import com.group3.eve.model.Routestop;
import com.group3.eve.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoutestopRepository extends JpaRepository<Routestop, Integer> {
}
