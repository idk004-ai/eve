package com.group3.eve.service;

/**
 * Interface for checking entity status such as deletion or disablement
 *
 * @param <T> entity type
 */
public interface IEntityStatusChecker<T> {

    /**
     * Checks if the entity is marked as deleted
     *
     * @param entity the entity to check
     * @return true if the entity is deleted, false otherwise
     */
    boolean isDeleted(T entity);

    /**
     * Checks if the entity is disabled
     *
     * @param entity the entity to check
     * @return true if the entity is disabled, false otherwise
     */
    boolean isDisabled(T entity);

    /**
     * Checks if the entity is active (not deleted and not disabled)
     *
     * @param entity the entity to check
     * @return true if the entity is active, false otherwise
     */
    default boolean isActive(T entity) {
        return !isDeleted(entity) && !isDisabled(entity);
    }
}