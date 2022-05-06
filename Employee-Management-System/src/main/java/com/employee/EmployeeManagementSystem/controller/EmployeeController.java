package com.employee.EmployeeManagementSystem.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.employee.EmployeeManagementSystem.exception.ResourceNotFoundException;
import com.employee.EmployeeManagementSystem.model.AddEmployee;
import com.employee.EmployeeManagementSystem.model.EmployeeDetails;
import com.employee.EmployeeManagementSystem.model.Feedback;
import com.employee.EmployeeManagementSystem.repository.AddEmployeeRepository;
import com.employee.EmployeeManagementSystem.repository.EmployeeDetailsRepository;
import com.employee.EmployeeManagementSystem.repository.FeedbackRepository;

@CrossOrigin(origins = "http://localhost:62726")
@RestController
@RequestMapping("/employeemanagementsystem/")
public class EmployeeController {
	@Autowired
	private AddEmployeeRepository addemprepo;
	@Autowired
	private EmployeeDetailsRepository  emprepo;
	@Autowired
	private FeedbackRepository feedrepo;
	

	@PostMapping("/addemp")
	public AddEmployee addEmployee(@RequestBody AddEmployee addemp) {
		return addemprepo.save(addemp);
	}
	
	@PostMapping("/addempdetails")
	public EmployeeDetails addEmpDetails(@RequestBody EmployeeDetails addempdet) {
		return emprepo.save(addempdet);
	}
	
	@PutMapping("/editemp/{employeeId}")
	public ResponseEntity<AddEmployee> updateEmployee(@PathVariable Integer employeeId, @RequestBody AddEmployee editemp) {
		AddEmployee employee = addemprepo.findById(employeeId).orElseThrow(()-> new ResourceNotFoundException("Data Not found with Id :"+employeeId));
		employee.setEmail(editemp.getEmail());
		employee.setPassword(editemp.getPassword());
		employee.setEmployeeId(editemp.getEmployeeId());
		AddEmployee updatedEmployee = addemprepo.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}
	
	@PutMapping("/editempdetails/{empId}")
	public ResponseEntity<EmployeeDetails> updateEmployeeDetails(@PathVariable Integer empId, @RequestBody EmployeeDetails editempdet) {
		EmployeeDetails employee = emprepo.findById(empId).orElseThrow(()-> new ResourceNotFoundException("Data Not found with Id :"+empId));
		employee.setName(editempdet.getName());
		employee.setMobileNo(editempdet.getMobileNo());
		employee.setEmail(editempdet.getEmail());
		employee.setFatherName(editempdet.getFatherName());
		employee.setMotherName(editempdet.getMotherName());
		employee.setAadharNo(editempdet.getAadharNo());
		employee.setPanNo(editempdet.getPanNo());
		employee.setAccNo(editempdet.getAccNo());
		employee.setIfscNo(editempdet.getIfscNo());
		employee.setEmpId(editempdet.getEmpId());
		EmployeeDetails updatedEmployee = emprepo.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}
	
//	@DeleteMapping("/deleteemployee")
//	public String deleteAllEmployee() {
//		String result = "";
//		try {	
//			addemprepo.deleteAll();
//			result = "all records deleted";
//		}
//		catch(Exception e) {
//			result = "error occurred";
//		}
//		
//		return result;
//	}
//	@DeleteMapping("/deleteemployeedetails")
//	public String deleteAllEmployeeDetails() {
//		String result = "";
//		try {	
//			emprepo.deleteAll();
//			result = "all records deleted";
//		}
//		catch(Exception e) {
//			result = "error occurred";
//		}
//		
//		return result;
//	}
//	
	@DeleteMapping("/deleteemp/{employeeId}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployeeById(@PathVariable int employeeId) {
		AddEmployee employee = addemprepo.findById(employeeId).orElseThrow(()-> new ResourceNotFoundException("Data Not found with Id :"+employeeId));
			addemprepo.delete(employee);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		
	}

	@DeleteMapping("/deleteempdetails/{empId}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployeeDetailsById(@PathVariable int empId) {
			emprepo.deleteById(empId);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
	}
	
	@GetMapping("/getallemployee")
	public List<AddEmployee> getAllEmployee() {
		return addemprepo.findAll();
	}
	@GetMapping("/getallemployeeDetails")
	public List<EmployeeDetails> getAllEmployeeDetails() {
		return emprepo.findAll();
	}
	
	@GetMapping("/getemployeebyid/{employeeId}")
	public Optional<AddEmployee> getEmployeeById(@PathVariable int employeeId) {
		return addemprepo.findById(employeeId);
	}
	@GetMapping("/getemployeedetailsbyid/{empId}")
	public Optional<EmployeeDetails> getEmployeeDetailsById(@PathVariable int empId) {
		return emprepo.findById(empId);
	}
	@PostMapping("/addfeedbackdetails")
	public Feedback addFeedback(@RequestBody Feedback fd) {
		return feedrepo.save(fd);
	}
    @GetMapping("/getallfeedback")
    public List<Feedback> getFeedback(){
    	return feedrepo.findAll();
    }
    @DeleteMapping("/deletefeedback/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteFeedbackById(@PathVariable int id) {
			feedrepo.deleteById(id);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
	}
    
   
    
    


	
	
	//@PostMapping("/login")
//	public boolean checkUser(@RequestBody AddEmployee data) {
//		System.out.println(data);
//		AddEmployee user = addemprepo.findByEmail(data.getEmail());
//		if(user.isEmpty()) {
//			System.out.println("false");
//			return false;
//		}else {
//			if(user.get().getPassword().equals(data.getPassword())) {
//				System.out.println("true");
//				return true;				
//			}else {
//				System.out.println("false");
//				return false;
//			}
//		}
	//}
}
