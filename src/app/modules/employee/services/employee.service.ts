import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employeeDto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl: string | undefined;

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.api_base_url + "/employees";
  }

  getEmployees() {
    return this.http.get<Employee[]>('assets/dummydata/employees.json');
  }

  getEmployee() {
    return this.http.get<Employee>('assets/dummydata/employee.json');
  }

  
}
