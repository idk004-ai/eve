package com.group3.eve.service.impl;

import com.group3.eve.common.Constants;
import com.group3.eve.dto.UserDTO;
import com.group3.eve.model.User;
import com.group3.eve.repository.UserRepository;
import com.group3.eve.service.AbstractUniqueValidationService;

import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class UserUniqueValidationService extends AbstractUniqueValidationService<UserDTO, Integer> {
    private final MessageSource messageSource;
    private final UserRepository userRepository;

    public UserUniqueValidationService(MessageSource messageSource, UserRepository userRepository) {
        this.messageSource = messageSource;
        this.userRepository = userRepository;
    }

    /**
     * Retrieves the message source for internationalization.
     *
     * @return the MessageSource instance
     */
    @Override
    public MessageSource getMessageSource() {
        return this.messageSource;
    }

    @Override
    public Class<UserDTO> getEntityClass() {
        return UserDTO.class;
    }

    /**
     * Validates the general contract of an entity.
     * This method should be implemented to check various constraints
     * and populate the errors map with validation messages.
     *
     * @param entity the entity to validate
     * @param id     the identifier of the entity (if applicable)
     * @param errors a map to collect validation errors where key is field name and
     *               value is error message
     */
    @Override
    public void validateGeneralContracts(UserDTO entity, Integer id, Map<String, String> errors) {
        if (entity.getEmail() != null) {
            validateUniqueField(
                id, 
                errors, 
                Constants.FIELD_EMAIL, 
                entity.getEmail(), 
                userRepository::findByEmail, 
                User::getId);
        }

        if (entity.getUsername() != null) {
            validateUniqueField(
                id, 
                errors, 
                Constants.FIELD_USERNAME, 
                entity.getUsername(), 
                userRepository::findByUsername, 
                User::getId);
        }

        if (entity.getPhone() != null) {
            validateUniqueField(
                id, 
                errors, 
                Constants.FIELD_PHONE, 
                entity.getPhone(), 
                userRepository::findByPhone, 
                User::getId);
        }
    }
}
