package dev.myth.EmployeeDashboard.dto;

public class LoginResponse {

    private int userId;
    private String name;
    private String role;

    public LoginResponse(int userId, String name, String role) {
        this.userId = userId;
        this.name = name;
        this.role = role;
    }

    public int getUserId() {
        return userId;
    }

    public String getName() {
        return name;
    }

    public String getRole() {
        return role;
    }
}
