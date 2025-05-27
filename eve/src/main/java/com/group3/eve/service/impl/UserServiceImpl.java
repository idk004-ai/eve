package com.group3.eve.service.impl;

import com.group3.eve.dto.UserDTO;
import com.group3.eve.mapper.UserDtoMapper;
import com.group3.eve.model.User;
import com.group3.eve.repository.UserRepository;
import com.group3.eve.service.AbstractCRUDService;
import com.group3.eve.service.EntityMapper;
import com.group3.eve.service.UserService;
import com.group3.eve.service.ValidationService;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.MessageSource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

@Service
@Transactional
public class UserServiceImpl extends AbstractCRUDService<User, Integer, UserDTO> implements UserService {
    private final UserRepository userRepository;
    private final EntityMapper<User, UserDTO> userDtoMapper;
    private final MessageSource messageSource;
    private final ValidationService<UserDTO> userConstraintValidationService;


    public UserServiceImpl(
            UserRepository userRepository,
            EntityMapper<User, UserDTO> userDtoMapper,
            MessageSource messageSource,
            @Qualifier("userUniqueService") ValidationService<UserDTO> userConstraintValidationService) {
        this.userRepository = userRepository;
        this.userDtoMapper = userDtoMapper;
        this.messageSource = messageSource;
        this.userConstraintValidationService = userConstraintValidationService;
    }

    /**
     * @param entity
     * @return
     */
    @Override
    public UserDTO mapToDTO(User entity) {
        return userDtoMapper.toDto(entity);
    }

    /**
     * @param userDTO
     * @return
     */
    @Override
    public User mapToEntity(UserDTO userDTO) {
        return userDtoMapper.toEntity(userDTO);
    }

    /**
     * @param entity
     */
    @Override
    protected void markEntityAsDeleted(User entity) {
        return; // No deletion logic for User entity
    }

    /**
     * @param entity
     */
    @Override
    protected void markEntityAsDisabled(User entity) {
        entity.setIsActive(false);
    }

    /**
     * @param userDTO
     * @param errors
     */
    @Override
    protected void validateEntity(UserDTO userDTO, Map<String, String> errors) {
        // validate unique constraints

    }

    /**
     * Checks if the entity is marked as deleted
     *
     * @param entity the entity to check
     * @return true if the entity is deleted, false otherwise
     */
    @Override
    public boolean isDeleted(User entity) {
        return false;
    }

    /**
     * Checks if the entity is disabled
     *
     * @param entity the entity to check
     * @return true if the entity is disabled, false otherwise
     */
    @Override
    public boolean isDisabled(User entity) {
        return !entity.getIsActive();
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

    /**
     * Gets the JpaRepository instance for the entity type.
     *
     * @return the JpaRepository instance
     */
    @Override
    public JpaRepository<User, Integer> getRepository() {
        return this.userRepository;
    }
}
