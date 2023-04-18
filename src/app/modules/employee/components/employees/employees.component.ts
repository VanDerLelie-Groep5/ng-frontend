import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employeeDto';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit {

  public employees : Employee[];
  public employeeTableColNames = new Array()


  constructor(private employeeService : EmployeeService) {
    this.employees = new Array({} as Employee)
    this.setEmployees()

    this.employeeTableColNames = [
      "Id",
      "Nummer",
      "Voornaam",
      "Achternaam",
      "E-mailadres",
      "Geslacht",
      "Units / Ph"
    ]
  }

  ngOnInit(): void {
    console.log(this.employees)
  }

  private setEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe((data: Employee[]) => this.employees = data);
  }
}
