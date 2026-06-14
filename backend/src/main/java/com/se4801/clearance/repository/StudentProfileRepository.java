package com.se4801.clearance.repository;

import com.se4801.clearance.model.StudentProfile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentProfileRepository extends JpaRepository<StudentProfile, Long> {
    Optional<StudentProfile> findByStudentId(String studentId);

    Optional<StudentProfile> findByUserId(Long userId);
}
