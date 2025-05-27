package com.group3.eve.service;

import java.util.List;

/**
 * Interface for CRUD operations on entities.
 *
 * @param <T>   the entity type
 * @param <ID>  the type of the entity's identifier
 * @param <DTO> the Data Transfer Object type for the entity
 */
public interface ICRUDService<T, ID, DTO> {
    /**
     * Retrieves all entities with pagination.
     *
     * @param page the page number to retrieve
     * @param size the number of entities per page
     * @return a list of DTOs representing the entities
     */
    List<DTO> findAll(int page, int size);

    /**
     * Retrieves an entity without pagination.
     *
     * @return a DTO representing the entity
     */
    DTO findByIdDTO(ID id);

    /**
     * Retrieves an entity by its identifier.
     *
     * @param id the identifier of the entity
     * @return the entity DTO
     */
    T findByIdEntity(ID id);

    /**
     * Saves a new or existing entity.
     *
     * @param entity the DTO representing the entity to save
     * @return the saved entity
     */
    T save(DTO entity);

    /**
     * Deletes an entity by its identifier.
     *
     * @param id the identifier of the entity to delete
     */
    void deleteById(ID id);

    /**
     * Checks if an entity is active.
     *
     * @return true if the entity is active, false otherwise
     */
    long countAll();

    DTO mapToDTO(T entity);

    T mapToEntity(DTO dto);
}
