package dev.myth.EmployeeDashboard.repository;

import dev.myth.EmployeeDashboard.model.DailyWork;
import dev.myth.EmployeeDashboard.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DailyWorkRepository extends JpaRepository<DailyWork, Long> {

    List<DailyWork> findByEmployee(User employee);
}
