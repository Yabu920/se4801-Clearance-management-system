package com.se4801.clearance.repository;

import com.se4801.clearance.model.ClearanceRequest;
import com.se4801.clearance.model.ClearanceRequestStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface ClearanceRequestRepository extends JpaRepository<ClearanceRequest, Long> {
    Page<ClearanceRequest> findByStudentProfileUserId(Long userId, Pageable pageable);

    boolean existsByStudentProfileUserIdAndStatusIn(Long userId, Collection<ClearanceRequestStatus> statuses);
}
