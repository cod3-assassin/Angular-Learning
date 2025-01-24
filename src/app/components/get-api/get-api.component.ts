import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {


  useList :any []=[];
  employeeList:any[]=[];

  constructor(private http:HttpClient){


  }
  getUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      this.useList = result
    })
  }

  getEmployee(){
    this.http.get("https://projectapi.gerasim.in/api/employeeManagement/GetAllEmployees").subscribe((result:any)=>{
      this.employeeList = result
    })
  }
}
