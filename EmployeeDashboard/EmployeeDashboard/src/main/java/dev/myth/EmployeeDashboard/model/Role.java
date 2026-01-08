package dev.myth.EmployeeDashboard.model;

import jakarta.persistence.*;

@Entity
@Table(name = "roles")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id")
    private int roleId;

    @Column(name = "role_name")
    private String roleName;

    public int getRoleId() { return roleId; }
    public String getRoleName() { return roleName; }
}
