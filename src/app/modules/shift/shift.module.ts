import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiftComponent } from './components/shift/shift.component';
import { ShiftsComponent } from './components/shifts/shifts.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ShiftComponent,
    ShiftsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ShiftModule { }
