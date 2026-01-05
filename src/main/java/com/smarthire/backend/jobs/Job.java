package com.smarthire.backend.jobs;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "jobs")
public class Job {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "job_title", nullable = false, length = 180)
  private String jobTitle;

  @Column(name = "company_name", nullable = false, length = 160)
  private String companyName;

  @Column(name = "location", nullable = false, length = 160)
  private String location;

  public enum JobType { FULL_TIME, PART_TIME, INTERNSHIP, REMOTE }
  public enum Category { IT, MARKETING, HEALTHCARE, FINANCE, DESIGN, SALES }
  public enum Status { DRAFT, PUBLISHED }

  @Enumerated(EnumType.STRING)
  @Column(name = "job_type", nullable = false)
  private JobType jobType;

  @Enumerated(EnumType.STRING)
  @Column(name = "category", nullable = false)
  private Category category;

  @Column(name = "salary_min")
  private Integer salaryMin;

  @Column(name = "salary_max")
  private Integer salaryMax;

  @Column(name = "experience_required_years")
  private Integer experienceRequiredYears;

  @Lob
  @Column(name = "job_description", nullable = false)
  private String jobDescription;

  @Lob
  @Column(name = "required_skills", nullable = false)
  private String requiredSkills;

  @Enumerated(EnumType.STRING)
  @Column(name = "status", nullable = false)
  private Status status = Status.DRAFT;

  @Column(name = "created_at", insertable = false, updatable = false)
  private LocalDateTime createdAt;

  @Column(name = "updated_at", insertable = false, updatable = false)
  private LocalDateTime updatedAt;
}
