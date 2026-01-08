package dev.myth.EmployeeDashboard.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "appraisals")
public class Appraisal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int appraisalId;

    private int employeeId;
    private int managerId;
    private LocalDate appraisalDate;
    private int rating;
    private String comments;

    // getters and setters
}
