package com.group3.eve.service;

/**
 * Interface representing the result of a validation operation.
 * Provides methods to check if the validation was successful and to retrieve error messages and codes.
 */
public interface ValidationResult {
    /**
     * Checks if the validation result is valid.
     *
     * @return true if valid, false otherwise
     */
    boolean isValid();

    /**
     * Gets the error message associated with the validation result.
     *
     * @return the error message, or null if valid
     */
    String getErrorMessage();

    static ValidationResult valid() {
        return new ValidationResultImpl(true, null);
    }

    /**
     * Creates an invalid validation result with the specified error message.
     *
     * @param errorMessage the error message to associate with the invalid result
     * @return a new ValidationResult instance representing an invalid result
     */
    static ValidationResult invalid(String errorMessage) {
        return new ValidationResultImpl(false, errorMessage);
    }


    class ValidationResultImpl implements ValidationResult {
        private final boolean valid;
        private final String errorMessage;

        ValidationResultImpl(boolean valid, String errorMessage) {
            this.valid = valid;
            this.errorMessage = errorMessage;
        }

        @Override
        public boolean isValid() {
            return valid;
        }

        @Override
        public String getErrorMessage() {
            return errorMessage;
        }
    }
}
