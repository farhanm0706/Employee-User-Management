package com.employee.EmployeeManagementSystem.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employee.EmployeeManagementSystem.model.AddEmployee;
@Repository
public interface AddEmployeeRepository extends JpaRepository<AddEmployee,Integer> {
	public AddEmployee findByEmail(String email);
	public AddEmployee deleteByEmail(String email);
	

}
