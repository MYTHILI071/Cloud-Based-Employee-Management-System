package dev.myth.EmployeeDashboard.service;

import org.springframework.stereotype.Service;
import java.util.List;
import dev.myth.EmployeeDashboard.repository.UserRepository;
import dev.myth.EmployeeDashboard.repository.KpiRepository;
import dev.myth.EmployeeDashboard.model.*;

@Service
public class HRService {

    private final UserRepository userRepo;
    private final KpiRepository kpiRepo;

    public HRService(UserRepository userRepo, KpiRepository kpiRepo) {
        this.userRepo = userRepo;
        this.kpiRepo = kpiRepo;
    }

    public List<User> getAllEmployees() {
        return userRepo.findAll();
    }

    public KPI addKPI(KPI kpi) {
        return kpiRepo.save(kpi);
    }

    public List<KPI> getAllKPIs() {
        return kpiRepo.findAll();
    }
}
