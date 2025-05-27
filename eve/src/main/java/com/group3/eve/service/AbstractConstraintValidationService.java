package com.group3.eve.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.function.Predicate;

import com.group3.eve.common.Constants;

/**
 * This is an abstract base class for constraint validation services.
 * Extend this class to implement specific validation logic.
 */
public abstract class AbstractConstraintValidationService<T>
        implements ValidationService<T>, IMessageSourceService {

    // ==================== CORE VALIDATION METHODS ====================

    /**
     * Validate field with custom database constraint validator
     *
     * @param fieldName       The name of the field for error mapping
     * @param errors          The map to collect errors
     * @param args            Array of objects to pass to validator and message
     *                        generator
     * @param validator       The predicate that performs the validation test
     * @param genErrorMessage The function that generates error message when
     *                        validation fails
     */
    protected void validateConstraint(
            String fieldName,
            Map<String, String> errors,
            Object[] args,
            Predicate<Object[]> validator,
            Function<Object[], String> genErrorMessage) {
        if (errors.containsKey(fieldName)) {
            return;
        }

        if (args.length > 0 && (args[0] == null || !validator.test(args))) {
            String errorMessage = genErrorMessage.apply(args);
            errors.put(fieldName, errorMessage);
        }
    }

    /**
     * Convenience method for validating a single value constraint
     *
     * @param value           The value to validate
     * @param fieldName       The name of the field for error mapping
     * @param errors          The map to collect errors
     * @param additionalArgs  Additional arguments (optional)
     * @param validator       The predicate that performs the validation test
     * @param genErrorMessage The function that generates error message when
     *                        validation fails
     */
    protected void validateValueConstraint(
            Object value,
            String fieldName,
            Map<String, String> errors,
            Object[] additionalArgs,
            Predicate<Object[]> validator,
            Function<Object[], String> genErrorMessage) {

        // Skip validation if there's already an error for this field
        if (errors.containsKey(fieldName)) {
            return;
        }

        // Create combined arguments array with value as first element
        Object[] combinedArgs = new Object[additionalArgs.length + 1];
        combinedArgs[0] = value;
        System.arraycopy(additionalArgs, 0, combinedArgs, 1, additionalArgs.length);

        validateConstraint(fieldName, errors, combinedArgs, validator, genErrorMessage);
    }

    // ==================== ENTITY VALIDATION METHODS ====================
    /**
     * Generic method for checking entity status (deleted or enabled)
     * 
     * @param <E>            Entity type
     * @param <ID>           ID type
     * @param id             The ID to check
     * @param finder         Function to find entity by ID
     * @param statusCheckFn  Predicate function that returns true if status check
     *                       passes
     * @param fieldName      Field name for error message
     * @param errorMessage   Message when status check fails
     * @param expectedStatus Expected status value for the check to pass
     * @return ValidationResult
     */
    protected <E, ID> ValidationResult validateEntityStatus(
            ID id,
            Function<ID, Optional<E>> finder,
            Predicate<E> statusCheckFn,
            String fieldName,
            String errorMessage,
            boolean expectedStatus) {
        Optional<E> entityOptional = finder.apply(id);

        if (entityOptional.isPresent() && statusCheckFn != null) {
            E entity = entityOptional.get();
            boolean actualStatus = statusCheckFn.test(entity);

            if (actualStatus != expectedStatus) {
                return ValidationResult.invalid(
                        getMessageSource().getMessage(
                                Constants.ME0041,
                                new Object[] { fieldName, errorMessage },
                                Locale.getDefault()));
            }
        }

        return ValidationResult.valid();
    }

    /**
     * Validates that an entity exists by its ID.
     * 
     * @param <E>             Entity type
     * @param <ID>            ID type
     * @param id              The ID of the entity to check
     * @param finder          Function to find entity by ID
     * @param fieldName       Field name for error message
     * @param notFoundMessage Message to display if the entity is not found
     * @return ValidationResult with status valid if the entity exists,
     *         or invalid with an error message if it does not
     */
    protected <E, ID> ValidationResult validateEntityExists(
            ID id,
            Function<ID, Optional<E>> finder,
            String fieldName,
            String notFoundMessage) {

        if (id == null) {
            return ValidationResult.invalid(
                    getMessageSource().getMessage(Constants.ME0041,
                            new Object[] { fieldName, Constants.ID_NULL },
                            Locale.getDefault()));
        }

        Optional<E> entityOptional = finder.apply(id);
        if (entityOptional.isEmpty()) {
            return ValidationResult.invalid(
                    getMessageSource().getMessage(Constants.ME0041,
                            new Object[] { fieldName, notFoundMessage },
                            Locale.getDefault()));
        }
        return ValidationResult.valid();
    }

    /**
     * Validates that an attribute of an entity matches an expected value.
     * 
     * @param <E>           Entity type
     * @param <ID>          ID type
     * @param <ATTR>        Attribute type
     * @param id            The ID of the entity to check
     * @param expected      The expected value of the attribute
     * @param finder        Function to find entity by ID
     * @param attrGetter    Function to get the attribute from the entity
     * @param fieldName     Field name for error message
     * @param attributeName Name of the attribute being checked (for error
     *                      messaging)
     * @return ValidationResult with status valid if the attribute matches the
     *         expected value,
     *         or invalid with an error message if there's a mismatch
     */
    protected <E, ID, ATTR> ValidationResult validateEntityAttribute(
            ID id,
            ATTR expected,
            Function<ID, Optional<E>> finder,
            Function<E, ATTR> attrGetter,
            String fieldName,
            String attributeName) {
        Optional<E> entityOptional = finder.apply(id);

        if (entityOptional.isPresent()) {
            E entity = entityOptional.get();
            ATTR actual = attrGetter.apply(entity);

            if ((actual == null && expected != null) || (actual != null && !actual.equals(expected))) {
                String mismatchMessage = attributeName + " mismatch (found: '" +
                        (actual == null ? "null" : actual.toString()) +
                        "', expected: '" + expected + "')";

                return ValidationResult.invalid(
                        getMessageSource().getMessage(Constants.ME0041,
                                new Object[] { fieldName, mismatchMessage },
                                Locale.getDefault()));
            }
        }

        return ValidationResult.valid();
    }

    // ==================== ROLE-BASED VALIDATION ====================
    protected <E, ID> ValidationResult validateUserRole(
            ID id,
            Function<ID, Optional<E>> finder,
            Function<E, String> roleExtractor,
            String[] allowedRoles,
            String errorMessage) {
        Optional<E> entityOptional = finder.apply(id);
        if (entityOptional.isEmpty()) {
            return ValidationResult.invalid(
                    getMessageSource().getMessage(
                            Constants.ME0011,
                            new Object[] { id },
                            Locale.getDefault()));
        }
        String userRole = roleExtractor.apply(entityOptional.get());

        if (!Arrays.asList(allowedRoles).contains(userRole)) {
            return ValidationResult.invalid(
                    getMessageSource().getMessage(
                            Constants.ME0041,
                            new Object[] { Constants.FIELD_ROLE, errorMessage },
                            Locale.getDefault()));
        }

        return ValidationResult.valid();
    }

    // ==================== BATCH VALIDATION METHODS ====================
    protected <U> void validateEntityReference(
            Integer id,
            String fieldName,
            Map<String, String> errors,
            Function<Integer, Optional<U>> finder,
            Predicate<U> isDeletedFn,
            Predicate<U> isEnabledFn,
            List<Function<Integer, ValidationResult>> additionalValidators) {

        if (errors.containsKey(fieldName) || id == null) {
            return;
        }

        List<Function<Integer, ValidationResult>> validators = new ArrayList<>();

        // Base validations
        validators.add(value -> validateEntityExists(
                value, finder, fieldName, Constants.ID_NOT_EXIST));
        if (validators != null)
            validators.add(value -> validateEntityStatus(
                    value, finder, isDeletedFn, fieldName, Constants.RECORD_DELETED, false));
        if (validators != null)
            validators.add(value -> validateEntityStatus(
                    value, finder, isEnabledFn, fieldName, Constants.RECORD_DISABLED, true));

        // Add additional validators if provided
        if (additionalValidators != null) {
            validators.addAll(additionalValidators);
        }

        chainValidators(id, fieldName, errors, validators);
    }

    // ==================== CHAINED VALIDATORS ====================
    protected <V> void chainValidators(
            V value,
            String fieldName,
            Map<String, String> errors,
            List<Function<V, ValidationResult>> validators) {

        for (Function<V, ValidationResult> validator : validators) {
            ValidationResult result = validator.apply(value);
            if (!result.isValid()) {
                errors.put(fieldName, result.getErrorMessage());
                return;
            }
        }
    }
}
