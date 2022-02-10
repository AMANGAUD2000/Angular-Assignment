import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  constructor() { }
  
  ngOnInit(): void {
  }
  submit(login:any){
    console.log("Form Submitted", login.value)
  }
}
