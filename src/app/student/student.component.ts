import { Component, OnInit } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Model } from '../Model/model';
import { ModelService } from '../service/model.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  modelo:Model=new Model
  frm!:FormGroup;
  alldata:any;
    constructor(private fb:FormBuilder,private http:HttpClient, private apiser:ModelService,private route:Router){}
  
  
  
    ngOnInit(): void {
      this.frm=this.fb.group({
        username:[''],
        password:['']
      
        })
     // this.Getdata();
    }
    AddData(){
      this.http.post<any>("http://localhost:8080/addstudent",this.frm.value).subscribe(res=>{
        this.alldata=res;
       
         
        console.log(this.alldata)
        alert("data Register Successfully thanks visit my side");
        
  
    },
    error=>{
      alert("not");
      })}

}
