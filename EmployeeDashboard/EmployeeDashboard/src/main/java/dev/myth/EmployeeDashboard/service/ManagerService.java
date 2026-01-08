package dev.myth.EmployeeDashboard.service;

import org.springframework.stereotype.Service;
import java.util.List;
import dev.myth.EmployeeDashboard.repository.DailyWorkRepository;
import dev.myth.EmployeeDashboard.model.DailyWork;

@Service
public class ManagerService {

    private final DailyWorkRepository repo;

    public ManagerService(DailyWorkRepository repo) {
        this.repo = repo;
    }

    public List<DailyWork> getAllWork() {
        return repo.findAll();
    }

    public DailyWork approveWork(Long id) {
        DailyWork work = repo.findById(id).orElse(null);
        return repo.save(work);
    }

}
