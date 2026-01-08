package dev.myth.EmployeeDashboard.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "feedback")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int feedbackId;

    private int fromUserId;
    private int toUserId;
    private String feedbackText;
    private LocalDate feedbackDate;

    // getters and setters
}
