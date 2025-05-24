package com.group3.eve.common;

import java.util.Date;

public class CustomResponse<T> {

    private Boolean success;
    private String message;
    private T data;
    private Object error;
    private Date timestamp;

    public CustomResponse(Boolean success, String message, T data, Object error) {
        this.success = success;
        this.message = message;
        if (success) {
            this.data = data;
        } else {
            this.error = error;
        }
        this.timestamp = new Date();
    }
}
