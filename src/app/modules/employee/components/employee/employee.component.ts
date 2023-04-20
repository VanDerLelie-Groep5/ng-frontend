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
      employeeNumber: new FormControl(null, [Validators.required]),
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      emailAddress: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      unitsPerHour: new FormControl(null, [Validators.required]),
      employeeShifts: new FormControl(null, [Validators.required]),
      preferenceDepartmentId: new FormControl(null, [Validators.required])
    })  
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.setEmployee(params['id'])
      } else {
        this.isNewEmployee = true
      }
    });
  }

  private setEmployee(id: string): void {
    this.employeeService.getEmployee(id)
      .subscribe((data: Employee) => {
        this.employee = data;
        this.employeeForm.patchValue(data)
      });
  }

  public onUpdateEmployee(eventData: boolean) : void {
    this.employeeService.updateEmployee({ id: this.employee.id, ...this.employeeForm.value}).subscribe(data => console.log(data));
  }

  public onSaveEmployee(eventData: boolean) : void {
    this.employeeService.postEmployee(this.employeeForm.value)
  }

  public onDeleteEmployee(eventData: boolean) : void {
    console.log(eventData)
  }

}
