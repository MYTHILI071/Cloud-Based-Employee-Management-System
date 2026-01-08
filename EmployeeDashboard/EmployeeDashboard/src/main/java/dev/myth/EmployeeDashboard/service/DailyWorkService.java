package dev.myth.EmployeeDashboard.service;

import dev.myth.EmployeeDashboard.model.DailyWork;
import dev.myth.EmployeeDashboard.repository.DailyWorkRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DailyWorkService {

    private final DailyWorkRepository repo;

    public DailyWorkService(DailyWorkRepository repo) {
        this.repo = repo;
    }

    public DailyWork getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public DailyWork save(DailyWork work) {
        return repo.save(work);
    }
}
