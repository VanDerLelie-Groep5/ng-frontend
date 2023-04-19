import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/orderDto';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StatusOptions } from '../../models/statusEnum';
import { ActivatedRoute } from '@angular/router';
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
  public priorityOptions : PriorityOptions[] = [PriorityOptions.LOW, PriorityOptions.NORMAL, PriorityOptions.LOW]

  constructor(private orderService : OrderService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.order = {} as Order
    this.isNewOrder = false;
    
    this.orderForm = this.fb.group({
      orderNumber: new FormControl('', [Validators.required]),
      customerGroup: new FormControl('', [Validators.required]),
      entryDate: new FormControl('', [Validators.required]),
      reference: new FormControl('', [Validators.required]),
      space: new FormControl('', [Validators.required]),
      status: new FormControl(StatusOptions.UNFINISHED, [Validators.required]),
      product: new FormControl('', [Validators.required]),
      fabricName: new FormControl('', [Validators.required]),
      ready: new FormControl('', [Validators.required]),
      departmentId: new FormControl('', [Validators.required]),
      shiftId: new FormControl('', [Validators.required]),
      priority: new FormControl(PriorityOptions.NORMAL, [Validators.required]),
      units: new FormControl('', [Validators.required])
    })  
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.setOrder()
      } else {
        this.isNewOrder = true
      }
    });
  }

  private setOrder(): void {
    this.orderService.getOrder()
      .subscribe((data: Order) => {
        this.order = data;
        this.orderForm.patchValue(data)
      });
  }

  onUpdateOrder(eventData: boolean) {
    console.log(this.orderForm.value)
  }

  onSaveOrder(eventData: boolean) {
    console.log(eventData)
  }

  onDeleteOrder(eventData: boolean) {
    console.log(eventData)
  }

  protected onSubmit() {
    console.log(this.orderForm.value);
  }
}
