import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(
        () => TextInputComponent
      ),
      multi: true
    }
  ]
})
export class TextInputComponent implements ControlValueAccessor {
  protected value!: string;
  protected changed!: (value: string) => void;
  protected touched!: () => void;
  protected isDisabled: boolean = false;

  @Input() parentForm: FormGroup = new FormGroup({});
  @Input() fieldName: string = '';

  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;

  get formField (): FormControl {
    return this.parentForm.get(this.fieldName) as FormControl;
  }

  constructor() {}

  public writeValue(value: string): void {
    this.value = value;
  }

  public onChange(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;

    this.changed(value);
  }

  public registerOnChange(fn: any): void {
    this.changed = fn;
  }

  public registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
