import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaylogComponent } from './paylog.component';

describe('PaylogComponent', () => {
  let component: PaylogComponent;
  let fixture: ComponentFixture<PaylogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaylogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaylogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
