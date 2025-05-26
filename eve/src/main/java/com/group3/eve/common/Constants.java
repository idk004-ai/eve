package com.group3.eve.common;

/**
 * Constants class containing message codes used throughout the application.
 * Each constant represents a unique message code that can be resolved using
 * the message source.
 */
public class Constants {
    // Error message codes
    public static final String ME001 = "ME001"; // Entity not found
    public static final String ME002 = "ME002"; // Entity validation error with reason
    public static final String ME003 = "ME003"; // Unable to determine entity class type
    public static final String ME004 = "ME004"; // Invalid request format with reason

    public static final String DI001 = "DI001"; // Data inconsistency error
    public static final String DI0011 = "DI0011"; // Data integrity violation error
    public static final String DI002 = "DI002"; // Error checking uniqueness for field
    // Validation message codes
    public static final String VAL001 = "VAL001"; // Required field
    public static final String VAL002 = "VAL002"; // Invalid format
    public static final String VAL003 = "VAL003"; // Field length exceeded
    public static final String VAL004 = "VAL004"; // Invalid value range
    public static final String VAL005 = "VAL005"; // Validation failed

    // Success message codes
    public static final String SUC001 = "SUC001"; // Operation completed successfully
    public static final String SUC002 = "SUC002"; // Entity created successfully
    public static final String SUC003 = "SUC003"; // Entity updated successfully
    public static final String SUC004 = "SUC004"; // Entity deleted successfully

    // Info message codes
    public static final String INF001 = "INF001"; // General information message
    public static final String INF002 = "INF002"; // Process started
    public static final String INF003 = "INF003"; // Process completed

    public static final String PASSWORD_REGEX = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$"; // Password must contain at least one digit, one lowercase letter, one uppercase letter, and one special character
    public static final String PASSWORD_ERROR = "Password must contain at least one digit, one lowercase, one uppercase, and one special character";
    public static final String PHONE_REGEX = "^[0-9]{10,15}$";
    public static final String PHONE_ERROR = "Phone number must be between 10 and 15 digits";
    public static final String ROLE_REGEX = "^(customer|bus_operator|admin)$"; // Example regex for roles
    public static final String ROLE_ERROR = "Role must be one of the following: CUSTOMER, BUS_OPERATOR, ADMIN";
}
