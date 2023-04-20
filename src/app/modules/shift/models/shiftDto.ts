import { Department } from "../../department/models/departmentDto";
import { EmployeeShift } from "./employeeShiftDto";


export class Shift {
    public id : number;
    public startDateTime: Date;
    public endDateTime: Date;
    public department: Department;
    public departmentId: string;
    public employeeShifts: EmployeeShift[];
    public createdAt: Date;
    public updatedAt: Date;

  
    constructor(
        id : number,
        startDateTime: Date,
        endDateTime: Date,
        department: Department,
        departmentId: string,
        employeeShifts: EmployeeShift[],
        createdAt: Date,
        updatedAt: Date)
    {
        this.id = id;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.department = department;
        this.departmentId = departmentId;
        this.employeeShifts = employeeShifts;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}