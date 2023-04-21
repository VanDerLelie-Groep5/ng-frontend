import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-container-fixed',
  templateUrl: './container-fixed.component.html'
})
export class ContainerFixedComponent {

  @Input() routerUrl: string = '';
  @Input() idTitle: string = '';
  @Input() newTitle: string = '';
  @Input() id?: number;
  @Input() isNew: boolean = false;

  @Output() updateButtonClicked = new EventEmitter<boolean>();
  @Output() saveButtonClicked = new EventEmitter<boolean>();
  @Output() deleteButtonClicked = new EventEmitter<boolean>();

  public onUpdateButtonClicked() {
    this.updateButtonClicked.emit(true)
  }

  public onSaveButtonClicked() {
    this.saveButtonClicked.emit(true)
  }

  public onDeleteButtonClicked() {
    this.deleteButtonClicked.emit(true)
  }
}
