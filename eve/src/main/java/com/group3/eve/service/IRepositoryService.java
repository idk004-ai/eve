package com.group3.eve.service;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Interface for repository services that provide access to a JpaRepository.
 *
 * @param <T>  the entity type
 * @param <ID> the type of the entity's identifier
 */
public interface IRepositoryService<T, ID> {
    /**
     * Gets the JpaRepository instance for the entity type.
     *
     * @return the JpaRepository instance
     */
    JpaRepository<T, ID> getRepository();
}
