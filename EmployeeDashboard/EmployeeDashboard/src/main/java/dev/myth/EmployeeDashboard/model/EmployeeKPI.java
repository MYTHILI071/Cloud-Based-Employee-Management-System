package dev.myth.EmployeeDashboard.model;

import jakarta.persistence.*;

@Entity
@Table(name = "employee_kpis")
public class EmployeeKPI {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int recordId;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private User employee;

    @ManyToOne
    @JoinColumn(name = "kpi_id")
    private KPI kpi;

    private int score;

    // getters & setters
}
