package com.employee.EmployeeManagementSystem.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class AddEmployee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int employeeId;
	
    private String email;
    private String password;
	public AddEmployee() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AddEmployee(int employeeId, String email, String password) {
		super();
		this.employeeId = employeeId;
		this.email = email;
		this.password = password;
	}
	
	public AddEmployee(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}


}
