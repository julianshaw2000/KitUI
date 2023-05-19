/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GetmonthyearComponent } from './getmonthyear.component';

describe('GetmonthyearComponent', () => {
  let component: GetmonthyearComponent;
  let fixture: ComponentFixture<GetmonthyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetmonthyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetmonthyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
