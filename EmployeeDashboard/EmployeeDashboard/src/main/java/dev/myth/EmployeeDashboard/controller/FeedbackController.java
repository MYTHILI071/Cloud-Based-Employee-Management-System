package dev.myth.EmployeeDashboard.controller;

import dev.myth.EmployeeDashboard.model.Feedback;
import dev.myth.EmployeeDashboard.repository.FeedbackRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/feedback")
@CrossOrigin(origins = "http://localhost:5174")
public class FeedbackController {

    private final FeedbackRepository repo;

    public FeedbackController(FeedbackRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Feedback giveFeedback(@RequestBody Feedback feedback) {
        return repo.save(feedback);
    }

    @GetMapping("/from/{userId}")
    public List<Feedback> feedbackByUser(@PathVariable int userId) {
        return repo.findByFromUserId(userId);
    }
}
