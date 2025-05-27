package com.group3.eve.service;

import com.group3.eve.exception.ValidationException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import com.group3.eve.common.Constants;

import java.util.HashMap;
import java.util.Locale;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public abstract class AbstractCRUDService<T, ID, DTO>
        implements
        ICRUDService<T, ID, DTO>,
        IRepositoryService<T, ID>,
        IEntityStatusChecker<T>,
        IMessageSourceService,
        IEntityTypeResolver<T> {

    protected abstract void markEntityAsDeleted(T entity);

    protected abstract void markEntityAsDisabled(T entity);

    private final ThreadLocal<T> currentEntity = new ThreadLocal<>();
    private final ThreadLocal<DTO> currentDto = new ThreadLocal<>();

    protected T getCurrentEntity() {
        return currentEntity.get();
    }

    protected DTO getCurrentDto() {
        return currentDto.get();
    }

    @Override
    public long countAll() {
        return getRepository().count();
    }

    /**
     * Gets the name of the entity class that this service manages.
     * Uses generic type resolution to dynamically determine the entity class name.
     *
     * @return the simple name of the entity class
     */
    protected String getEntityClassName() {
        return getEntityClass().getSimpleName();
    }

    @Override
    public List<DTO> findAll(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return getRepository().findAll(pageable)
                .stream()
                .filter(this::isActive)
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public DTO findByIdDTO(ID id) {
        T entity = findByIdEntity(id);
        return mapToDTO(entity);
    }

    @Override
    public T findByIdEntity(ID id) {
        return getRepository().findById(id)
                .filter(this::isActive)
                .orElseThrow(() -> {
                    String errorMessage = getMessageSource().getMessage(Constants.ME001, new Object[]{getEntityClassName(), id}, Locale.getDefault());
                    return new EntityNotFoundException(errorMessage);
                });
    }

    @Override
    public T save(DTO dto) {
        try {
            currentDto.set(dto);

            Map<String, String> errors = new HashMap<>();
            validateEntity(dto, errors);

            if (!errors.isEmpty()) {
                for (Map.Entry<String, String> entry : errors.entrySet()) {
                    System.out.println("Validation Error - Field: " + entry.getKey() + ", Message: " + entry.getValue());
                }

                throw new ValidationException(errors);
            }

            T entity = mapToEntity(dto);
            currentEntity.set(entity);
            return getRepository().save(entity);
        } finally {
            currentEntity.remove();
            currentDto.remove();
        }
    }

    @Override
    public void deleteById(ID id) {
        softDelete(id);
    }

    private void softDelete(ID id) {
        String entityClassName = getEntityClassName();
        T entity = getRepository().findById(id)
                .orElseThrow(() -> {
                    String errorMessage = getMessageSource().getMessage(Constants.ME001, new Object[]{entityClassName, id}, Locale.getDefault());
                    return new EntityNotFoundException(errorMessage);
                });
        if (!isActive(entity)) {
            String errorMessage = getMessageSource().getMessage(Constants.ME002, new Object[]{entityClassName, id}, Locale.getDefault());
            throw new EntityNotFoundException(errorMessage);
        }
        markEntityAsDeleted(entity);
        getRepository().save(entity);
    }

    protected abstract void validateEntity(DTO dto, Map<String, String> errors);
}
