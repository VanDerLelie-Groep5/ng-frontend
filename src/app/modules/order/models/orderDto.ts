export class Order {
    public id : string;
    public orderNumber: string;
    public customerGroup: string;
    public entryDate: Date;
    public reference: string;
    public space: string;
    public status: string;
    public product: string;
    public fabricName: string;
    public ready: Date;
    public mpg: number;
    public units: number;
  
    constructor(
        id : string,
        orderNumber: string,
        customerGroup: string,
        entryDate: Date,
        reference: string,
        space: string,
        status: string,
        product: string,
        fabricName: string,
        ready: Date,
        mpg: number,
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
        this.mpg = mpg;
        this.units = units;
    }
}