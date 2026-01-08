package dev.myth.EmployeeDashboard.controller;

import dev.myth.EmployeeDashboard.model.Appraisal;
import dev.myth.EmployeeDashboard.model.PerformanceSummary;
import dev.myth.EmployeeDashboard.repository.AppraisalRepository;
import dev.myth.EmployeeDashboard.repository.PerformanceSummaryRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/manager")
@CrossOrigin(origins = "http://localhost:5173")
public class ManagerController {

    private final AppraisalRepository appraisalRepo;
    private final PerformanceSummaryRepository performanceRepo;

    public ManagerController(
            AppraisalRepository appraisalRepo,
            PerformanceSummaryRepository performanceRepo) {
        this.appraisalRepo = appraisalRepo;
        this.performanceRepo = performanceRepo;
    }

    // POST – submit review
    @PostMapping("/review")
    public Appraisal submitReview(@RequestBody Appraisal appraisal) {
        return appraisalRepo.save(appraisal);
    }

    // GET – view own reviews
    @GetMapping("/reviews/{managerId}")
    public List<Appraisal> getMyReviews(@PathVariable int managerId) {
        return appraisalRepo.findByManagerId(managerId);
    }

    // ✅ GET – TEAM PERFORMANCE (THIS FIXES YOUR ERROR)
    @GetMapping("/team-performance")
    public List<PerformanceSummary> getTeamPerformance() {
        return performanceRepo.findAll();
    }
}
