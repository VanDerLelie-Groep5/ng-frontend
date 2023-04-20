import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employeeDto';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl: string | undefined;

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.api_base_url + "/Employee";
  }

  getEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl!);
  }

  getEmployee(id : string) : Observable<Employee> {
    return this.http.get<Employee>(this.apiUrl! + `/${id}`);
  }

  postEmployee(employee : Employee) : Observable<Object> {
    return this.http.post<Object>(this.apiUrl!, employee);
  }

  updateEmployee(employee : Employee) : Observable<Object> {
    return this.http.put<Object>(this.apiUrl!, employee);
  }

  
}
