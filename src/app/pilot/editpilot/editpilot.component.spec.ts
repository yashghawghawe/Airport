import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpilotComponent } from './editpilot.component';

describe('EditpilotComponent', () => {
  let component: EditpilotComponent;
  let fixture: ComponentFixture<EditpilotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpilotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
