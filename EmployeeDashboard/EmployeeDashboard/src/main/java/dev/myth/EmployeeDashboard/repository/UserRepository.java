package dev.myth.EmployeeDashboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import dev.myth.EmployeeDashboard.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
