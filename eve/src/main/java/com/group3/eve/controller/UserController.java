package com.group3.eve.controller;

import com.group3.eve.common.Constants;
import com.group3.eve.common.CustomResponse;

import java.util.List;
import java.util.Locale;

import com.group3.eve.dto.UserDTO;
import com.group3.eve.model.User;
import com.group3.eve.service.UserService;
import jakarta.validation.Valid;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    private final MessageSource messageSource;

    public UserController(UserService userService, MessageSource messageSource) {
        this.userService = userService;
        this.messageSource = messageSource;
    }

    @GetMapping
    public CustomResponse<Page<UserDTO>> getAllUsers(
            @RequestParam(value = "pageNo", defaultValue = "0", required = false) int pageNo,
            @RequestParam(value = "pageSize", defaultValue = "10", required = false) int pageSize
    ) {
        // Simulate a paginated response
        List<UserDTO> users = userService.findAll(pageNo, pageSize);
        long totalElements = userService.countAll();
        Page<UserDTO> userPage = new PageImpl<>(users, PageRequest.of(pageNo, pageSize), totalElements);
        return new CustomResponse<>(
                true,
                messageSource.getMessage(Constants.SUC001, null, Locale.getDefault()),
                userPage,
                null);
    }

    @GetMapping("{id}")
    public CustomResponse<UserDTO> getUserById(@PathVariable Integer id) {
        UserDTO userDto = userService.findByIdDTO(id);
        return new CustomResponse<>(
                true,
                messageSource.getMessage(Constants.SUC001, null, Locale.getDefault()),
                userDto,
                null);
    }

    @PostMapping
    public CustomResponse<UserDTO> createUser(@Valid @RequestBody UserDTO userDto) {
        User createdUser = userService.save(userDto);
        UserDTO createdUserDTO = userService.mapToDTO(createdUser);
        return new CustomResponse<>(
                true,
                messageSource.getMessage(Constants.SUC002, new Object[]{createdUserDTO.getEmail()}, Locale.getDefault()),
                createdUserDTO,
                null);
    }
}
