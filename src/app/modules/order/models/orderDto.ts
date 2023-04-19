import { PriorityOptions } from "./priorityEnum";
import { StatusOptions } from "./statusEnum";

export class Order {
    public id : string;
    public orderNumber: string;
    public customerGroup: string;
    public entryDate: Date;
    public reference: string;
    public space: string;
    public status: StatusOptions;
    public product: string;
    public fabricName: string;
    public ready: Date;
    public departmentId: number;
    public shiftId?: number;
    public priority: PriorityOptions;
    public units: number;
  
    constructor(
        id : string,
        orderNumber: string,
        customerGroup: string,
        entryDate: Date,
        reference: string,
        space: string,
        status: StatusOptions,
        product: string,
        fabricName: string,
        ready: Date,
        departmentId: number,
        shiftId: number,
        priority: PriorityOptions,
        units: number)
    {
        this.id = id;
        this.orderNumber = orderNumber;
        this.customerGroup = customerGroup;
        this.entryDate = entryDate;
        this.reference = reference;
        this.space = space;
        this.status = status;
        this.product = product;
        this.fabricName = fabricName;
        this.ready = ready;
        this.departmentId = departmentId;
        this.shiftId = shiftId;
        this.priority = priority;
        this.units = units;
    }
}