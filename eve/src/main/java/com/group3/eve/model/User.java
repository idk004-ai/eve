package com.group3.eve.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.time.Instant;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "user", uniqueConstraints = {
        @UniqueConstraint(name = "Email", columnNames = {"Email"}),
        @UniqueConstraint(name = "Username", columnNames = {"Username"})
})
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserId", nullable = false)
    private Integer id;

    @Size(max = 255)
    @NotNull
    @Column(name = "FullName", nullable = false)
    private String fullName;

    @Size(max = 255)
    @NotNull
    @Column(name = "Email", nullable = false)
    private String email;

    @Size(max = 255)
    @NotNull
    @Column(name = "Username", nullable = false)
    private String username;

    @Size(max = 255)
    @NotNull
    @Column(name = "Password", nullable = false)
    private String password;

    @Size(max = 50)
    @NotNull
    @Column(name = "Phone", nullable = false, length = 50)
    private String phone;

    @Lob
    @Column(name = "Address")
    private String address;

    @Size(max = 255)
    @Column(name = "LogoUrl")
    private String logoUrl;

    @Lob
    @Column(name = "License")
    private String license;

    @Column(name = "DOB")
    private LocalDate dob;

    @ColumnDefault("'male'")
    @Size(max = 50)
    @Column(name = "Gender", length = 50)
    private String gender;

    @ColumnDefault("1")
    @Column(name = "IsActive")
    private Boolean isActive;

    @ColumnDefault("'customer'")
    @Size(max = 50)
    @Column(name = "Role", length = 50)
    private String role;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "CreatedAt")
    private Instant createdAt;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "ModifiedAt")
    private Instant modifiedAt;

}
