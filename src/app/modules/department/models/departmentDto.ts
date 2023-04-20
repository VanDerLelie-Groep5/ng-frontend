import { Shift } from "../../shift/models/shiftDto";

export class Department {
    public id : number;
    public departmentNumber : string;
    public name: string;
    public maxEmployees: number;
    public shifts: Shift[];
    public createdAt: Date;
    public updatedAt: Date;
  
    constructor(
        id: number,
        departmentNumber: string,
        name: string,
        maxEmployees: number,
        shifts: Shift[],
        createdAt: Date,
        updatedAt: Date
        
    ) 
    {
        this.id = id;
        this.departmentNumber = departmentNumber;
        this.name = name;
        this.maxEmployees = maxEmployees;
        this.shifts = shifts;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}