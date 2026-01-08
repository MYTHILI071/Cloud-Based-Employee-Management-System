package dev.myth.EmployeeDashboard.repository;

import dev.myth.EmployeeDashboard.model.Appraisal;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AppraisalRepository extends JpaRepository<Appraisal, Integer> {
    List<Appraisal> findByManagerId(int managerId);
}
