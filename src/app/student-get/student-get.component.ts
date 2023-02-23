import { Component, OnInit } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Model } from '../Model/model';
import { ModelService } from '../service/model.service';

@Component({
  selector: 'app-student-get',
  templateUrl: './student-get.component.html',
  styleUrls: ['./student-get.component.css']
})
export class StudentGetComponent implements OnInit {
  modelobj:Model=new Model
  frm!:FormGroup;
  alldata:any;
    constructor(private fb:FormBuilder,private http:HttpClient, private apiser:ModelService,private route:Router){}
  
  
  
    ngOnInit(): void {
      this.frm=this.fb.group({
        username:[''],
        password:['']
      
        })
     this.Getdata();
    }
can(){
  this.show=false;
}

  Getdata(){
    this.http.get<any>("http://localhost:8080/student").subscribe(res=>{
      this.alldata=res;
    },error=>{
      alert("not show")
    })
  }
  
 
  DeleteData(id:number){
    this.http.delete<any>("http://localhost:8080/deleteemployee/"+id).subscribe((res)=>{
      alert("data deleted succesfull");
      this.Getdata();
  },
  error=>{

  alert("not delete")
    })
  }
  show=false;
  onedit(data:any){
    this.show=true;
    this.modelobj.id=data.id
    this.frm.controls['username'].setValue(data.username),
    this.frm.controls['password'].setValue(data.password)
    
  } 
  /*up(){
    this.modelobj.name=this.frm.value.name;
    this.modelobj.address=this.frm.value.address;
  this.modelobj.mobile=this.frm.value.mobile;
  this.modelobj.password=this.frm.value.password;
  console.log(this.modelobj, this.modelobj.id+" updated")
  this.Api.updated( this.modelobj.id).subscribe(res=>{
  alert("updated")
  })*/
  
  
 
  
  up(){
  
  this.modelobj.username=this.frm.value.username;
  
  this.modelobj.password=this.frm.value.password;
  this.apiser.updated(this.modelobj,this.modelobj.id) .subscribe(res=>{
  alert("data update successfully");
  this.Getdata();
  })}


}
