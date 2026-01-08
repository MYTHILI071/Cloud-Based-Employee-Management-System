package dev.myth.EmployeeDashboard.controller;

import dev.myth.EmployeeDashboard.dto.LoginRequest;
import dev.myth.EmployeeDashboard.dto.LoginResponse;
import dev.myth.EmployeeDashboard.model.User;
import dev.myth.EmployeeDashboard.repository.UserRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UserRepository userRepo;

    public AuthController(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {

        User user = userRepo.findByEmail(loginRequest.getEmail());

        if (user == null ||
                !user.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid credentials");
        }

        LoginResponse response = new LoginResponse(
                user.getUserId(),
                user.getName(),
                user.getRole().getRoleName()
        );

        return ResponseEntity.ok(response);
    }
}
