package dev.myth.EmployeeDashboard.service;

import org.springframework.stereotype.Service;
import dev.myth.EmployeeDashboard.repository.UserRepository;
import dev.myth.EmployeeDashboard.model.User;

@Service
public class AuthService {

    private final UserRepository userRepo;

    public AuthService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public User login(String email, String password) {
        User user = userRepo.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
}
