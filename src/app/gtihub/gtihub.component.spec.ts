import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtihubComponent } from './gtihub.component';

describe('GtihubComponent', () => {
  let component: GtihubComponent;
  let fixture: ComponentFixture<GtihubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtihubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtihubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
