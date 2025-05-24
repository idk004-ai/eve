package com.group3.eve.exception;

import com.group3.eve.common.Constants;
import lombok.Getter;

import java.util.Collections;
import java.util.Map;

/**
 * Exception thrown when validation fails for an entity.
 * Contains a map of field names to error messages.
 */
@Getter
public class ValidationException extends RuntimeException {
    private final Map<String, String> errors;
    private static final String ERROR_MESSAGE_CODE = Constants.VAL005;

    /**
     * Constructs a ValidationException with the default error message and
     * validation errors.
     * 
     * @param errors a map of field names to error messages
     */
    public ValidationException(Map<String, String> errors) {
        super(ERROR_MESSAGE_CODE);
        this.errors = Collections.unmodifiableMap(errors);
    }

    /**
     * Constructs a ValidationException with a custom error message and validation
     * errors.
     * 
     * @param message the error message
     * @param errors  a map of field names to error messages
     */
    public ValidationException(String message, Map<String, String> errors) {
        super(message);
        this.errors = Collections.unmodifiableMap(errors);
    }

    /**
     * Constructs a ValidationException with a message code and validation errors.
     * 
     * @param messageCode the message code from Constants
     * @param errors      a map of field names to error messages
     */
    public ValidationException(String messageCode, Map<String, String> errors, String... args) {
        super(messageCode);
        this.errors = Collections.unmodifiableMap(errors);
    }
}
