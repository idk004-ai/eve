package com.group3.eve.dto;

import com.group3.eve.model.User;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.time.LocalDate;

import com.group3.eve.common.Constants;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private Integer id;

    @NotBlank(message = "{ME004}")
    @Size(max = 255, message = "{ME005}")
    private String fullName;

    @NotBlank(message = "{ME004}")
    @Email(message = "{ME006}")
    @Size(max = 255, message = "{ME005}")
    private String email;

    @NotBlank(message = "{ME004}")
    @Size(min = 4, max = 255, message = "{ME005}")
    private String username;

    @NotBlank(message = "{ME004}")
    @Size(min = 8, max = 255, message = "{ME005}")
    @Pattern(regexp = Constants.PASSWORD_REGEX, message = Constants.PASSWORD_ERROR)
    private String password;

    @Size(max = 50, message = "{ME005.5}")
    @Pattern(regexp = Constants.PHONE_REGEX, message = Constants.PHONE_ERROR)
    private String phone;

    @Past(message = "{ME007}")
    private LocalDate dob;

    @Size(max = 50, message = "{ME005.5}")
    private String gender;

    @NotNull(message = "{ME004}")
    private Boolean isActive;

    @NotBlank(message = "{ME004}")
    @Pattern(regexp = Constants.ROLE_REGEX, message = Constants.ROLE_ERROR)
    @Size(max = 50, message = "{ME005.5}")
    private String role;

    private LocalDate createdAt;
    private Instant modifiedAt;

}
