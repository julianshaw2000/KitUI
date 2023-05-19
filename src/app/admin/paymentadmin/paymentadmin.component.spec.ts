import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentadminComponent } from './paymentadmin.component';

describe('PaymentadminComponent', () => {
  let component: PaymentadminComponent;
  let fixture: ComponentFixture<PaymentadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
