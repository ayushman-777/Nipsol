import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidMeterComponent } from './covid-meter.component';

describe('CovidMeterComponent', () => {
  let component: CovidMeterComponent;
  let fixture: ComponentFixture<CovidMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
