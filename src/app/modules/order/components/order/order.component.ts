import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/orderDto';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StatusOptions } from '../../models/statusEnum';
import { ActivatedRoute, Router } from '@angular/router';
import { PriorityOptions } from '../../models/priorityEnum';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  public order : Order;
  protected orderForm: FormGroup;
  public isNewOrder: boolean;

  public statusOptions : StatusOptions[] = [StatusOptions.FINISHED, StatusOptions.UNFINISHED]
  public priorityOptions : PriorityOptions[] = [PriorityOptions.HIGH, PriorityOptions.NORMAL, PriorityOptions.LOW]

  public shiftTableColumns : string[] = [
    "Id",
    "Startdatum",
    "Einddatum",
    "Mpg - Afdeling"
  ]

  constructor(
    private orderService : OrderService, 
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private router: Router) 
    {

    this.order = {} as Order
    this.isNewOrder = false;
    
    this.orderForm = this.fb.group({
      orderNumber: new FormControl(null, [Validators.required]),
      customerGroup: new FormControl(null, [Validators.required]),
      entryDate: new FormControl(null, [Validators.required]),
      reference: new FormControl(null, [Validators.required]),
      space: new FormControl(null, [Validators.required]),
      status: new FormControl(StatusOptions.UNFINISHED, [Validators.required]),
      product: new FormControl(null, [Validators.required]),
      fabricName: new FormControl(null, [Validators.required]),
      ready: new FormControl(null, [Validators.required]),
      shiftId: new FormControl(null, [Validators.required]),
      priority: new FormControl(PriorityOptions.NORMAL, [Validators.required]),
      units: new FormControl(null, [Validators.required])
    })  
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.setOrder(params['id'])
      } else {
        this.isNewOrder = true
      }
    });
  }

  private setOrder(id : string): void {
    this.orderService.getOrder(id)
      .subscribe((data: Order[]) => {
        console.log(data)
        this.order = data[0];
        this.orderForm.patchValue(data[0])
      });
  }

  public onUpdateOrder(eventData: boolean) : void {
    this.orderService.updateOrder({id: this.order.id, ...this.orderForm.value}).subscribe(data => {
      this.router.navigate(['/', 'orders'])
    });
  }

  public onSaveOrder(eventData: boolean) : void {
    this.orderService.postOrder(this.orderForm.value).subscribe(data => {
      this.router.navigate(['/', 'orders'])
    });
  }

  public onDeleteOrder(eventData: boolean) : void {
    console.log(this.orderForm.value)
  }


}
