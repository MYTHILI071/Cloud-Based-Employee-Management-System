package dev.myth.EmployeeDashboard.repository;

import dev.myth.EmployeeDashboard.model.PerformanceSummary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PerformanceSummaryRepository extends JpaRepository<PerformanceSummary, Integer> {
}
