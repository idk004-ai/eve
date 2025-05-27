package com.group3.eve.handler;

import com.group3.eve.common.Constants;
import com.group3.eve.common.CustomResponse;
import com.group3.eve.exception.ValidationException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.context.MessageSource;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {
    private final MessageSource messageSource;

    public GlobalExceptionHandler(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public CustomResponse<Map<String, String>> handleValidationRequest(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((FieldError) error).getField();
            String errorReason = error.getDefaultMessage();
            errors.put(fieldName, errorReason);
        });
        return new CustomResponse<>(
                false,
                messageSource.getMessage(Constants.ME002, new Object[] { "Validation failed" }, Locale.getDefault()),
                null,
                errors);
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(ValidationException.class)
    public CustomResponse<Map<String, String>> handleValidationException(ValidationException ex) {
        return new CustomResponse<>(
                false,
                messageSource.getMessage(Constants.ME002, new Object[] { ex.getMessage() }, Locale.getDefault()),
                null,
                new HashMap<>(ex.getErrors()));
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(EntityNotFoundException.class)
    public CustomResponse<String> handleEntityNotFoundException(EntityNotFoundException ex) {
        return new CustomResponse<>(
                false,
                messageSource.getMessage(Constants.ME001, null, Locale.getDefault()),
                null,
                null);
    }

    @ResponseStatus(HttpStatus.CONFLICT)
    @ExceptionHandler(DataIntegrityViolationException.class)
    public CustomResponse<String> handleDataIntegrityViolationException(DataIntegrityViolationException ex) {
        return new CustomResponse<>(
                false,
                messageSource.getMessage(Constants.DI0011, new Object[] { ex.getMostSpecificCause().getMessage() },
                        Locale.getDefault()),
                null,
                null);
    }

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(Exception.class)
    public CustomResponse<String> handleGeneralException(Exception ex) {
        return new CustomResponse<>(
                false,
                messageSource.getMessage(Constants.ME002, new Object[] { ex.getMessage() }, Locale.getDefault()),
                null,
                null);
    }
}
