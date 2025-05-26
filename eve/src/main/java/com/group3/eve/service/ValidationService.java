package com.group3.eve.service;


import java.util.List;
import java.util.Map;
import java.util.function.Function;

/**
 * Interface defining validation services for entities of type T.
 * <p>
 * This interface provides methods for validating entity constraints
 * and offers utility methods for validation chain operations.
 *
 * @param <T> the type of entity to validate
 */
public interface ValidationService<T> {

    /**
     * Validates the general contract of an entity.
     * This method should be implemented to check various constraints
     * and populate the errors map with validation messages.
     *
     * @param entity the entity to validate
     * @param id     the identifier of the entity (if applicable)
     * @param errors a map to collect validation errors where key is field name and value is error message
     */
    void validateGeneralContracts(T entity, Integer id, Map<String, String> errors);

    /**
     * Chains multiple validators for a single field.
     * This method is used to apply a list of validation functions
     * to a value and collect any validation errors.
     *
     * @param <V>        the type of value to validate
     * @param value      the value to validate
     * @param fieldName  the field name for error reporting
     * @param errors     the map to collect errors
     * @param validators list of validation functions that return ValidationResult
     */
    default <V> void chainValidation(
            V value,
            String fieldName,
            Map<String, String> errors,
            List<Function<V, ValidationResult>> validators
    ) {
        if (errors.containsKey(fieldName)) {
            return;
        }

        for (Function<V, ValidationResult> validator : validators) {
            ValidationResult result = validator.apply(value);
            if (!result.isValid()) {
                errors.put(fieldName, result.getErrorMessage());
                break;
            }
        }
    }

    /**
     * Creates a validation result indicating success.
     *
     * @return a validation result with isValid = true
     */
    default ValidationResult validResult() {
        return ValidationResult.valid();
    }

    /**
     * Creates a validation result indicating failure.
     *
     * @param errorMessage the error message to include in the result
     * @return a validation result with isValid = false and the provided error message
     */
    default ValidationResult invalidResult(String errorMessage) {
        return ValidationResult.invalid(errorMessage);
    }
}
