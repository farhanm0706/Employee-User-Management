package com.employee.EmployeeManagementSystem.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Feedback {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private int id;
	
	private  String email;
	private String name;
	private String suggestion;
	public Feedback() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Feedback(String email, String name, String suggestion) {
		super();
		this.email = email;
		this.name = name;
		this.suggestion = suggestion;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSuggestion() {
		return suggestion;
	}
	public void setSuggestion(String suggestion) {
		this.suggestion = suggestion;
	}
	

}
