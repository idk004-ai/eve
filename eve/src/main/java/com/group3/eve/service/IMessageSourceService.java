package com.group3.eve.service;

import org.springframework.context.MessageSource;

/**
 * Service interface for retrieving message sources for internationalization.
 * This service provides access to the MessageSource instance used in the application.
 */
public interface IMessageSourceService {
    /**
     * Retrieves the message source for internationalization.
     *
     * @return the MessageSource instance
     */
    MessageSource getMessageSource();
}
