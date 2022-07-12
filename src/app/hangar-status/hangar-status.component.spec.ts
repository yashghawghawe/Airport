import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangarStatusComponent } from './hangar-status.component';

describe('HangarStatusComponent', () => {
  let component: HangarStatusComponent;
  let fixture: ComponentFixture<HangarStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangarStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HangarStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
