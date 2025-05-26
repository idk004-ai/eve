package com.group3.eve.service;

public interface EntityMapper<E, D> {
    /**
     * Maps an entity to its corresponding DTO.
     *
     * @param entity the entity to map
     * @return the mapped DTO
     */
    D toDto(E entity);

    /**
     * Maps a DTO to its corresponding entity.
     *
     * @param dto the DTO to map
     * @return the mapped entity
     */
    E toEntity(D dto);
}
