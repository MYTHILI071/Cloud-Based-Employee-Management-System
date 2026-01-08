package dev.myth.EmployeeDashboard.repository;

import dev.myth.EmployeeDashboard.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Integer> {
}
