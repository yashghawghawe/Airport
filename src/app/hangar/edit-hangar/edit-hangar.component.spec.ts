import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHangarComponent } from './edit-hangar.component';

describe('EditHangarComponent', () => {
  let component: EditHangarComponent;
  let fixture: ComponentFixture<EditHangarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHangarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHangarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
