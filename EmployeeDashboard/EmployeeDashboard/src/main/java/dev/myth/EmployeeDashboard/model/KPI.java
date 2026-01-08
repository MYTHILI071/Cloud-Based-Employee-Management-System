package dev.myth.EmployeeDashboard.model;

import jakarta.persistence.*;

@Entity
@Table(name = "kpis")
public class KPI {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "kpi_id")
    private int kpiId;

    @Column(name = "kpi_name")
    private String kpiName;

    private String description;

    public int getKpiId() { return kpiId; }
    public String getKpiName() { return kpiName; }
    public String getDescription() { return description; }
}
