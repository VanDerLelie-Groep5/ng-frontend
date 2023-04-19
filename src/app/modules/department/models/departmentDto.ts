export class Department {
    public id : string;
    public departmentNumber : string;
    public name: string;
    public maxEmployees: number;
  
    constructor(
        id: string,
        departmentNumber: string,
        name: string,
        maxEmployees: number,
    ) 
    {
        this.id = id;
        this.departmentNumber = departmentNumber;
        this.name = name;
        this.maxEmployees = maxEmployees;
    }
}