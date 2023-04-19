import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerFixedComponent } from './container-fixed.component';

describe('ContainerFixedComponent', () => {
  let component: ContainerFixedComponent;
  let fixture: ComponentFixture<ContainerFixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerFixedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
