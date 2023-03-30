export class Employee {
    private id : number;
    private employeeNumber : string;
    private firstName: string;
    private lastName: string;
    private emailAddress: string;
    private phoneNumber: string;
    private gender: string;
    private unitsPerHour: number;
    private preferenceDepartmentId: number;
  
    constructor(
        id: number,
        employeeNumber: string,
        firstName: string,
        lastName: string,
        emailAddress: string,
        phoneNumber: string,
        gender: string,
        unitsPerHour: number,
        preferenceDepartmentId: number
    ) 
    {
        this.id = id;
        this.employeeNumber = employeeNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.unitsPerHour = unitsPerHour;
        this.preferenceDepartmentId = preferenceDepartmentId;
    }
}