package com.smarthire.backend.jobs;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "http://localhost:5173")
public class JobController {

  private final JobRepository repo;

  public JobController(JobRepository repo) {
    this.repo = repo;
  }

  // Create job (DRAFT or PUBLISHED)
  @PostMapping
  public ResponseEntity<Job> create(@RequestBody Job job) {
    Job saved = repo.save(job);
    return ResponseEntity.status(201).body(saved);
  }

  // List ONLY published jobs
  @GetMapping
  public List<Job> listPublished() {
    return repo.findByStatusOrderByIdDesc(Job.Status.PUBLISHED);
  }

  // Job details by id
  @GetMapping("/{id}")
  public ResponseEntity<Job> getById(@PathVariable Long id) {
    return repo.findById(id)
      .map(ResponseEntity::ok)
      .orElse(ResponseEntity.notFound().build());
  }
}
