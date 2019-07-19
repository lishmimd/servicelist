import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecompComponent } from './servicecomp.component';

describe('ServicecompComponent', () => {
  let component: ServicecompComponent;
  let fixture: ComponentFixture<ServicecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
