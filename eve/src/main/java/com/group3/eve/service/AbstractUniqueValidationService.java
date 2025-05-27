package com.group3.eve.service;

import com.group3.eve.common.Constants;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;

import java.util.Locale;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;

public abstract class AbstractUniqueValidationService<T, ID>
        implements ValidationService<T>, IMessageSourceService, IEntityTypeResolver<T> {

    @PersistenceContext
    private EntityManager entityManager;

    /**
     * NEW APPROACH: Validate unique field with custom finder function.
     * This is the RECOMMENDED way - more flexible and testable.
     * 
     * @param id          the entity ID (null for creation, non-null for update)
     * @param errors      map to collect validation errors
     * @param fieldName   name of the field being validated
     * @param fieldValue  value of the field
     * @param finder      function to find existing entity by field value
     * @param idExtractor function to extract ID from found entity
     */
    protected <E> void validateUniqueField(
            ID id,
            Map<String, String> errors,
            String fieldName,
            String fieldValue,
            Function<String, Optional<E>> finder,
            Function<E, ID> idExtractor) {

        if (errors.containsKey(fieldName) || fieldValue == null || fieldValue.trim().isEmpty()) {
            return;
        }

        finder.apply(fieldValue).ifPresent(existingEntity -> {
            ID existingId = idExtractor.apply(existingEntity);

            if (id == null) {
                // Creating new entity - any existing entity is a violation
                String errorMessage = getMessageSource().getMessage(
                        Constants.ME019,
                        new Object[] { fieldName, fieldValue },
                        Locale.getDefault());
                errors.put(fieldName, errorMessage);
            } else if (!existingId.equals(id)) {
                // Updating entity - violation only if different entity has same value
                String errorMessage = getMessageSource().getMessage(
                        Constants.ME0191,
                        new Object[] { fieldName, fieldValue, id, existingId },
                        Locale.getDefault());
                errors.put(fieldName, errorMessage);
            }
        });
    }

    /**
     * LEGACY APPROACH: Generic validation with dynamic field finding.
     * Keep this for backward compatibility and cases where specific finders aren't
     * available.
     * 
     * @deprecated Use validateUniqueField with custom finder instead
     */
    @Deprecated
    protected void validateUnique(
            ID id,
            Map<String, String> errors,
            String fieldName,
            String fieldValue,
            Function<T, ID> idExtractor) {

        if (errors.containsKey(fieldName) || fieldValue == null) {
            return;
        }

        Optional<T> existingEntity = findByFieldDynamic(fieldName, fieldValue);
        existingEntity.ifPresent(entity -> {
            ID existingId = idExtractor.apply(entity);
            if (!existingId.equals(id)) {
                String messageKey = id == null ? Constants.DI001 : Constants.DI0011;
                Object[] args = (id == null) ? new Object[] { fieldName, fieldValue }
                        : new Object[] { fieldName, fieldValue, id, existingId };

                errors.put(fieldName, getMessageSource().getMessage(messageKey, args, Locale.getDefault()));
            }
        });
    }

    /**
     * Generic field finder using criteria queries.
     * This is a fallback when specific repository methods aren't available.
     */
    protected Optional<T> findByFieldDynamic(String fieldName, Object fieldValue) {
        try {
            Class<T> entityClass = getEntityClass();
            CriteriaBuilder cb = entityManager.getCriteriaBuilder();
            CriteriaQuery<T> query = cb.createQuery(entityClass);
            Root<T> root = query.from(entityClass);
            query.where(cb.equal(root.get(fieldName), fieldValue));

            try {
                T result = entityManager.createQuery(query).getSingleResult();
                return Optional.of(result);
            } catch (NoResultException e) {
                return Optional.empty();
            }

        } catch (Exception e) {
            throw new RuntimeException(
                    getMessageSource().getMessage(Constants.DI002, new Object[] { fieldName }, Locale.getDefault()), e);
        }
    }

    /**
     * Convenience method for validating multiple unique fields at once.
     */
    @SuppressWarnings("unchecked")
    protected void validateUniqueFields(ID id, Map<String, String> errors, UniqueFieldValidator<ID>... validators) {
        for (UniqueFieldValidator<ID> validator : validators) {
            validator.validate(id, errors, this::validateUniqueField);
        }
    }

    /**
     * Functional interface for batch unique field validation.
     */
    @FunctionalInterface
    public interface UniqueFieldValidator<ID> {
        void validate(ID id, Map<String, String> errors, UniqueFieldValidationFunction<ID> validationFunction);
    }

    /**
     * Functional interface for the validation function signature.
     */
    @FunctionalInterface
    public interface UniqueFieldValidationFunction<ID> {
        <E> void validateUniqueField(
                ID id,
                Map<String, String> errors,
                String fieldName,
                String fieldValue,
                Function<String, Optional<E>> finder,
                Function<E, ID> idExtractor);
    }
}