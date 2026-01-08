package dev.myth.EmployeeDashboard.repository;

import dev.myth.EmployeeDashboard.model.KPI;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KpiRepository extends JpaRepository<KPI, Integer> {}
