import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employeeDto';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit {

  private employees : Employee[];

  constructor() {
    this.employees = []
  }

  ngOnInit(): void {
    this.employees = [{} as Employee]
  }

  

}
