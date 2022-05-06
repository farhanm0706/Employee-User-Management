package com.employee.EmployeeManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employee.EmployeeManagementSystem.model.Feedback;
@Repository
public interface FeedbackRepository extends JpaRepository<Feedback,Integer> {

}
