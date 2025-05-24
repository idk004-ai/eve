package com.group3.eve.service;

import com.group3.eve.common.Constants;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;

/**
 * This interface defines a contract for validation results in the application.
 * It provides methods to check if a validation result is valid, retrieve error
 * messages,
 * and create instances of validation results.
 */
public interface IEntityTypeResolver<T> {

    /**
     * Returns the class type of the entity being resolved.
     * This method uses reflection to determine the generic type parameter of the
     * implementing class.
     *
     * @return the Class object representing the entity type
     * @throws IllegalStateException if the entity class type cannot be determined
     */
    default Class<T> getEntityClass() {
        Class<?> clazz = getClass();
        Type type = clazz.getGenericSuperclass();

        if (type instanceof ParameterizedType parameterizedType) {
            Type[] typeArguments = parameterizedType.getActualTypeArguments();
            if (typeArguments.length > 0 && typeArguments[0] instanceof Class) {
                return (Class<T>) typeArguments[0];
            }
        }
        throw new IllegalStateException(Constants.ME003);
    }
}
