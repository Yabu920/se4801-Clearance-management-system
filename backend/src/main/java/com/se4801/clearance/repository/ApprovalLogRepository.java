package com.se4801.clearance.repository;

import com.se4801.clearance.model.ApprovalLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApprovalLogRepository extends JpaRepository<ApprovalLog, Long> {
}
