package com.example.contoller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import modelstu.stu;
import stuservice.stuservice;

@RestController
@CrossOrigin(origins="http://localhost:4200")  
public class stucontroller {

	
	@RequestMapping("/")
	public String dwivedi() {
		return "helloo Ankit kumar dwivedi ";
		
	}
	@GetMapping("/student")
	public List<stu>getAllStudents(){
	return stuservice.getAllStudents();
	}
	
	@PostMapping("/addstudent")
	public stu addStudent(@RequestBody stu student){
	return stuservice.addStudent(student);
	}
	
	@PutMapping("/updateemp/{stuid}")
	public stu updatestudent(@PathVariable Long stuid, @RequestBody stu student){
	return stuservice.updatestudent(stuid,student);
	}
	
	@DeleteMapping("/deleteemployee/{stuid}")
	public stu deleteStudent(@PathVariable Long stuid){
	return stuservice.deleteStudent(stuid);
	}

}
