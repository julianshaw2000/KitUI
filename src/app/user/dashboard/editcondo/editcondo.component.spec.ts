/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditcondoComponent } from './editcondo.component';

describe('EditcondoComponent', () => {
  let component: EditcondoComponent;
  let fixture: ComponentFixture<EditcondoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcondoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
