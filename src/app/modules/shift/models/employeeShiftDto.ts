import { Employee } from "../../employee/models/employeeDto";
import { Shift } from "./shiftDto";


export class EmployeeShift {
    public id: number;
    public employeeId: number;
    public shiftId: number;
    public employee: Employee | string;
    public shift: Shift | string;
    public startDateTime: Date;
    public endDateTime: Date;
    public createdAt: Date;
    public updatedAt: Date;
  
    constructor(
        id: number,
        employeeId: number,
        shiftId: number,
        employee: Employee | string,
        shift: Shift | string,
        startDateTime: Date,
        endDateTime: Date,
        createdAt: Date,
        updatedAt: Date)
    {
        this.id = id;
        this.employeeId = employeeId;
        this.shiftId = shiftId;
        this.employee = employee;
        this.shift = shift;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}