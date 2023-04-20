import { Shift } from "../../shift/models/shiftDto";
import { PriorityOptions } from "./priorityEnum";
import { StatusOptions } from "./statusEnum";

export class Order {
    public id : number;
    public orderNumber: string;
    public customerGroup: string;
    public entryDate: Date;
    public reference: string;
    public space: string;
    public status: StatusOptions;
    public product: string;
    public fabricName: string;
    public ready: Date;
    public shift?: Shift;
    public shiftId?: number;
    public priority: PriorityOptions;
    public units: number;
    public createdAt: Date;
    public updatedAt: Date;
    
  
    constructor(
        id : number,
        orderNumber: string,
        customerGroup: string,
        entryDate: Date,
        reference: string,
        space: string,
        status: StatusOptions,
        product: string,
        fabricName: string,
        ready: Date,
        shift: Shift,
        shiftId: number,
        priority: PriorityOptions,
        units: number,
        createdAt: Date,
        updatedAt: Date)
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
        this.shift = shift;
        this.shiftId = shiftId;
        this.priority = priority;
        this.units = units;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}