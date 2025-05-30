package com.group3.eve.service.impl;

import com.group3.eve.dto.UserDTO;
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

import java.time.ZoneId;
import java.util.Map;

@Service
@Transactional
public class UserServiceImpl extends AbstractCRUDService<User, Integer, UserDTO> implements UserService {
    private final UserRepository userRepository;
    private final MessageSource messageSource;
    private final ValidationService<UserDTO> userUniqueValidationService;
    private final ValidationService<UserDTO> userConstraintValidationService;


    public UserServiceImpl(
            UserRepository userRepository,
            MessageSource messageSource,
            @Qualifier("userUniqueValidationService") ValidationService<UserDTO> userUniqueValidationService,
            @Qualifier("userConstraintValidationService") ValidationService<UserDTO> userConstraintValidationService) {
        this.userRepository = userRepository;
        this.messageSource = messageSource;
        this.userUniqueValidationService = userUniqueValidationService;
        this.userConstraintValidationService = userConstraintValidationService;
    }

    /**
     * @param entity
     * @return
     */
    @Override
    public UserDTO mapToDTO(User entity) {
        if (entity == null) return new UserDTO();

        UserDTO userDTO = new UserDTO();
        userDTO.setId(entity.getId());
        userDTO.setFullName(entity.getFullName());
        userDTO.setEmail(entity.getEmail());
        userDTO.setUsername(entity.getUsername());
        userDTO.setPhone(entity.getPhone());
        userDTO.setDob(entity.getDob());
        userDTO.setGender(entity.getGender());
        userDTO.setAddress(entity.getAddress());
        userDTO.setLogoUrl(entity.getLogoUrl()); // bus operator
        userDTO.setLicense(entity.getLicense()); // bus operator
        userDTO.setIsActive(entity.getIsActive());
        userDTO.setRole(entity.getRole());
        userDTO.setCreatedAt(
                entity.getCreatedAt() != null ? entity.getCreatedAt().atZone(ZoneId.systemDefault()).toLocalDate() : null);
        userDTO.setModifiedAt(
                entity.getModifiedAt() != null ? entity.getModifiedAt().atZone(ZoneId.systemDefault()).toLocalDate() : null);
        return userDTO;
    }

    /**
     * @param userDTO
     * @return
     */
    @Override
    public User mapToEntity(UserDTO userDTO) {
        if (userDTO == null) return new User();

        User user = new User();
        user.setId(userDTO.getId());
        user.setFullName(userDTO.getFullName());
        user.setEmail(userDTO.getEmail());
        user.setUsername(userDTO.getUsername());
        user.setPassword(userDTO.getPassword());
        user.setPhone(userDTO.getPhone());
        user.setDob(userDTO.getDob());
        user.setGender(userDTO.getGender());
        user.setAddress(userDTO.getAddress());
        user.setLogoUrl(userDTO.getLogoUrl()); // bus operator
        user.setLicense(userDTO.getLicense()); // bus operator
        user.setIsActive(userDTO.getIsActive());
        user.setRole(userDTO.getRole());
        if (userDTO.getId() == null) {
            user.setCreatedAt(java.time.Instant.now());
        } else {
            userRepository.findById(userDTO.getId())
                    .ifPresent(existingUser -> {
                        user.setCreatedAt(existingUser.getCreatedAt());
                    });
        }
        user.setModifiedAt(java.time.Instant.now());
        return user;
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
        userUniqueValidationService.validateGeneralContracts(userDTO, userDTO.getId(), errors);
        if (errors.isEmpty()) {
            userConstraintValidationService.validateGeneralContracts(userDTO, userDTO.getId(), errors);
        }
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
