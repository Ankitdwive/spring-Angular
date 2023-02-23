import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http:HttpClient) { }
  updated(data:any, id:number){
    return this.http.put<any>("http://localhost:8080/updateemp/"+id,data)
   }
}
