import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerNavComponent } from './container-nav.component';

describe('SideNavComponent', () => {
  let component: ContainerNavComponent;
  let fixture: ComponentFixture<ContainerNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
