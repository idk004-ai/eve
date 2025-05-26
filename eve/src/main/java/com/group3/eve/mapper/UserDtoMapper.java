package com.group3.eve.mapper;

import com.group3.eve.dto.UserDTO;
import com.group3.eve.model.User;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.ZoneId;

@Component
public class UserDtoMapper {

    public UserDTO mapToDTO(User user) {
        if (user == null) {
            return null;
        }

        UserDTO responseDTO = new UserDTO();
        responseDTO.setId(user.getId());
        responseDTO.setFullName(user.getFullName());
        responseDTO.setEmail(user.getEmail());
        responseDTO.setUsername(user.getUsername());
        responseDTO.setPhone(user.getPhone());
        responseDTO.setDob(user.getDob());
        responseDTO.setGender(user.getGender());
        responseDTO.setIsActive(user.getIsActive());
        responseDTO.setRole(user.getRole());
        responseDTO.setCreatedAt(user.getCreatedAt() != null ?
                user.getCreatedAt().atZone(ZoneId.systemDefault()).toLocalDate() : null);
        responseDTO.setModifiedAt(user.getModifiedAt());

        return responseDTO;
    }

    public User mapToEntity(UserDTO userDTO) {
        if (userDTO == null) {
            return null;
        }

        User user = new User();
        user.setId(userDTO.getId());
        user.setFullName(userDTO.getFullName());
        user.setEmail(userDTO.getEmail());
        user.setUsername(userDTO.getUsername());
        user.setPhone(userDTO.getPhone());
        user.setDob(userDTO.getDob());
        user.setGender(userDTO.getGender());
        user.setIsActive(userDTO.getIsActive());
        user.setRole(userDTO.getRole());
        user.setCreatedAt(Instant.now()); // Simply use current time
        user.setModifiedAt(Instant.now());

        return user;
    }
}
