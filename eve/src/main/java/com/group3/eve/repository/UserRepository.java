package com.group3.eve.repository;

import com.group3.eve.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    
    /**
     * Find user by email address.
     * 
     * @param email the email to search for
     * @return Optional containing User if found
     */
    Optional<User> findByEmail(String email);
    
    /**
     * Find user by username.
     * 
     * @param username the username to search for
     * @return Optional containing User if found
     */
    Optional<User> findByUsername(String username);
    
    /**
     * Find user by phone number.
     * 
     * @param phone the phone number to search for
     * @return Optional containing User if found
     */
    Optional<User> findByPhone(String phone);
}
