import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../models/employeeDto';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Gender } from '../../models/genderEnum';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {

  public employee : Employee;
  protected employeeForm: FormGroup;
  public isNewEmployee: boolean;

  public genderOptions : Gender[] = [Gender.MALE, Gender.FEMALE]

  constructor(private employeeService : EmployeeService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.employee = {} as Employee;
    this.isNewEmployee = false;
    
    this.employeeForm = this.fb.group({
      employeeNumber: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      unitsPerHour: new FormControl('', [Validators.required]),
      preferenceDepartmentId: new FormControl('', [Validators.required])
    })  
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.setEmployee()
      } else {
        this.isNewEmployee = true
      }
    });
  }

  private setEmployee(): void {
    this.employeeService.getEmployee()
      .subscribe((data: Employee) => {
        this.employee = data;
        this.employeeForm.patchValue(data)
      });
  }

  onUpdateEmployee(eventData: boolean) {
    console.log(this.employeeForm.value)
  }

  onSaveEmployee(eventData: boolean) {
    console.log(eventData)
  }

  onDeleteEmployee(eventData: boolean) {
    console.log(eventData)
  }

}
