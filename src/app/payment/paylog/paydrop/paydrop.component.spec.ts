/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaydropComponent } from './paydrop.component';

describe('PaydropComponent', () => {
  let component: PaydropComponent;
  let fixture: ComponentFixture<PaydropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaydropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaydropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
