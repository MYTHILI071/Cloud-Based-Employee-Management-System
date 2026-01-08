package dev.myth.EmployeeDashboard.controller;

import dev.myth.EmployeeDashboard.model.EmployeeKPI;
import dev.myth.EmployeeDashboard.model.KPI;
import dev.myth.EmployeeDashboard.model.PerformanceSummary;
import dev.myth.EmployeeDashboard.repository.*;
import dev.myth.EmployeeDashboard.repository.KpiRepository;
import org.springframework.web.bind.annotation.*;
import dev.myth.EmployeeDashboard.model.Appraisal;
import dev.myth.EmployeeDashboard.model.Feedback;


import java.util.List;

@RestController
@RequestMapping("/api/hr")
@CrossOrigin(origins = "http://localhost:5173")
public class HRController {

    private final KpiRepository kpiRepo;
    private final EmployeeKPIRepository employeeKPIRepo;
    private final AppraisalRepository appraisalRepository;
    private final FeedbackRepository feedbackRepository;
    private final PerformanceSummaryRepository summaryRepo;

    public HRController(
            KpiRepository kpiRepo,
            EmployeeKPIRepository employeeKPIRepo,
            AppraisalRepository appraisalRepository,
            FeedbackRepository feedbackRepository,
            PerformanceSummaryRepository summaryRepo) {

        this.kpiRepo = kpiRepo;
        this.employeeKPIRepo = employeeKPIRepo;
        this.appraisalRepository = appraisalRepository;
        this.feedbackRepository = feedbackRepository;
        this.summaryRepo = summaryRepo;
    }

    @GetMapping("/employee-kpis/{employeeId}")
    public List<EmployeeKPI> getEmployeeKPIs(@PathVariable int employeeId) {
        return employeeKPIRepo.findByEmployee_UserId(employeeId);
    }


    @GetMapping("/appraisals")
    public List<Appraisal> getAllAppraisals() {
        return appraisalRepository.findAll();
    }

    @GetMapping("/feedback")
    public List<Feedback> getAllFeedback() {
        return feedbackRepository.findAll();
    }

    @GetMapping("/analytics")
    public List<PerformanceSummary> getAnalytics() {
        List<PerformanceSummary> list = summaryRepo.findAll();
        System.out.println(list);
        return list;
    }


    // CREATE KPI
    @PostMapping("/kpis")
    public KPI createKPI(@RequestBody KPI kpi) {
        return kpiRepo.save(kpi);
    }

    // GIVE FEEDBACK
    @PostMapping("/feedback")
    public Feedback giveFeedback(@RequestBody Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    // SUBMIT APPRAISAL
    @PostMapping("/appraisals")
    public Appraisal submitAppraisal(@RequestBody Appraisal appraisal) {
        return appraisalRepository.save(appraisal);
    }

}
