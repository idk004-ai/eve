package com.group3.eve.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.time.Instant;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserId", nullable = false)
    private Integer id;

    @Size(max = 255)
    @Column(name = "FullName")
    private String fullName;

    @Size(max = 255)
    @Column(name = "Email")
    private String email;

    @Size(max = 255)
    @Column(name = "Username")
    private String username;

    @Size(max = 255)
    @Column(name = "Password")
    private String password;

    @Size(max = 50)
    @Column(name = "Phone", length = 50)
    private String phone;

    @Column(name = "DOB")
    private LocalDate dob;

    @Size(max = 50)
    @Column(name = "Gender", length = 50)
    private String gender;

    @ColumnDefault("1")
    @Column(name = "IsActive")
    private Boolean isActive;

    @Lob
    @Column(name = "Role")
    private String role;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "CreatedAt")
    private Instant createdAt;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "ModifiedAt")
    private Instant modifiedAt;

}