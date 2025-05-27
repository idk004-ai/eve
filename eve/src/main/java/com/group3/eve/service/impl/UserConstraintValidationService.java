package com.group3.eve.service.impl;

import java.time.LocalDate;
import java.time.Period;
import java.util.Locale;
import java.util.Map;

import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;

import com.group3.eve.common.Constants;
import com.group3.eve.dto.UserDTO;
import com.group3.eve.model.User;
import com.group3.eve.repository.UserRepository;
import com.group3.eve.service.AbstractConstraintValidationService;

@Service
public class UserConstraintValidationService extends AbstractConstraintValidationService<UserDTO> {
    private final MessageSource messageSource;
    private final UserRepository userRepository;

    public UserConstraintValidationService(MessageSource messageSource, UserRepository userRepository) {
        this.messageSource = messageSource;
        this.userRepository = userRepository;
    }


    private void validateAge(LocalDate dob, String fieldName, Map<String, String> errors) {
        validateValueConstraint(
                dob,
                fieldName,
                errors,
                new Object[] {},
                args -> {
                    LocalDate dateOfBirth = (LocalDate) args[0];
                    if (dateOfBirth == null)
                        return false;

                    LocalDate now = LocalDate.now();
                    int age = Period.between(dateOfBirth, now).getYears();
                    return age >= 18;
                },
                args -> {
                    LocalDate dateOfBirth = (LocalDate) args[0];
                    LocalDate now = LocalDate.now();
                    int age = Period.between(dateOfBirth, now).getYears();
                    return messageSource.getMessage(
                            Constants.ME0072,
                            new Object[] { age, 18 },
                            Locale.getDefault());
                });
    }

    @Override
    public void validateGeneralContracts(UserDTO dto, Integer id, Map<String, String> errors) {
        if (dto == null)
            return;

        if (id != null) {
            validateEntityReference(id, Constants.FIELD_ID, errors, userRepository::findById, null, User::getIsActive,
                    null);
        }

        if (dto.getDob() != null) {
            validateAge(dto.getDob(), Constants.FIELD_DOB, errors);
        }
    }

    @Override
    public MessageSource getMessageSource() {
        return this.messageSource;
    }

}
