import { Component } from '@angular/core';
import { Shift } from '../../models/shiftDto';
import { ShiftService } from '../../services/shift.service';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html'
})
export class ShiftsComponent {
  public shifts : Shift[];
  public shiftTableColNames = new Array()

  constructor(private shiftService : ShiftService) {
    this.shifts = new Array({} as Shift)

    this.shiftTableColNames = [
      "Id",
      "Starttijd",
      "Eindtijd",
      "Mpg - Afdeling",
      "Capaciteit"
    ]
  }

  ngOnInit(): void {
    this.setShifts()
  }

  private setShifts(): void {
    this.shiftService.getShifts()
      .subscribe((data: Shift[]) => this.shifts = data);
  }

}
