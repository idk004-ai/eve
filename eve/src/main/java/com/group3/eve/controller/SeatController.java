package com.group3.eve.controller;

import com.group3.eve.common.Constants;
import com.group3.eve.common.CustomResponse;
import com.group3.eve.dto.SeatDTO;
import com.group3.eve.service.SeatService;
import org.springframework.context.MessageSource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping("/api")
public class SeatController {
    private final SeatService seatService;
    private final MessageSource messageSource;

    public SeatController(SeatService busService, MessageSource messageSource) {
        this.seatService = busService;
        this.messageSource = messageSource;
    }

    @GetMapping("/bus/{id}")
    public CustomResponse<List<SeatDTO>> getSeatByBusId(@PathVariable int id) {
        List<SeatDTO> seatDTO = seatService.findSeatsByBusId(id);
        return new CustomResponse<>(
                true,
                messageSource.getMessage(Constants.SUC001, null, Locale.getDefault()),
                seatDTO,
                null);
    }

}
