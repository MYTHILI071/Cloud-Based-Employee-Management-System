package dev.myth.EmployeeDashboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import dev.myth.EmployeeDashboard.model.EmployeeKPI;
import java.util.List;

public interface EmployeeKPIRepository extends JpaRepository<EmployeeKPI, Integer> {

    List<EmployeeKPI> findByEmployee_UserId(int userId);
}


