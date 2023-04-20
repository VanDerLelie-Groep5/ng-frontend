import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiftComponent } from './components/shift/shift.component';
import { ShiftsComponent } from './components/shifts/shifts.component';



@NgModule({
  declarations: [
    ShiftComponent,
    ShiftsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShiftModule { }
