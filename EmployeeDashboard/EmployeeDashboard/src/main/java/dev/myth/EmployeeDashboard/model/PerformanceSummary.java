package dev.myth.EmployeeDashboard.model;

import jakarta.persistence.*;

@Entity
@Table(name = "performance_summary")
public class PerformanceSummary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long summaryId;

    @Column(name = "employee_id")
    private int employeeId;

    private int totalScore;

    private String performanceLevel;

    // ✅ REQUIRED: PUBLIC GETTERS

    public Long getSummaryId() {
        return summaryId;
    }

    public int getEmployeeId() {
        return employeeId;
    }

    public int getTotalScore() {
        return totalScore;
    }

    public String getPerformanceLevel() {
        return performanceLevel;
    }

    // (setters optional for read-only analytics)
}
