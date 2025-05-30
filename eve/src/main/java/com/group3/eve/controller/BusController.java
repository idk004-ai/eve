package com.group3.eve.controller;

import com.group3.eve.common.Constants;
import com.group3.eve.common.CustomResponse;
import com.group3.eve.dto.BusDTO;
import com.group3.eve.service.BusService;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping("/api/buses")
public class BusController {
    private final BusService busService;
    private final MessageSource messageSource;

    public BusController(BusService busService, MessageSource messageSource) {
        this.busService = busService;
        this.messageSource = messageSource;
    }

    @GetMapping
    public CustomResponse<Page<BusDTO>> getAllUsers(
            @RequestParam(value = "pageNo", defaultValue = "0", required = false) int pageNo,
            @RequestParam(value = "pageSize", defaultValue = "10", required = false) int pageSize
    ) {
        List<BusDTO> buses = busService.findAll(pageNo, pageSize);
        long totalElements = busService.countAll();
        Page<BusDTO> busPage = new PageImpl<>(buses, PageRequest.of(pageNo, pageSize), totalElements);
        return new CustomResponse<>(
                true,
                messageSource.getMessage(Constants.SUC001, null, Locale.getDefault()),
                busPage,
                null);
    }
}
