import { Component, OnInit } from '@angular/core';
import { Shift } from '../../models/shiftDto';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ShiftService } from '../../services/shift.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html'
})
export class ShiftComponent implements OnInit {
  public shift : Shift;
  protected shiftForm: FormGroup;
  public isNewShift: boolean;

  constructor(
    private shiftService : ShiftService, 
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private router: Router
  )

  {
    this.shift = {} as Shift
    this.isNewShift = false;
    
    this.shiftForm = this.fb.group({
      startDateTime: new FormControl(null, [Validators.required]),
      endDateTime: new FormControl(null, [Validators.required]),
      department: new FormControl(null, [Validators.required]),
      departmentId: new FormControl(null, [Validators.required]),
    })  
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.setShift(params['id'])
      } else {
        this.isNewShift = true
      }
    });
  }

  private setShift(id : string): void {
    this.shiftService.getShift(id)
      .subscribe((data: Shift[]) => {
        console.log(data)
        this.shift = data[0];
        this.shiftForm.patchValue(data[0])
      });
  }

  public onUpdateShift(eventData: boolean) : void {
    this.shiftService.updateShift({id: this.shift.id, ...this.shiftForm.value}).subscribe(data => {
      this.router.navigate(['/', 'shifts'])
    });
  }

  public onSaveShift(eventData: boolean) : void {
    this.shiftService.postShift(this.shiftForm.value).subscribe(data => {
      this.router.navigate(['/', 'shifts'])
    });
  }

  public onDeleteShift(eventData: boolean) : void {
    console.log(this.shiftForm.value)
  }

}


