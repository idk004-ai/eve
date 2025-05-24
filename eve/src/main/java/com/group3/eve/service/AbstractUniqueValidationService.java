package com.group3.eve.service;

import com.group3.eve.common.Constants;
import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;

import java.lang.reflect.Method;
import java.util.Locale;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;

public abstract class AbstractUniqueValidationService<T, ID>
        implements
        ValidationService<T>,
        IMessageSourceService,
        IRepositoryService<T, ID>,
        IEntityTypeResolver<T> {

    @PersistenceContext
    private EntityManager entityManager;

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

    protected Optional<T> findByFieldDynamic(String fieldName, Object fieldValue) {
        try {
            // First try using a specific repository method if available
            String methodName = "findBy" + fieldName.substring(0, 1).toUpperCase() + fieldName.substring(1);
            Method method = findRepositoryMethod(methodName, fieldValue.getClass());

            if (method != null) {
                @SuppressWarnings("unchecked")
                Optional<T> result = (Optional<T>) method.invoke(getRepository(), fieldValue);
                return result;
            }

            // Fall back to criteria query - much more efficient than findAll()
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

    private Method findRepositoryMethod(String methodName, Class<?>... parameterTypes) {
        try {
            return getRepository().getClass().getMethod(methodName, parameterTypes);
        } catch (NoSuchMethodException e) {
            return null;
        }
    }

}
