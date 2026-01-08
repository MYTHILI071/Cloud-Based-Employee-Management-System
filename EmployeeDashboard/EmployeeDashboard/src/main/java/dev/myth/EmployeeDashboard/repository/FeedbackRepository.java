package dev.myth.EmployeeDashboard.repository;

import dev.myth.EmployeeDashboard.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {
    List<Feedback> findByFromUserId(int fromUserId);
}
