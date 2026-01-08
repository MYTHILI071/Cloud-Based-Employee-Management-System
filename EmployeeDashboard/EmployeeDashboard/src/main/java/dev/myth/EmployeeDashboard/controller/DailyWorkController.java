package dev.myth.EmployeeDashboard.controller;

import dev.myth.EmployeeDashboard.model.DailyWork;
import dev.myth.EmployeeDashboard.model.User;
import dev.myth.EmployeeDashboard.repository.DailyWorkRepository;
import dev.myth.EmployeeDashboard.repository.UserRepository;
import dev.myth.EmployeeDashboard.dto.DailyWorkRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employee")
@CrossOrigin(origins = "http://localhost:5173")
public class DailyWorkController {

    private final DailyWorkRepository dailyWorkRepository;
    private final UserRepository userRepository;

    public DailyWorkController(DailyWorkRepository dailyWorkRepository,
                               UserRepository userRepository) {
        this.dailyWorkRepository = dailyWorkRepository;
        this.userRepository = userRepository;
    }

    // ==========================
    // SAVE DAILY WORK
    // ==========================
    @PostMapping("/daily-work")
    public DailyWork saveDailyWork(@RequestBody DailyWorkRequest request) {

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        DailyWork work = new DailyWork();
        work.setEmployee(user);
        work.setWorkDate(request.getWorkDate());
        work.setDescription(request.getDescription());
        work.setHoursWorked(request.getHoursWorked());

        return dailyWorkRepository.save(work);
    }


    // ==========================
    // FETCH DAILY WORK
    // ==========================
    @GetMapping("/daily-work/{userId}")
    public List<DailyWork> getDailyWork(@PathVariable Long userId) {

        User employee = userRepository
                .findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return dailyWorkRepository.findByEmployee(employee);
    }

}
