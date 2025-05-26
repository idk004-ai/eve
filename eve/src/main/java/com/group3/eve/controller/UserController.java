package com.group3.eve.controller;

import com.group3.eve.common.Constants;
import com.group3.eve.common.CustomResponse;

import java.util.List;
import java.util.Locale;

import com.group3.eve.dto.UserDTO;
import com.group3.eve.service.UserService;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
        Page<UserDTO> userPage = new PageImpl<>(users, PageRequest.of(pageNo, pageSize), users.size());
        return new CustomResponse<>(
                true,
                messageSource.getMessage(Constants.SUC001, null, Locale.getDefault()),
                userPage,
                null);
    }
}
