export class Employee {
    public id : string;
    public employeeNumber : string;
    public firstName: string;
    public lastName: string;
    public emailAddress: string;
    public phoneNumber: string;
    public gender: string;
    public unitsPerHour: number;
    public preferenceDepartmentId: number;
  
    constructor(
        id: string,
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